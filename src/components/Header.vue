<template>
  <header class="fixed w-full top-0 z-50 backdrop-blur-md bg-black/40 border-b border-black/20">
    <div class="container mx-auto flex items-center justify-between p-4">
      <router-link to="#hero" class="flex items-center gap-3">
        <img src="https://raw.githubusercontent.com/D3vDeft/tattoo-studio/main/src/assets/logo.png" alt="El Manicomio Tattoo" class="w-10 h-10 object-contain filter drop-shadow-lg"/>
        <span class="h-gothic text-neon text-lg">El Manicomio</span>
      </router-link>

      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a href="#about" class="hover:text-neon transition">Inicio</a>
        <a href="#services" class="hover:text-neon transition">Servicios</a>
        <a href="#gallery" class="hover:text-neon transition">Galería</a>
        <a href="#contact" class="hover:text-neon transition">Contacto</a>
        <a href="/policies" class="text-neutral-400 hover:text-neon transition">Políticas</a>
        <router-link to="#contact" class="ml-4 px-4 py-2 bg-neon text-black rounded neon-glow">Pedir cita</router-link>
      </nav>

      <div class="md:hidden">
        <button @click="open = !open" aria-label="Abrir menú" class="p-2 border rounded border-neutral-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="open" class="md:hidden bg-surface border-t border-neutral-800">
      <div class="flex flex-col p-4 gap-3">
        <a href="#about" class="py-2 border-b border-neutral-800">Inicio</a>
        <a href="#services" class="py-2 border-b border-neutral-800">Servicios</a>
        <a href="#gallery" class="py-2 border-b border-neutral-800">Galería</a>
        <a href="#contact" class="py-2 border-b border-neutral-800">Contacto</a>
        <router-link to="#contact" class="mt-2 px-4 py-2 bg-neon text-black rounded text-center">Pedir cita</router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const open = ref(false)
    return { open }
  }
})
</script>
