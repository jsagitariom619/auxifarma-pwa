export const categories = [
  { id:'analgesicos', name:'Analgésicos y antipiréticos', icon:'◉', description:'Conceptos generales sobre dolor y fiebre.' },
  { id:'antiinflamatorios', name:'Antiinflamatorios', icon:'◈', description:'Clasificación y conceptos básicos de antiinflamatorios.' },
  { id:'antigripales', name:'Antigripales y resfriado', icon:'☁', description:'Categoría educativa para productos destinados a síntomas respiratorios comunes.' },
  { id:'antitusivos', name:'Antitusivos', icon:'◌', description:'Conceptos sobre medicamentos relacionados con la tos.' },
  { id:'mucoliticos', name:'Mucolíticos y expectorantes', icon:'≋', description:'Conceptos sobre secreciones y tos productiva.' },
  { id:'broncodilatadores', name:'Broncodilatadores', icon:'◫', description:'Grupo respiratorio y conceptos de uso farmacéutico.' },
  { id:'antialergicos', name:'Antialérgicos / antihistamínicos', icon:'✦', description:'Conceptos básicos relacionados con alergias.' },
  { id:'antibioticos', name:'Antibióticos', icon:'◎', description:'Clasificación educativa y uso responsable de antimicrobianos.' },
  { id:'antifungicos', name:'Antifúngicos', icon:'◇', description:'Conceptos generales sobre medicamentos contra hongos.' },
  { id:'antivirales', name:'Antivirales', icon:'○', description:'Conceptos generales sobre medicamentos dirigidos a virus específicos.' },
  { id:'antiparasitarios', name:'Antiparasitarios', icon:'◈', description:'Clasificación educativa de medicamentos antiparasitarios.' },
  { id:'gastrointestinales', name:'Gastrointestinales', icon:'◍', description:'Categoría amplia para el estudio del aparato digestivo.' },
  { id:'antiacidos', name:'Antiácidos', icon:'◇', description:'Conceptos sobre productos relacionados con acidez y malestar gástrico.' },
  { id:'antiemeticos', name:'Antieméticos', icon:'◌', description:'Conceptos relacionados con náuseas y vómitos.' },
  { id:'antidiarreicos', name:'Antidiarreicos', icon:'≋', description:'Conceptos generales sobre el manejo farmacéutico de la diarrea.' },
  { id:'laxantes', name:'Laxantes', icon:'◌', description:'Clasificación educativa de medicamentos para estreñimiento.' },
  { id:'cardiovasculares', name:'Cardiovasculares', icon:'♡', description:'Panorama general de grupos cardiovasculares.' },
  { id:'antihipertensivos', name:'Antihipertensivos', icon:'♥', description:'Conceptos sobre medicamentos utilizados en el control de la presión arterial.' },
  { id:'antidiabeticos', name:'Antidiabéticos', icon:'◫', description:'Conceptos generales sobre medicamentos relacionados con diabetes.' },
  { id:'dermatologicos', name:'Dermatológicos', icon:'□', description:'Formas y grupos de uso dermatológico.' },
  { id:'oftalmicos', name:'Oftálmicos', icon:'◉', description:'Conceptos sobre preparaciones destinadas al uso ocular.' },
  { id:'oticos', name:'Óticos', icon:'◉', description:'Conceptos sobre preparaciones destinadas al oído.' },
  { id:'nasales', name:'Nasales', icon:'⌁', description:'Formas farmacéuticas y conceptos de uso nasal.' },
  { id:'ginecologicos', name:'Ginecológicos', icon:'○', description:'Panorama educativo de grupos de uso ginecológico.' },
  { id:'urologicos', name:'Urológicos', icon:'◌', description:'Panorama educativo de grupos de uso urológico.' },
  { id:'vitaminas', name:'Vitaminas y minerales', icon:'✚', description:'Conceptos sobre micronutrientes y suplementación responsable.' },
  { id:'antisepticos', name:'Antisépticos y desinfectantes', icon:'✧', description:'Diferencias y principios básicos de higiene farmacéutica.' },
  { id:'corticoides', name:'Corticoides', icon:'◇', description:'Conceptos generales sobre este grupo farmacológico.' },
  { id:'pediatricos', name:'Medicamentos pediátricos', icon:'○', description:'Formas farmacéuticas y consideraciones educativas en pediatría.' },
  { id:'otros', name:'Otros grupos farmacológicos', icon:'＋', description:'Categoría para ampliar el contenido progresivamente.' }
];

export const educationalCards = [
  {title:'Principio activo', text:'Es la sustancia responsable del efecto farmacológico de un medicamento.'},
  {title:'Forma farmacéutica', text:'Es la presentación física preparada para facilitar la administración de un medicamento.'},
  {title:'Vía de administración', text:'Describe la ruta por la que un medicamento llega al organismo, por ejemplo oral, tópica, inhalatoria u ocular.'},
  {title:'Presentación', text:'Indica cómo se comercializa un producto, por ejemplo comprimido, cápsula, solución, suspensión, crema, gotas o aerosol.'},
  {title:'Condición de dispensación', text:'Indica si la entrega del medicamento está sujeta a receta u otras condiciones establecidas por la normativa.'},
  {title:'Almacenamiento', text:'Comprende las condiciones de temperatura, humedad, luz y organización necesarias para conservar correctamente los productos.'},
  {title:'Cadena de frío', text:'Conjunto de medidas para mantener productos que requieren temperatura controlada desde su recepción hasta su conservación.'},
  {title:'Lote y vencimiento', text:'Datos esenciales para identificar un producto y aplicar correctamente la rotación y el control de fechas.'},
  {title:'Dispensación responsable', text:'Proceso que debe respetar la receta cuando corresponde, la normativa y las competencias del personal de farmacia.'},
  {title:'Interacción', text:'Situación en la que un medicamento, alimento u otra sustancia puede modificar el efecto o comportamiento de otro medicamento.'},
  {title:'Reacción adversa', text:'Respuesta nociva o no deseada que puede aparecer con un medicamento y que debe ser reconocida y comunicada según los procedimientos establecidos.'},
  {title:'Resistencia antimicrobiana', text:'Fenómeno por el cual los microorganismos dejan de responder adecuadamente a determinados antimicrobianos.'},
  {title:'Medicamentos de uso tópico', text:'Preparaciones destinadas a aplicarse sobre superficies corporales como piel o mucosas, según corresponda.'},
  {title:'Medicamentos inhalatorios', text:'Preparaciones administradas mediante el aparato respiratorio; requieren conocer correctamente su forma farmacéutica y conservación.'},
  {title:'Medicamentos oftálmicos', text:'Preparaciones destinadas al ojo que requieren especial atención a higiene, conservación y contaminación del envase.'}
];

export const practiceQuestions = [
  ['¿Qué es un principio activo?','Es la sustancia responsable del efecto farmacológico de un medicamento.'],
  ['¿Qué diferencia existe entre una forma farmacéutica y un principio activo?','La forma farmacéutica es la presentación física; el principio activo es la sustancia responsable del efecto farmacológico.'],
  ['¿Qué información aporta el lote?','Permite identificar un conjunto de unidades fabricadas y facilita la trazabilidad.'],
  ['¿Por qué se controla la fecha de vencimiento?','Porque permite evitar la dispensación de productos fuera del periodo autorizado de uso.'],
  ['¿Qué es la cadena de frío?','Es el conjunto de medidas para mantener productos a la temperatura controlada que requieren durante su conservación y manejo.'],
  ['¿Qué significa dispensación responsable?','Entregar o facilitar medicamentos respetando la receta cuando corresponda, la normativa y las competencias del personal.']
];