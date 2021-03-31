<template>
  <div class="h-container py-10">
    <slot name="header"></slot>
    <el-row class="md:mx-20 -sm:px-2" type="flex" justify="space-around">
      <template v-for="(feature,index) in props.details.features">
        <template v-if="smaller">
          <div class="flex flex-baseline text-left my-6">
            <div class="w-3/10">
              <el-image class="w-full" :src="feature.img"></el-image>
            </div>
            <div class="w-3/5 mx-auto">
              <div class="font-extrabold mb-2">{{ feature.title }}</div>
              <div v-html="feature.desc"></div>
            </div>
          </div>
        </template>
        <template v-else>
          <slot :feature="feature" :index="index"></slot>
        </template>
      </template>
    </el-row>
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakPoints = useBreakpoints(breakpointsTailwind);
const smaller = breakPoints.smaller('sm');

const props = defineProps({
  details: {
    type: Object,
    required: true
  }
})
</script>
