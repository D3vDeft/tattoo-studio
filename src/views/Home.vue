<template>
  <section>
    <!-- Hero -->
    <div class="relative bg-[url('/src/assets/hero.jpg')] bg-cover bg-center h-[60vh] flex items-center">
      <div class="container mx-auto text-white">
        <div class="max-w-xl bg-black/40 p-6 rounded">
          <h2 class="text-4xl font-extrabold">Estilo único para tu piel</h2>
          <p class="mt-3">Tatuajes con personalidad y técnica profesional. Reserva tu cita y transforma tu idea en arte.</p>
          <router-link to="/contact"><PButton label="Pedir cita" class="mt-4" /></router-link>
        </div>
      </div>
    </div>

    <!-- About -->
    <div class="container mx-auto py-10">
      <PCard>
        <template #title><h3 class="text-2xl">Sobre el estudio</h3></template>
        <p>El Manicomio Tattoo es un estudio con años de experiencia especializado en trabajos personalizados y cobertura.</p>
      </PCard>
    </div>

    <!-- Servicios (resumen) -->
    <div class="container mx-auto py-10 grid md:grid-cols-3 gap-6">
      <PCard v-for="s in services" :key="s.title">
        <template #title><h4>{{ s.title }}</h4></template>
        <p>{{ s.excerpt }}</p>
      </PCard>
    </div>

    <!-- Galería destacada -->
    <div class="container mx-auto py-10">
      <h3 class="text-2xl mb-4">Galería</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="n in 8" :key="n" class="h-40 bg-gray-200 rounded overflow-hidden">
          <img :src="`/src/assets/portfolio-${n % 4 + 1}.jpg`" alt="tattoo" class="w-full h-full object-cover" />
        </div>
      </div>
      <div class="mt-4">
        <router-link to="/gallery"><PButton label="Ver más" /></router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const services = ref([
      { title: 'Tatuaje personalizado', excerpt: 'Diseños a medida, desde pequeños hasta piezas grandes.' },
      { title: 'Cover-up', excerpt: 'Transformamos tatuajes antiguos en nuevas piezas.' },
      { title: 'Microblading y retoques', excerpt: 'Trabajo fino de detalle y cobertura.' }
    ])
    return { services }
  }
})
</script>
