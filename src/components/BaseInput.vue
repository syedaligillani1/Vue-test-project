<template>
  <div class="mb-4">
    <label :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
      :class="{
        'border-gray-300 focus:ring-blue-500': !error,
        'border-red-500 focus:ring-red-500': error
      }"
    />
    <p v-if="error" class="text-sm text-red-500 mt-1">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id?: string
  label: string
  placeholder?: string
  type?: string
  modelValue: string
  error?: string
}>()

defineEmits(['update:modelValue'])
</script>
