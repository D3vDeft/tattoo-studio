<template>
  <div class="container mx-auto py-10">
    <h1 class="text-3xl font-bold mb-4">Sobre El Manicomio Tattoo</h1>
    <PCard>
      <template #title>
        <h2 class="text-2xl">Arte, técnica y compromiso</h2>
      </template>
      <p>
        En El Manicomio Tattoo fusionamos la pasión por el dibujo con procedimientos profesionales de higiene y atención al cliente. Nuestro estudio está pensado para que te sientas seguro y acompañes el proceso creativo desde la idea hasta el resultado final.
      </p>
    </PCard>

    <div class="mt-8 grid md:grid-cols-2 gap-6">
      <PCard>
        <template #title><h3>Equipo</h3></template>
        <p>Artistas con estilos complementarios: realismo, tradicional, blackwork, dotwork y más. Trabajamos con sesiones planificadas para lograr resultados duraderos.</p>
      </PCard>

      <PCard>
        <template #title><h3>Higiene y seguridad</h3></template>
        <p>Utilizamos material desechable, autoclave y protocolos sanitarios estrictos. Nuestra prioridad es tu salud y la calidad del trabajo.</p>
      </PCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSeo } from '@/composables/useSeo'

export default defineComponent({
  setup() {
    useSeo({
      title: 'Sobre nosotros — El Manicomio Tattoo',
      description: 'Conoce al equipo, nuestra filosofía y los protocolos de higiene en El Manicomio Tattoo. Arte y seguridad para tu tatuaje.'
    })

    return {}
  }
})
</script>
