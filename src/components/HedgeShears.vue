<template>
  <div class="h-container py-10">
    <el-image v-if="props.details.headImg" class="w-full" :src="props.details.headImg"></el-image>
    <el-row class="mx-20" type="flex" justify="space-around">
      <el-col v-for="feature in props.details.features" :span="7" class="my-6 text-left">
        <el-image class="w-full" :src="feature.img"></el-image>
        <div class="font-extrabold my-2">{{ feature.title }}</div>
        <div>{{ feature.desc }}</div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  details: {
    type: Object,
    required: true
  }
})
</script>
