# PR: Poblar sitio con contenido SEO y placeholders de imágenes

Resumen

Este pull request añade contenido reescrito y optimizado para SEO en las vistas principales del proyecto (Home, About, Services, Gallery, Contact). También se añadieron placeholders remotos para las imágenes de la galería y el hero, y se mantuvo íntegro el archivo de políticas/terminos como solicitaste.

Qué incluye

- Home: hero optimizado (H1), descripción, resumen de servicios y galería destacada con imágenes remotas.
- About: texto reescrito enfatizando experiencia, higiene y equipo.
- Services: descripciones optimizadas de servicios principales.
- Gallery: galería con placeholders remotos para visualización en dev.
- Contact: formulario con campos básicos y mensajes de confirmación (demo).
- No se modificaron: src/views/Policies.vue (términos y condiciones / políticas) en cumplimiento de tu instrucción.

Archivos modificados (lista principal)

- src/views/Home.vue
- src/views/About.vue
- src/views/Services.vue
- src/views/Gallery.vue
- src/views/Contact.vue

Checklist para revisión

- [ ] Revisar textos en cada vista y confirmar que la redacción es aceptable.
- [ ] Confirmar meta-descriptions y títulos para SEO (puedo ajustarlos por keywords concretas si me indicas cuáles).
- [ ] Proveer imágenes originales (ZIP) o lista de URLs para que las descargue, optimice y suba al repo. Actualmente se usan placeholders remotos (picsum.photos).
- [ ] Revisar formulario de contacto e indicar integración preferida (correo SMTP, API o servicio externo).

Cómo crear el Pull Request (2 opciones)

1) Abrir PR en la web (rápido):
   Abre este enlace en tu navegador y sigue los pasos para crear el PR:
   https://github.com/D3vDeft/tattoo-studio/compare/main...feature/populate-content?expand=1

2) Usando la CLI de GitHub (gh):
   git fetch origin
   git checkout feature/populate-content
   gh pr create --base main --head feature/populate-content --title "Populate site with SEO-optimized content" --body-file .github/PULL_REQUEST_TEMPLATE.md

Notas

- Si quieres que cree yo la PR desde la API, confírmame y la intentaré crear; actualmente no estoy llamando a la API de Pull Requests desde este entorno, por eso he dejado el enlace y el template para que lo revises y generes el PR fácilmente.
- Cuando estés listo para que incluya las imágenes reales, responde aquí con "Imágenes: URLs" y pega la lista de URLs o adjunta el ZIP y yo me encargo de optimizarlas y subirlas a la rama.

Gracias — en cuanto crees el PR o me digas que lo haga yo, continuaré con las imágenes y la configuración final para deploy.
