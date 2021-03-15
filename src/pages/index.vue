<script setup lang="ts">
import { onMounted } from 'vue'
import { banners, categorys, news_product, services, about_infos } from '~/data'

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
    <div>
      <div class="about h-container py-8">
        <el-row type="flex" class="h-container">
          <el-col :span="18">
            <el-row type="flex">
              <div v-for="info in about_infos" class="text-left mr-8">
                <div class="text-white w-25 mb-4 pb-2 border-b-1">{{ info.title }}</div>
                <div class="flex flex-col">
                  <span
                    v-for="sub in info.subs"
                    class="text-gray-300 font-normal text-sm btn"
                  >{{ sub }}</span>
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6"></el-col>
        </el-row>
      </div>
      <div class="h-container pt-8">
        <el-card>
          <el-row type="flex" class="justify-around py-8">
            <el-col v-for="serve in services" :span="8">
              <el-row type="flex" class="flex-col">
                <el-image :src="serve.icon" class="h-35px"></el-image>
                <span>{{ serve.title }}</span>
                <el-image v-if="serve.logo" fit="contain" :src="serve.logo" class="h-35px"></el-image>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
