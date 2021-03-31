<script setup lang="ts">
import { services, about_infos } from '~/data'

const year = new Date().getFullYear()
</script>

<template>
  <div style=" background-image: linear-gradient(180deg, rgba(20,20,20), rgba(0,0,0,1))">
    <waves></waves>
    <div class="-sm:px-5 about h-container py-8 flex">
      <div class="h-container flex md:(justify-around w-full) -md:flex-col">
        <div v-for="info in about_infos" class="text-left -md:mb-5">
          <div class="text-white w-25 mb-4 pb-2 border-b-1 -md:font-bold">{{ info.title }}</div>
          <div class="flex flex-col">
            <span v-for="sub in info.subs" class="text-gray-300 font-normal text-sm btn">{{ sub }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="h-container md:py-16">
      <el-card class="-md:hidden">
        <el-row type="flex" class="justify-around py-8">
          <el-col v-for="serve in services" :span="8">
            <el-row type="flex" class="flex-col">
              <el-image :src="serve.icon" class="h-35px"></el-image>
              <span class="my-3">{{ serve.title }}</span>
              <el-image v-if="serve.logo" fit="contain" :src="serve.logo" class="h-35px"></el-image>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="md:hidden m-20px" v-for="serve in services">
        <el-row type="flex" class="flex-col">
          <el-image :src="serve.icon" class="h-35px"></el-image>
          <span class="my-3">{{ serve.title }}</span>
          <el-image v-if="serve.logo" fit="contain" :src="serve.logo" class="h-35px"></el-image>
        </el-row>
      </el-card>
    </div>
    <div class="text-center py-5">
      <div
        class="text-gray-300 text-opacity-60 text-sm"
      >Copyright © {{ year }} ET-FUN Technology Ltd</div>
      <div class="text-gray-300 text-opacity-60 text-sm">Designed By ET-FUN Geeks</div>
    </div>
  </div>
</template>
