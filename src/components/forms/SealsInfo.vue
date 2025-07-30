<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">Seals & Sample Entry</h2>
    <BaseInput v-model="form.seals.type" label="Seal Type" :error="errors.seals.type" />
    <BaseInput v-model="form.seals.sample" label="Sample ID" :error="errors.seals.sample" />
    <BaseInput v-model="form.seals.notes" label="Notes" :error="errors.seals.notes" />

    <div class="mt-6 flex justify-between">
      <BaseButton @click="prevStep" label="Back">Back</BaseButton>
      <BaseButton @click="submitForm" label="Submit">Submit</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '../BaseButton.vue';
import BaseInput from '../BaseInput.vue';

defineProps(['form', 'errors', 'prevStep', 'submitForm'])

</script>
