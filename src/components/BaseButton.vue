<template>
  <button
    type="button"
    :disabled="disabled"
    class="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-blue-900 disabled:bg-gray-400 transition"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  disabled?: boolean
}>()

defineEmits(['click'])
</script>
