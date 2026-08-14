# AuxiFarma — PWA educativa offline

PWA modular, offline-first y consultiva para auxiliares de farmacia. Marca principal: **MedSolution · Soluciones Médicas**.

## Objetivo
Herramienta educativa de consulta, sin cuentas, pacientes, registro de pasantías ni almacenamiento de datos personales.

## Arquitectura
- `src/data/`: contenido educativo
- `src/js/`: lógica y navegación
- `src/css/`: interfaz
- `sw.js`: caché offline
- `manifest.webmanifest`: instalación como PWA

La base de contenido se mantiene separada de la interfaz para permitir una futura actualización o conexión sin rehacer la aplicación.

> El contenido farmacológico debe ampliarse y verificarse contra fuentes oficiales/farmacológicas y normativa local antes de una distribución educativa formal. La aplicación no sustituye prescripción ni evaluación profesional.
