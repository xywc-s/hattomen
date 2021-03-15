<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div class="bg-black h-40px flex items-center">
    <div class="h-container">
      <span
        class="text-gray-300 text-opacity-60 text-sm"
      >Copyright © {{ year }} ET-FUN Technology Ltd</span>
    </div>
  </div>
</template>
