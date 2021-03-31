<template>
  <product-detail-temp :details="details">
    <template #header>
      <el-image v-if="props.details.headImg" class="w-full" :src="props.details.headImg"></el-image>
    </template>
    <template #default="{ feature }">
      <el-col :span="7" class="my-6 text-left">
        <el-image class="w-full" :src="feature.img"></el-image>
        <div class="font-extrabold my-2">{{ feature.title }}</div>
        <div>{{ feature.desc }}</div>
      </el-col>
    </template>
  </product-detail-temp>
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
