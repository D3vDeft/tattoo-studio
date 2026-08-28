<template>
  <div class="container mx-auto py-10">
    <h2 class="text-2xl mb-4">Servicios</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <PCard v-for="(s, idx) in services" :key="idx">
        <template #title><h4>{{ s.title }}</h4></template>
        <p>{{ s.description }}</p>
      </PCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const services = ref([
      { title: 'Tatuaje personalizado', description: 'Descripción detallada del servicio.' },
      { title: 'Cover-up', description: 'Descripción detallada del servicio.' },
      { title: 'Retoques', description: 'Descripción detallada del servicio.' }
    ])
    return { services }
  }
})
</script>
