<template>
  <div class="h-container py-10">
    <el-image v-if="props.details.headImg" class="w-full" :src="props.details.headImg"></el-image>
    <el-row class="mx-20" type="flex" justify="space-around">
      <template v-for="(feature,index) in props.details.features">
        <template v-if="index === 3">
          <el-col :span="7">
            <el-image class="w-full" :src="feature.img"></el-image>
          </el-col>
          <el-col :span="14" class="flex flex-col text-left justify-center">
            <div class="font-extrabold mb-4">{{ feature.title }}</div>
            <div>{{ feature.desc }}</div>
          </el-col>
        </template>
        <el-col v-else :span="7" class="my-6 text-left">
          <el-image class="w-full" :src="feature.img"></el-image>
          <div class="font-extrabold my-2">{{ feature.title }}</div>
          <div>{{ feature.desc }}</div>
        </el-col>
      </template>
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
