<template>
  <div class="container mx-auto py-10">
    <h1 class="text-3xl font-bold mb-4">Contacto y citas</h1>
    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <p class="mb-2">Teléfono: <strong>+34 600 000 000</strong></p>
        <p class="mb-2">Dirección: Calle Falsa 123, Ciudad</p>
        <p class="mb-2">Horario: Lun-Vie 10:00 - 19:00</p>

        <div class="mt-6">
          <h3 class="font-semibold">Sigue nuestro trabajo</h3>
          <p class="text-sm text-gray-600">Instagram • Facebook • TikTok (añade enlaces reales en el footer)</p>
        </div>
      </div>

      <div>
        <form @submit.prevent="send" class="space-y-4">
          <div>
            <label class="block text-sm mb-1">Nombre</label>
            <input v-model="form.name" class="w-full p-3 border rounded" required />
          </div>
          <div>
            <label class="block text-sm mb-1">Email</label>
            <input v-model="form.email" type="email" class="w-full p-3 border rounded" required />
          </div>
          <div>
            <label class="block text-sm mb-1">Mensaje / Idea del tatuaje</label>
            <textarea v-model="form.message" class="w-full p-3 border rounded" rows="5" required></textarea>
          </div>
          <PButton label="Enviar" type="submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useSeo } from '@/composables/useSeo'

export default defineComponent({
  setup() {
    useSeo({
      title: 'Contacto — El Manicomio Tattoo',
      description: 'Contacta con El Manicomio Tattoo para pedir cita, solicitar presupuesto o resolver dudas sobre tus ideas de tatuaje.'
    })

    const form = reactive({ name: '', email: '', message: '' })
    function send() {
      // Implementar integración real (API/email) en producción
      alert('Gracias. Tu mensaje ha sido enviado (demo). Responderemos pronto.')
      form.name = ''
      form.email = ''
      form.message = ''
    }

    return { form, send }
  }
})
</script>
