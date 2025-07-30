<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">Judicial Case References</h2>
    <BaseInput v-model="form.judicial.caseTitle" label="Case Title" :error="errors.judicial.caseTitle" />
    <BaseInput v-model="form.judicial.caseNo" label="Case Number" :error="errors.judicial.caseNo" />
    <BaseInput v-model="form.judicial.caseDate" label="Case Date" type="date" :error="errors.judicial.caseDate" />

    <div class="mt-6 flex justify-between">
      <BaseButton @click="prevStep" label="Back">Back</BaseButton>
      <BaseButton @click="nextStep" label="Next">Next</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '../BaseButton.vue';
import BaseInput from '../BaseInput.vue';

defineProps(['form', 'errors', 'nextStep', 'prevStep'])

</script>
