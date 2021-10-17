<template>
  <p class="bg-primary-default text-grayscale-off-white w-50/100 h-5">{{message}}</p>
  <McButton text="text" />
  <test :title="message"/>
</template>

<script setup>
import Test from "./components/test"
import { ref } from 'vue'
// import Button from './node_modules/majestic-ui/dist/components/button/button.vue'
const message = ref('mymessage')

</script>
