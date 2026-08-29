<template>
  <section>
    <!-- Hero -->
    <div class="relative bg-cover bg-center h-[60vh] flex items-center" :style="`background-image: url(${heroUrl})`">
      <div class="container mx-auto text-white">
        <div class="max-w-xl bg-black/50 p-6 rounded">
          <h1 class="text-4xl font-extrabold">Tatuajes personalizados con carácter</h1>
          <p class="mt-3">En El Manicomio Tattoo convertimos tus ideas en piezas únicas. Técnica, higiene y creatividad al servicio de tu piel.</p>
          <router-link to="/contact"><PButton label="Pedir cita" class="mt-4" /></router-link>
        </div>
      </div>
    </div>

    <!-- About -->
    <div class="container mx-auto py-10">
      <PCard>
        <template #title><h2 class="text-2xl">Nuestro enfoque</h2></template>
        <p>Somos un estudio de tatuajes centrado en la calidad artística y la seguridad. Nuestro equipo combina estilos tradicionales y contemporáneos para ofrecer trabajos personalizados que envejecen bien y te representan.</p>
      </PCard>
    </div>

    <!-- Servicios (resumen) -->
    <div class="container mx-auto py-10">
      <h2 class="text-2xl mb-4">Servicios</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <PCard v-for="s in services" :key="s.title">
          <template #title><h3 class="text-lg font-semibold">{{ s.title }}</h3></template>
          <p class="text-sm">{{ s.excerpt }}</p>
        </PCard>
      </div>
    </div>

    <!-- Galería destacada -->
    <div class="container mx-auto py-10">
      <h2 class="text-2xl mb-4">Galería destacada</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(img, i) in gallery" :key="i" class="h-44 bg-gray-200 rounded overflow-hidden">
          <img :src="img" :alt="`Tatuaje ${i+1}`" class="w-full h-full object-cover" loading="lazy" />
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
      description: 'Estudio de tatuajes especialista en diseños personalizados, cover-ups y trabajos de detalle. Reserva tu cita y transforma tu idea en arte.'
    })

    const services = ref([
      { title: 'Diseño personalizado', excerpt: 'Creación de diseños únicos a medida según tu idea y estilo.' },
      { title: 'Cover-up y correcciones', excerpt: 'Soluciones creativas para cubrir tatuajes antiguos o no deseados.' },
      { title: 'Micropigmentación y retoques', excerpt: 'Trabajo de detalle, color y retoques para mantener tu tatuaje impecable.' }
    ])

    // Usamos URLs de prueba (puedes sustituir por las URLs reales del sitio)
    const heroUrl = 'https://picsum.photos/id/1011/1600/900'
    const gallery = ref<string[]>([])

    onMounted(() => {
      // generar 8 imágenes de ejemplo (puedes sustituir por URLs del sitio oficial)
      const imgs: string[] = []
      for (let i = 0; i < 8; i++) {
        imgs.push(`https://picsum.photos/seed/manicomio${i}/800/600`)
      }
      gallery.value = imgs
    })

    return { services, gallery, heroUrl }
  }
})
</script>
