<template>
  <div class="container mx-auto py-10">
    <h2 class="text-2xl mb-4">Contacto / Pedir cita</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <p>Teléfono: <strong>+34 600 000 000</strong></p>
        <p>Dirección: Calle Falsa 123</p>
        <p>Horario: Lun-Vie 10:00-19:00</p>
      </div>
      <div>
        <form @submit.prevent="send">
          <div class="mb-3">
            <label class="block mb-1">Nombre</label>
            <input v-model="form.name" class="w-full p-2 border rounded" />
          </div>
          <div class="mb-3">
            <label class="block mb-1">Mensaje</label>
            <textarea v-model="form.message" class="w-full p-2 border rounded"></textarea>
          </div>
          <PButton label="Enviar" type="submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const form = reactive({ name: '', message: '' })
    function send() {
      alert('Formulario enviado (demo). Sustituye por integración real.')
    }
    return { form, send }
  }
})
</script>
