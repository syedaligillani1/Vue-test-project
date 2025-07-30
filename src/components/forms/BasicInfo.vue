<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">Basic Information</h2>
    <BaseInput v-model="form.basic.date" label="Date" type="date" :error="errors.basic.date" />
    <BaseInput v-model="form.basic.name" label="Name" placeholder="Enter name" :error="errors.basic.name" />
    <BaseInput v-model="form.basic.dob" label="Date of Birth" type="date" :error="errors.basic.dob" />

    <div class="mt-6 text-right">
      <BaseButton @click="nextStep" label="Next">Next</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '../BaseButton.vue';
import BaseInput from '../BaseInput.vue';

defineProps(['form', 'errors', 'nextStep'])

</script>
