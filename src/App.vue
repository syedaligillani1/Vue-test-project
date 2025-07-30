<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar />
    <div class="flex-1 p-6 overflow-y-auto">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
</script>
