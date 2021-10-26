<template>
  <div class="flex justify-between items-center mb-9">
    <div class="flex items-center">
<!--      <form-label class="mr-2.5">Настройка локализации:</form-label>-->
      <p class="d-ss-text-medium text-grayscale-off-black">{{ title }}</p>
    </div>
    <div class="flex items-center space-x-2.5">
      <McToggle v-model:modelValue="value" type="label-left" on-label="Активна" off-label="Не активна" />
      <McButton
          type="colored"
          icon-name="trash"
          class="delete"
          state="hover-error"
          size="x-small"
          icon="only-icon"
          @click="deleteItem"
      ></McButton>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
// import FormLabel from '@/components/form/form-label'

const props = defineProps({
  isActiveDefault: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: 'Русский',
  },
})

const emit = defineEmits(['delete', 'toggleActive'])

const value = ref(props.isActiveDefault)

const deleteItem = () => {
  emit('delete')
}

const toggleActive = val => {
  emit('toggleActive', val)
}

watch(value, toggleActive)
</script>

<style scoped></style>
