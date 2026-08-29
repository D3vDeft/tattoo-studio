<template>
  <footer class="mt-12 border-t border-neutral-900 py-8 bg-transparent">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
      <div class="flex items-center gap-3">
        <img src="https://raw.githubusercontent.com/D3vDeft/tattoo-studio/main/src/assets/logo.png" alt="logo" class="w-10 h-10 object-contain"/>
        <div>
          <div class="h-gothic text-neon">El Manicomio</div>
          <div class="text-sm text-neutral-500">Calle Falsa 123 · Tel: +34 600 000 000</div>
        </div>
      </div>

      <div class="text-sm text-neutral-400">© 2026 El Manicomio Tattoo. Todos los derechos reservados.</div>

      <div class="flex gap-3">
        <a href="#" class="text-neutral-400 hover:text-neon">Instagram</a>
        <a href="#" class="text-neutral-400 hover:text-neon">Facebook</a>
        <a href="#" class="text-neutral-400 hover:text-neon">TikTok</a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ name: 'Footer' })
</script>
