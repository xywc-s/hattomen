<template>
  <product-detail-temp :details="details">
    <template #header>
      <el-image class="w-full" :src="props.details.headImg"></el-image>
    </template>
    <template #default="{ feature, index }">
      <template v-if="!index">
        <el-col :span="7">
          <el-image class="w-full" :src="feature.img"></el-image>
        </el-col>
        <el-col :span="14" class="flex flex-col text-left justify-center">
          <div class="font-extrabold mb-4">{{ feature.title }}</div>
          <div v-html="feature.desc"></div>
        </el-col>
      </template>
      <el-col v-else :span="7" class="my-6 text-left">
        <div class="font-extrabold my-2">{{ feature.title }}</div>
        <div v-html="feature.desc"></div>
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
