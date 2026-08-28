<template>
  <header class="bg-gradient-to-r from-brand/90 to-gray-800 text-white">
    <div class="container mx-auto flex items-center justify-between p-4">
      <div class="flex items-center gap-3">
        <IconHome class="w-8 h-8 text-accent" />
        <h1 class="text-xl font-bold">El Manicomio Tattoo</h1>
      </div>
      <nav class="hidden md:flex gap-4">
        <router-link to="/" class="hover:underline">Inicio</router-link>
        <router-link to="/about" class="hover:underline">Sobre mí</router-link>
        <router-link to="/services" class="hover:underline">Servicios</router-link>
        <router-link to="/gallery" class="hover:underline">Galería</router-link>
        <router-link to="/contact" class="hover:underline">Contacto</router-link>
      </nav>
      <div class="md:hidden">
        <PButton icon="pi pi-bars" class="p-button-rounded p-button-text" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>
