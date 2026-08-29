<template>
  <div class="container mx-auto py-10">
    <h1 class="text-3xl font-bold mb-4">Galería</h1>
    <p class="mb-6 text-gray-700">Una selección de trabajos realizados en el estudio. Haz click en las imágenes para verlas en detalle.</p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="(img, i) in images" :key="i" class="h-48 rounded overflow-hidden">
        <img :src="img" :alt="`Galería ${i+1}`" class="w-full h-full object-cover" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useSeo } from '@/composables/useSeo'

export default defineComponent({
  setup() {
    useSeo({
      title: 'Galería — El Manicomio Tattoo',
      description: 'Explora la galería de El Manicomio Tattoo: piezas recientes en estilos variados. Inspírate y pide tu cita.'
    })

    const images = ref<string[]>([])

    onMounted(() => {
      // placeholder images; replace with official site URLs or upload to /src/assets
      const imgs: string[] = []
      for (let i = 1; i <= 16; i++) {
        imgs.push(`https://picsum.photos/seed/manicomio-gallery-${i}/800/600`)
      }
      images.value = imgs
    })

    return { images }
  }
})
</script>
