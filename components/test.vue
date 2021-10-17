<template>
  <p>TITLE: {{title}}</p>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
