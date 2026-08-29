<template>
  <div class="container mx-auto py-10">
    <h1 class="text-3xl font-bold mb-4">Servicios</h1>
    <p class="mb-6 text-gray-700">Ofrecemos una gama completa de servicios para adaptarnos a tu proyecto: desde tatuajes pequeños hasta piezas a escala y micropigmentación.</p>

    <div class="grid md:grid-cols-2 gap-6">
      <PCard v-for="(s, idx) in services" :key="idx">
        <template #title><h3 class="text-xl font-semibold">{{ s.title }}</h3></template>
        <p>{{ s.description }}</p>
      </PCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useSeo } from '@/composables/useSeo'

export default defineComponent({
  setup() {
    useSeo({
      title: 'Servicios — El Manicomio Tattoo',
      description: 'Descubre nuestros servicios: tatuajes personalizados, cover-up, retoques y micropigmentación. Consulta precios y disponibilidad.'
    })

    const services = ref([
      { title: 'Tatuaje personalizado', description: 'Sesiones de diseño y ejecución adaptadas a tu piel y estilo. Trabajos a medida y asesoramiento artístico.' },
      { title: 'Cover-up', description: 'Cubiertas creativas y profesionales para transformar tatuajes antiguos o con resultados no deseados.' },
      { title: 'Tatuajes a color y blackwork', description: 'Especialistas en color y contraste, con técnicas para lograr tonos duraderos y suaves degradados.' },
      { title: 'Micropigmentación', description: 'Tratamientos de micropigmentación estética y retoques para mantener el color y definición.' }
    ])

    return { services }
  }
})
</script>
