<template>
  <product-detail-temp :details="details">
    <template #header>
      <el-image v-if="props.details.headImg" class="w-full" :src="props.details.headImg"></el-image>
    </template>
    <template #default="{ feature, index }">
      <template v-if="!index">
        <el-col :span="7">
          <el-image class="w-full" :src="feature.img"></el-image>
        </el-col>
        <el-col :span="10" class="flex flex-col text-left justify-center">
          <div class="font-extrabold mb-4">{{ feature.title }}</div>
          <div v-html="feature.desc"></div>
        </el-col>
        <el-col :span="6" class="text-left flex flex-col border-l-1 pl-4 pt-6">
          <div class="uppercase mb-2">Product Specifications:</div>
          <ul class="bg-gray-100 p-4">
            <li v-for="speci in feature.specifications">
              <span class="mr-2">·</span>
              {{ speci }}
            </li>
          </ul>
        </el-col>
      </template>
      <el-col v-else :span="7" class="my-6 text-left">
        <el-image class="w-full" :src="feature.img"></el-image>
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
