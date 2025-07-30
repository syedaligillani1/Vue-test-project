<template>
  <div
    class="h-screen bg-gray-800 text-white flex flex-col transition-all duration-300 overflow-hidden"
    :class="isExpanded ? 'w-64' : 'w-20'"  >
    <div class="flex justify-center py-4 border-b border-gray-700">
      <button @click="toggleSidebar" class="text-white text-2xl focus:outline-none">
        &#9776;
      </button>
    </div>

    <div class="text-center py-4 border-b border-gray-700 text-lg font-bold">
      {{ isExpanded ? 'Vue JS Assignment' : 'VJA' }}
    </div>

    <nav class="mt-6 flex flex-col gap-2 px-2">
      <div
        class="flex items-center px-4 py-2 rounded-md cursor-pointer transition-all"
        :class="route.path.includes('dashboard') 
          ? 'bg-white text-gray-800 font-semibold' 
          : 'hover:bg-gray-700 hover:text-white'"
        @click="goTo('/dashboard-expanded')"
      >
        <span class="text-lg mr-3">🏠</span>
        <span v-if="isExpanded" class="text-sm">Dashboard</span>
      </div>

      <div
        class="flex items-center px-4 py-2 rounded-md cursor-pointer transition-all"
        :class="route.path.includes('add-record') 
          ? 'bg-white text-gray-800 font-semibold' 
          : 'hover:bg-gray-700 hover:text-white'"
        @click="goTo('/add-record')"
      >
        <span class="text-lg mr-3">➕</span>
        <span v-if="isExpanded" class="text-sm">Add Record</span>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isExpanded = ref(route.path.includes('expanded'))

watch(
  () => route.path,
  (newPath) => {
    isExpanded.value = newPath.includes('expanded')
  },
)

function toggleSidebar() {
  const newPath = isExpanded.value
    ? route.path.replace('expanded', 'collapsed')
    : route.path.replace('collapsed', 'expanded')

  isExpanded.value = !isExpanded.value
  router.push(newPath)
}

function goTo(path: string) {
  router.push(path)
}
</script>

