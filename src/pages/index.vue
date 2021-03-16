<script setup lang="ts">
import { onMounted } from 'vue'
import { banners, categorys, news_product } from '~/data'

onMounted(() => {
  const el = document.querySelector('.el-carousel__container');
  el.style.paddingBottom = '44.7917%';
})

</script>

<template>
  <div>
    <el-carousel height="0" arrow="never" :interval="5500">
      <el-carousel-item v-for="banner in banners">
        <el-image style="width:100%" fit="cover" :src="banner" />
      </el-carousel-item>
    </el-carousel>
    <div class="bg-white">
      <el-row type="flex" class="h-container pt-5">
        <el-col :span="8" v-for="category in categorys" class="relative p-3 cursor-pointer">
          <el-image :src="category.image"></el-image>
          <!-- <span class="absolute top-1/2 left-1/10">{{ category.title }}</span> -->
        </el-col>
      </el-row>
    </div>
    <div class="bg-white">
      <el-row type="flex" class="h-container pt-5 justify-around">
        <el-col :span="20">
          <el-divider>
            <span class="font-semibold uppercase">What's new</span>
          </el-divider>
        </el-col>
      </el-row>
      <el-row type="flex" class="h-container">
        <el-col :span="12" v-for="news in news_product" class="p-3 cursor-pointer">
          <el-image :src="news"></el-image>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
