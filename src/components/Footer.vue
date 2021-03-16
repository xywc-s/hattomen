<script setup lang="ts">
import { services, about_infos } from '~/data'

const year = new Date().getFullYear()
</script>

<template>
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
    <div class="h-container py-16">
      <el-card>
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
    </div>
  </div>
  <div class="bg-black h-40px flex items-center">
    <div class="h-container">
      <span
        class="text-gray-300 text-opacity-60 text-sm"
      >Copyright © {{ year }} ET-FUN Technology Ltd</span>
    </div>
  </div>
</template>
