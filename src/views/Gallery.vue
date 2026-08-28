<template>
  <div class="container mx-auto py-10">
    <h2 class="text-2xl mb-4">Galería completa</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="n in 16" :key="n" class="h-48 bg-gray-200 rounded overflow-hidden">
        <img :src="`/src/assets/portfolio-${n % 4 + 1}.jpg`" alt="tattoo" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>
