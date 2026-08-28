<template>
  <footer class="bg-gray-900 text-gray-200">
    <div class="container mx-auto p-6 flex flex-col md:flex-row justify-between">
      <div>
        <h3 class="font-bold">El Manicomio Tattoo</h3>
        <p class="text-sm">Calle Falsa 123, Ciudad • Tel: +34 600 000 000 • Lun-Vie 10:00-19:00</p>
      </div>
      <div class="mt-4 md:mt-0 text-sm">
        <router-link to="/policies" class="hover:underline">Política de privacidad</router-link>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>
