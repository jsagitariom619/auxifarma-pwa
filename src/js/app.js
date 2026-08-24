import { categories, educationalCards } from '../data/categories.js';
import { practiceQuestions } from '../data/practice.js';
import { medicines, catalogueMeta } from '../data/medicines.js';

const app=document.querySelector('#app');
const side=document.querySelector('#side');
const dialog=document.querySelector('#dialog');
const detail=document.querySelector('#detail');
const menu=document.querySelector('#menu');
const close=document.querySelector('#close');
const populatedCategories=categories.filter(c=>medicines.some(m=>m.category===c.id));
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const normalize=v=>String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const cat=id=>categories.find(c=>c.id===id);
const medText=m=>normalize(`${m.name} ${m.active} ${m.laboratory} ${m.presentations} ${cat(m.category)?.name||''}`);

function medicineCard(m){
  const c=cat(m.category);
  return `<article class="card medicine-card"><button class="med" data-med="${esc(m.id)}"><div class="med-top"><span class="pill">${esc(c?.name||m.category)}</span><span class="med-arrow">↗</span></div><h3>${esc(m.name)}</h3><p>${esc(m.active)}</p><div class="medicine-meta"><span>${esc(m.route)}</span><span>${esc(m.laboratory)}</span></div></button></article>`;
}
function categoryCard(c){
  const count=medicines.filter(m=>m.category===c.id).length;
  return `<article class="card category-card"><button class="cat" data-cat="${esc(c.id)}"><div class="category-icon">${esc(c.icon)}</div><div class="category-copy"><strong>${esc(c.name)}</strong><span>${count} medicamentos</span></div><span class="category-arrow">›</span></button></article>`;
}
function searchMedicines(q){const n=normalize(q).trim();return n?medicines.filter(m=>medText(m).includes(n)):[]}
function searchCategories(q){const n=normalize(q).trim();return populatedCategories.filter(c=>!n||normalize(`${c.name} ${c.keywords.join(' ')}`).includes(n)||medicines.some(m=>m.category===c.id&&medText(m).includes(n)))}

function home(){
  const featured=populatedCategories.slice().sort((a,b)=>medicines.filter(m=>m.category===b.id).length-medicines.filter(m=>m.category===a.id).length).slice(0,8);
  return `<section class="hero modern-hero"><div class="hero-copy"><span class="eyebrow">AUXIFARMA · BOLIVIA</span><h1>Tu vademécum de bolsillo.</h1><p>Busca por marca, principio activo o categoría.</p><div class="search hero-search"><span>⌕</span><input id="homeSearch" autocomplete="off" placeholder="Ej. amoxicilina, ibuprofeno, antialérgicos…"></div><div id="homeResults" class="live-results hidden"></div></div><div class="hero-stats"><div><b>${medicines.length}</b><span>medicamentos</span></div><div><b>${populatedCategories.length}</b><span>categorías activas</span></div><div><b>BO</b><span>enfoque local</span></div></div></section><section class="section"><div class="title"><div><span class="section-kicker">EXPLORAR</span><h2>Categorías principales</h2></div><button class="text-link" data-route="vademecum">Ver vademécum →</button></div><div class="grid category-grid">${featured.map(categoryCard).join('')}</div></section><section class="section compact-section"><div class="trust-card"><div class="trust-icon">✓</div><div><strong>Información orientada al mercado boliviano</strong><p>Catálogo ampliado con referencias de AGEMED, INTI y Bagó de Bolivia.</p></div></div></section>`;
}

