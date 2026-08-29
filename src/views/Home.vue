<template>
  <section>
    <!-- Hero -->
    <div class="relative bg-[url('/src/assets/hero.jpg')] bg-cover bg-center h-[60vh] flex items-center">
      <div class="container mx-auto text-white">
        <div class="max-w-xl bg-black/40 p-6 rounded">
          <h1 class="text-4xl font-extrabold neon-flicker">Estilo único para tu piel</h1>
          <p class="mt-3">Tatuajes con personalidad y técnica profesional. Reserva tu cita y transforma tu idea en arte.</p>
          <router-link to="/contact"><PButton label="Pedir cita" class="mt-4" /></router-link>
        </div>
      </div>
    </div>

    <!-- About -->
    <div class="container mx-auto py-10 reveal">
      <PCard>
        <template #title><h3 class="text-2xl">Sobre el estudio</h3></template>
        <p>El Manicomio Tattoo es un estudio con años de experiencia especializado en trabajos personalizados y cobertura. Nuestro equipo combina tradición y técnica moderna para ofrecer resultados duraderos.</p>
      </PCard>
    </div>

    <!-- Servicios (resumen) -->
    <div class="container mx-auto py-10 grid md:grid-cols-3 gap-6 reveal">
      <PCard v-for="s in services" :key="s.title">
        <template #title><h4>{{ s.title }}</h4></template>
        <p>{{ s.excerpt }}</p>
      </PCard>
    </div>

    <!-- Galería destacada -->
    <div class="container mx-auto py-10 reveal">
      <h3 class="text-2xl mb-4">Galería</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(img, idx) in gallery" :key="idx" class="h-40 bg-gray-200 rounded overflow-hidden transform hover:scale-105 transition">
          <img :src="img" :alt="`tattoo ${idx+1}`" class="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
      <div class="mt-4">
        <router-link to="/gallery"><PButton label="Ver más" /></router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useSeo } from '@/composables/useSeo'

export default defineComponent({
  setup() {
    useSeo({
      title: 'El Manicomio Tattoo — Tatuajes personalizados',
      description: 'Estudio de tatuajes especialista en trabajos personalizados, cover-ups y retoques. Reserva tu cita y transforma tu idea en arte.'
    })

    const services = ref([
      { title: 'Tatuaje personalizado', excerpt: 'Diseños a medida, desde pequeños hasta piezas grandes.' },
      { title: 'Cover-up', excerpt: 'Transformamos tatuajes antiguos en nuevas piezas.' },
      { title: 'Microblading y retoques', excerpt: 'Trabajo fino de detalle y cobertura.' }
    ])

    // Prefer local assets if present; fallback to remote placeholders
    const localGallery = [
      '/src/assets/portfolio-1.jpg',
      '/src/assets/portfolio-2.jpg',
      '/src/assets/portfolio-3.jpg',
      '/src/assets/portfolio-4.jpg',
      '/src/assets/portfolio-1.jpg',
      '/src/assets/portfolio-2.jpg',
      '/src/assets/portfolio-3.jpg',
      '/src/assets/portfolio-4.jpg'
    ]

    const gallery = ref<string[]>([])

    onMounted(() => {
      // Try to use local assets; the browser will handle missing files gracefully and show placeholders if needed.
      gallery.value = localGallery

      // Add reveal-on-scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('reveal-active')
        })
      }, { threshold: 0.12 })

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    })

    return { services, gallery }
  }
})
</script>

<style scoped>
.reveal { opacity: 0; transform: translateY(18px); transition: opacity .6s ease, transform .6s ease; }
.reveal-active { opacity: 1; transform: translateY(0); }

/* subtle neon flicker for hero heading to give life */
@keyframes neonFlicker {
  0% { text-shadow: 0 0 4px rgba(0,208,127,0.6), 0 0 10px rgba(0,208,127,0.08); }
  50% { text-shadow: 0 0 8px rgba(0,208,127,0.9), 0 0 22px rgba(0,208,127,0.14); }
  100% { text-shadow: 0 0 4px rgba(0,208,127,0.6), 0 0 10px rgba(0,208,127,0.08); }
}
.neon-flicker { animation: neonFlicker 3.8s ease-in-out infinite; }
</style>
