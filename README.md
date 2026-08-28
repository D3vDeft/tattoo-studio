# Tattoo-studio — plantilla

Plantilla Vue 3 + TypeScript para estudio de tatuajes. Incluye Tailwind, PrimeVue y lucide. Contenido placeholder que debe reemplazarse por los textos e imágenes reales.

Cambios recientes para compatibilidad pnpm:
- Se ha fijado tailwindcss a la versión 3.4.19 (serie 3 LTS) para evitar errores de resolución.
- Reemplazado paquete deprecated `lucide-vue-next` por `@lucide/vue` y actualizadas las importaciones en `src/main.ts`.
- Ajustado a `@lucide/vue@^1.35.0` para usar la versión publicada en el registro.

Pasos rápidos (usando pnpm):

1. Clona el repo: git clone git@github.com:D3vDeft/tattoo-studio.git
2. cd tattoo-studio
3. Instala dependencias: pnpm install
   - Si ves errores de cache: pnpm store prune && pnpm cache clean && pnpm install
4. Ejecuta en dev: pnpm run dev
5. Para producción: pnpm run build y pnpm run preview
6. Generar sitemap tras el build: pnpm run generate-sitemap

Siguientes pasos recomendados:
- Reemplaza textos y carga imágenes en src/assets.
- Añade integración real para el formulario de contacto y reCAPTCHA si procede.
- Configura deployment en Vercel/Netlify.

Si al ejecutar pnpm install aparece algún error, copia el mensaje aquí y lo reviso y arreglo en el repo si hace falta.