function vademecum(q=''){
  const cats=searchCategories(q), meds=searchMedicines(q).slice(0,30);
  const medSection=q.trim()?`<section class="search-block"><div class="title mini-title"><h2>Medicamentos</h2><span>${meds.length}${searchMedicines(q).length>30?'+' : ''} resultados</span></div><div class="grid medicine-grid">${meds.length?meds.map(medicineCard).join(''):'<div class="card empty">No encontramos medicamentos con ese término.</div>'}</div></section>`:'';
  return `<section class="page-head"><span class="eyebrow">CATÁLOGO BOLIVIA</span><h1>Vademécum</h1><p>${medicines.length} medicamentos organizados en ${populatedCategories.length} categorías.</p><div class="toolbar modern-toolbar"><div class="search wide"><span>⌕</span><input id="search" value="${esc(q)}" autocomplete="off" placeholder="Buscar por medicamento, principio activo o laboratorio…"></div></div></section>${medSection}<section class="section"><div class="title mini-title"><h2>Categorías</h2><span id="categoryCount">${cats.length}</span></div><div id="results" class="grid category-grid">${cats.length?cats.map(categoryCard).join(''):'<div class="card empty">Sin categorías coincidentes.</div>'}</div></section>`;
}

function categoryDetail(id){
  const c=cat(id);if(!c)return;
  const list=medicines.filter(m=>m.category===id);
  detail.innerHTML=`<div class="modal-head"><span class="pill">${list.length} MEDICAMENTOS</span><h2>${esc(c.name)}</h2><p>${esc(c.description)}</p></div><div class="detail-list">${list.map(medicineCard).join('')}</div>`;
  dialog.showModal();
}
function medicineDetail(id){
  const m=medicines.find(x=>x.id===id);if(!m)return;
  const c=cat(m.category);
  detail.innerHTML=`<div class="modal-head"><span class="pill">${esc(c?.name||m.category)}</span><h2>${esc(m.name)}</h2><p class="active-name">${esc(m.active)}</p></div><div class="fact-grid"><div><small>Vía / administración</small><strong>${esc(m.route)}</strong></div><div><small>Presentación</small><strong>${esc(m.presentations)}</strong></div><div><small>Laboratorio</small><strong>${esc(m.laboratory)}</strong></div>${m.registry?`<div><small>Registro sanitario</small><strong>${esc(m.registry)}</strong></div>`:''}</div>`;
  dialog.showModal();
}
function education(){return `<section class="page-head"><span class="eyebrow">APRENDIZAJE</span><h1>Educación farmacéutica</h1><p>Conceptos breves para repasar durante la pasantía.</p></section><div class="grid education-grid">${educationalCards.map(x=>`<article class="card info"><span class="pill">CONCEPTO</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`).join('')}</div>`}
function tools(){return `<section class="page-head"><span class="eyebrow">UTILIDADES</span><h1>Herramientas</h1></section><div class="grid tools-grid"><article class="card tool-card"><div class="tool-icon">↔</div><h3>Conversor de unidades</h3><div class="toolbar converter"><input id="val" type="number" inputmode="decimal" placeholder="Valor"><select id="from"><option>mg</option><option>g</option><option>mL</option><option>L</option></select><select id="to"><option>g</option><option>mg</option><option>L</option><option>mL</option></select></div><button class="primary" id="convert">Convertir</button><output id="out"></output></article><article class="card tool-card"><div class="tool-icon">▦</div><h3>Organización de farmacia</h3><p>Repasa recepción, almacenamiento, rotación FEFO, vencimientos y cadena de frío desde Educación y Modo práctica.</p></article></div>`}
function nextPracticeQuestion(){const key='auxifarma-practice-queue-v2';let queue=[];try{queue=JSON.parse(localStorage.getItem(key)||'[]')}catch{}if(!Array.isArray(queue)||queue.some(i=>!Number.isInteger(i)||i<0||i>=practiceQuestions.length))queue=[];if(!queue.length){queue=practiceQuestions.map((_,i)=>i);for(let i=queue.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[queue[i],queue[j]]=[queue[j],queue[i]]}}const index=queue.shift();localStorage.setItem(key,JSON.stringify(queue));return {question:practiceQuestions[index],remaining:queue.length,total:practiceQuestions.length}}
function practice(){const data=nextPracticeQuestion(),q=data.question;return `<section class="page-head"><span class="eyebrow">BANCO ROTATIVO · ${data.total} PREGUNTAS</span><h1>Modo práctica</h1></section><article class="card practice"><div class="question-mark">?</div><span class="pill">PREGUNTA</span><h2>${esc(q[0])}</h2><div class="practice-actions"><button class="primary" id="answer">Mostrar respuesta</button><p id="ans" class="answer hidden">${esc(q[1])}</p><button class="secondary" id="next">Otra pregunta</button><small class="practice-progress">${data.remaining} preguntas antes de repetir el ciclo</small></div></article>`}
function about(){return `<section class="page-head"><span class="eyebrow">MEDSOLUTION</span><h1>AuxiFarma</h1><p>Vademécum y herramienta educativa para auxiliares de farmacia en Bolivia.</p></section><article class="card about-card"><div class="about-logo">A+</div><div><h2>MedSolution · Soluciones Médicas</h2><p>Base actualizada: ${esc(catalogueMeta.updated)} · ${medicines.length} medicamentos.</p><p>La información se organiza para consulta y estudio. La base se contrasta con fuentes regulatorias y catálogos farmacéuticos bolivianos.</p></div></article>`}

