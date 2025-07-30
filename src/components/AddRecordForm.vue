<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <BasicInfo
      v-if="step === 1"
      :form="form"
      :errors="errors"
      :nextStep="nextStep"
    />
    <JudicalInfo
      v-if="step === 2"
      :form="form"
      :errors="errors"
      :nextStep="nextStep"
      :prevStep="prevStep"
    />
    <SealsInfo
      v-if="step === 3"
      :form="form"
      :errors="errors"
      :prevStep="prevStep"
      :submitForm="submitForm"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BasicInfo from './forms/BasicInfo.vue'
import JudicalInfo from './forms/JudicalInfo.vue'
import SealsInfo from './forms/SealsInfo.vue'


const step = ref(1)

const form = ref({
  basic: { date: '', name: '', dob: '' },
  judicial: { caseTitle: '', caseNo: '', caseDate: '' },
  seals: { type: '', sample: '', notes: '' }
})

const errors = ref({
  basic: { date: '', name: '', dob: '' },
  judicial: { caseTitle: '', caseNo: '', caseDate: '' },
  seals: { type: '', sample: '', notes: '' }
})

function nextStep() {
  if (step.value === 1) {
    const { date, name, dob } = form.value.basic
    errors.value.basic.date = date ? '' : 'Date is required'
    errors.value.basic.name = name ? '' : 'Name is required'
    errors.value.basic.dob = dob ? '' : 'Date of birth is required'
    if (!date || !name || !dob) return
  }

  if (step.value === 2) {
    const { caseTitle, caseNo, caseDate } = form.value.judicial
    errors.value.judicial.caseTitle = caseTitle ? '' : 'Case title is required'
    errors.value.judicial.caseNo = caseNo ? '' : 'Case number is required'
    errors.value.judicial.caseDate = caseDate ? '' : 'Case date is required'
    if (!caseTitle || !caseNo || !caseDate) return
  }

  step.value++
}

function prevStep() {
  if (step.value > 1) step.value--
}

function submitForm() {
  const { type, sample, notes } = form.value.seals
  errors.value.seals.type = type ? '' : 'Seal type is required'
  errors.value.seals.sample = sample ? '' : 'Sample ID is required'
  errors.value.seals.notes = notes ? '' : 'Notes are required'
  if (!type || !sample || !notes) return

  console.log('Submitted form:', form.value)
  alert('Form submitted!')
}
</script>
