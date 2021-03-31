<script setup lang="ts">
import { banners, categorys, news_product } from '~/data'

</script>

<template>
  <div>
    <el-carousel class="aspect-447917/1000000" arrow="never" :interval="5500">
      <el-carousel-item v-for="banner in banners">
        <el-image style="width:100%" fit="cover" :src="banner" />
      </el-carousel-item>
    </el-carousel>

    <div class="bg-white">
      <div class="h-container flex -sm:flex-col pt-5">
        <div v-for="category in categorys" class="relative p-3 cursor-pointer">
          <el-image :src="category.image" class="w-full"></el-image>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <el-row type="flex" class="h-container pt-5 justify-around">
        <el-col :span="20">
          <el-divider>
            <span class="font-semibold uppercase sm:text-xl">What's new</span>
          </el-divider>
        </el-col>
      </el-row>
      <div class="h-container flex -sm:flex-col">
        <div v-for="news in news_product" class="p-3 cursor-pointer">
          <el-image :src="news"></el-image>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
