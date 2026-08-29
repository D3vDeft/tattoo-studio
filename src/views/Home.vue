<template>
  <main>
    <Header />
    <Hero />

    <section id="about" class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-3xl h-gothic">Nuestro enfoque</h2>
          <p class="mt-4 text-neutral-300">En El Manicomio Tattoo combinamos la tradición del tatuaje con una estética oscura y refinada. Cada proyecto pasa por un proceso de diseño y asesoramiento para asegurar resultados duraderos y significativos.</p>
          <ul class="mt-4 text-neutral-400 list-disc pl-5">
            <li>Protocolos estrictos de higiene</li>
            <li>Diseños personalizados</li>
            <li>Asesoramiento antes y después del tatuaje</li>
          </ul>
        </div>
        <div>
          <img src="https://picsum.photos/seed/about/800/600" alt="about" class="w-full h-64 object-cover rounded" loading="lazy" />
        </div>
      </div>
    </section>

    <section id="services" class="container mx-auto px-4 py-12">
      <h2 class="text-3xl h-gothic mb-6">Servicios</h2>
      <div class="grid md:grid-cols-3 gap-4">
        <ServiceCard title="Diseño personalizado" excerpt="Creación de diseños únicos a medida según tu idea y estilo." icon="✠" />
        <ServiceCard title="Cover-up" excerpt="Soluciones creativas para cubrir tatuajes antiguos o no deseados." icon="☩" />
        <ServiceCard title="Micropigmentación" excerpt="Retoques y técnicas de micropigmentación estética para detalles impecables." icon="✥" />
      </div>
    </section>

    <section id="gallery" class="container mx-auto px-4 py-12">
      <h2 class="text-3xl h-gothic mb-6">Galería</h2>
      <GalleryMasonry />
    </section>

    <TestimonialSlider />

    <section id="contact" class="container mx-auto px-4 py-12">
      <h2 class="text-3xl h-gothic mb-6">Contacto</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <p class="text-neutral-400">Reserva tu cita o envíanos tu idea. Responderemos con disponibilidad y presupuesto.</p>
          <div class="mt-4 text-neutral-300">
            <p><strong>Tel:</strong> +34 600 000 000</p>
            <p><strong>Dirección:</strong> Calle Falsa 123, Ciudad</p>
          </div>
        </div>
        <div>
          <form @submit.prevent="submit" class="space-y-4">
            <input v-model="form.name" placeholder="Nombre" class="w-full p-3 rounded bg-neutral-900 border border-neutral-800" required />
            <input v-model="form.email" type="email" placeholder="Email" class="w-full p-3 rounded bg-neutral-900 border border-neutral-800" required />
            <textarea v-model="form.message" placeholder="Describe tu idea" rows="5" class="w-full p-3 rounded bg-neutral-900 border border-neutral-800" required></textarea>
            <button class="px-6 py-3 bg-neon text-black rounded neon-glow">Enviar</button>
          </form>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import GalleryMasonry from '@/components/GalleryMasonry.vue'
import TestimonialSlider from '@/components/TestimonialSlider.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  components: { Header, Hero, ServiceCard, GalleryMasonry, TestimonialSlider, Footer },
  setup(){
    const form = reactive({ name: '', email: '', message: '' })
    function submit(){
      alert('Gracias. Mensaje enviado (demo).')
      form.name = ''
      form.email = ''
      form.message = ''
    }
    return { form, submit }
  }
})
</script>
