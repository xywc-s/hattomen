<template>
  <div>{{ props.name }}</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
