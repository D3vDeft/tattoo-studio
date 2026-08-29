<template>
  <section id="testimonials" class="py-12">
    <h2 class="text-2xl h-gothic mb-6">Testimonios</h2>
    <div class="grid md:grid-cols-3 gap-4">
      <div v-for="(t, i) in testimonials" :key="i" class="p-4 bg-surface rounded border border-neutral-800">
        <p class="text-neutral-300">"{{ t.quote }}"</p>
        <div class="mt-3 text-sm text-neutral-500">— {{ t.author }}</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup(){
    const testimonials = ref([
      { author: 'María', quote: 'Excelente trabajo. Muy profesionales y cuidadosos.' },
      { author: 'Javier', quote: 'Mi tatuaje quedó perfecto. Repetiré sin dudar.' },
      { author: 'Lucía', quote: 'Ambiente seguro y artistas muy talentosos.' }
    ])
    return { testimonials }
  }
})
</script>