function render(r){
  if(r==='vademecum')app.innerHTML=vademecum();
  else if(r==='educacion')app.innerHTML=education();
  else if(r==='herramientas')app.innerHTML=tools();
  else if(r==='practica')app.innerHTML=practice();
  else if(r==='acerca')app.innerHTML=about();
  else app.innerHTML=home();
  document.querySelectorAll('#side nav button').forEach(b=>b.classList.toggle('active',b.dataset.route===(r||'inicio')));
  bind();
}
function bind(){
  document.querySelectorAll('button[data-route]').forEach(b=>b.onclick=()=>navigate(b.dataset.route));
  document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>categoryDetail(b.dataset.cat));
  document.querySelectorAll('[data-med]').forEach(b=>b.onclick=()=>medicineDetail(b.dataset.med));
  const s=document.querySelector('#search');if(s)s.oninput=()=>{const q=s.value;app.innerHTML=vademecum(q);bind();setTimeout(()=>document.querySelector('#search')?.focus(),0)};
  const hs=document.querySelector('#homeSearch');if(hs)hs.oninput=()=>{const box=document.querySelector('#homeResults'),items=searchMedicines(hs.value).slice(0,6);if(hs.value.trim().length<2){box.classList.add('hidden');box.innerHTML='';return}box.innerHTML=items.length?items.map(m=>`<button data-med="${esc(m.id)}"><strong>${esc(m.name)}</strong><span>${esc(m.active)}</span></button>`).join(''):`<div class="live-empty">Sin resultados</div>`;box.classList.remove('hidden');box.querySelectorAll('[data-med]').forEach(b=>b.onclick=()=>medicineDetail(b.dataset.med))};
  if(hs)hs.onkeydown=e=>{if(e.key==='Enter'&&hs.value.trim()){location.hash='vademecum';setTimeout(()=>{app.innerHTML=vademecum(hs.value);bind()},0)}};
  const a=document.querySelector('#answer');if(a)a.onclick=()=>document.querySelector('#ans')?.classList.remove('hidden');
  const n=document.querySelector('#next');if(n)n.onclick=()=>{app.innerHTML=practice();bind()};
  const cv=document.querySelector('#convert');if(cv)cv.onclick=convert;
}
function navigate(route){side.classList.remove('open');location.hash=route}
function convert(){const v=Number(document.querySelector('#val').value),a=document.querySelector('#from').value,b=document.querySelector('#to').value,o=document.querySelector('#out');if(!Number.isFinite(v)){o.textContent='Introduce un valor.';return}const f={mg:.001,g:1,mL:.001,L:1};o.textContent=(a[0]===b[0]?(v*f[a]/f[b]).toLocaleString('es-BO'):'No se convierte masa ↔ volumen sin densidad o concentración.')}
menu.onclick=e=>{e.stopPropagation();side.classList.toggle('open')};
side.onclick=e=>e.stopPropagation();
document.addEventListener('click',()=>side.classList.remove('open'));
close.onclick=()=>dialog.close();
dialog.onclick=e=>{if(e.target===dialog)dialog.close()};
window.addEventListener('hashchange',()=>render(location.hash.slice(1)||'inicio'));
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
render(location.hash.slice(1)||'inicio');
