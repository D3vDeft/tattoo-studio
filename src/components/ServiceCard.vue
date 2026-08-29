<template>
  <div class="p-4 bg-surface rounded border border-neutral-800 hover:border-neon transition">
    <div class="flex items-start gap-4">
      <div class="w-12 h-12 flex items-center justify-center rounded bg-neutral-900 text-neon">{{ icon }}</div>
      <div>
        <h3 class="font-semibold">{{ title }}</h3>
        <p class="text-sm text-neutral-400 mt-1">{{ excerpt }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    title: { type: String as PropType<string>, required: true },
    excerpt: { type: String as PropType<string>, required: true },
    icon: { type: String as PropType<string>, default: '✠' }
  }
})
</script>
