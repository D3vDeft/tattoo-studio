Title: feat(layout): gothic dark landing — landing redesign

Description:
Se implementa un rediseño tipo landing page con estética gótica y paleta oscura.

Cambios principales:
- Nueva landing single-page (anclas): Inicio, Servicios, Galería, Testimonios, Contacto, Footer.
- Componentes añadidos/actualizados: Header, Hero, ServiceCard, GalleryMasonry, TestimonialSlider, Footer.
- Tailwind config y estilos globales (fuentes: Cinzel Decorative + Inter; colores neon verde + rojo sangre).
- Script helper scripts/optimize-images.js para optimización local de imágenes.
- Manteniendo sin cambios: políticas/terminos.

Checklist para revisión:
- [ ] Revisar redacción y meta-descriptions (SEO).
- [ ] Confirmar logo (subir src/assets/logo.png en alta resolución).
- [ ] Proveer imágenes de galería (ZIP o URLs) para optimizar e incorporar.
- [ ] Decidir e integrar método para el formulario de contacto (demo por ahora).
- [ ] Revisar accesibilidad y contrastes en mobile.

Cómo probar localmente:
- git fetch origin
- git checkout feature/layout-redesign
- pnpm install
- pnpm run dev
- Abrir http://localhost:5173

Notas:
- El formulario de contacto actúa como demo (alert); puedo integrar SMTP/Formspree/Netlify/Vercel si indicas preferencia.
- Si quieres que incorpore las imágenes oficiales antes de abrir el PR, pásame un ZIP o las URLs y las añadiré y optimizaré en la rama.
