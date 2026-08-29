<template>
  <section id="hero" class="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.6),rgba(0,0,0,0.85))]"></div>
    <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1b2b2b')] bg-cover bg-center opacity-20"></div>

    <div class="container mx-auto relative z-10 px-4 py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <h1 class="h-gothic text-5xl md:text-7xl leading-tight">Tatuajes con carácter eterno</h1>
          <p class="mt-6 text-muted max-w-xl">En El Manicomio Tattoo transformamos ideas en piezas únicas. Técnica, higiene y una estética gótica contemporánea al servicio de tu piel.</p>

          <div class="mt-8 flex gap-4">
            <a href="#contact" class="px-6 py-3 bg-neon text-black rounded neon-glow">Reservar cita</a>
            <a href="#gallery" class="px-5 py-3 border border-neutral-700 rounded">Ver galería</a>
          </div>

          <div class="mt-6 text-sm text-neutral-400">Horario: Lun-Vie 10:00 - 19:00 · Tel: +34 600 000 000</div>
        </div>

        <div class="flex justify-center">
          <div class="w-72 h-72 rounded-full bg-gradient-to-br from-transparent via-black/40 to-black/60 flex items-center justify-center neon-glow">
            <img src="https://raw.githubusercontent.com/D3vDeft/tattoo-studio/main/src/assets/logo.png" alt="logo" class="w-40 h-40 object-contain"/>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-500 text-sm">Desliza para descubrir · scroll</div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hero'
})
</script>
