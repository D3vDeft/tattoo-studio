<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
    <div v-for="(img, i) in images" :key="i" class="h-40 md:h-48 overflow-hidden rounded">
      <img :src="img" :alt="`Tatuaje ${i+1}`" class="w-full h-full object-cover transform hover:scale-105 transition" loading="lazy" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  props: {
    imgs: { type: Array as any, default: () => [] }
  },
  setup(props) {
    const images = ref<string[]>([])
    onMounted(() => {
      if (props.imgs && props.imgs.length) {
        images.value = props.imgs
      } else {
        // placeholders
        for (let i = 1; i <= 8; i++) images.value.push(`https://picsum.photos/seed/manicomio-${i}/800/600`)
      }
    })
    return { images }
  }
})
</script>
