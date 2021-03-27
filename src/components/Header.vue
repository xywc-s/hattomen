<template>
  <section class="header">
    <div id="toolbar" class="bg-black text-gray-400">
      <div class="h-container flex flex-row-reverse items-center h-38px">
        <router-link to="/">
          <cif-us class="icon-btn" />
        </router-link>
        <router-link to="/">
          <ph-shopping-cart-simple-bold class="icon-btn" />
        </router-link>
        <router-link to="/">
          <ph-user-bold class="icon-btn" />
        </router-link>
        <router-link to="/">
          <ri-search-line class="icon-btn" />
        </router-link>
        <button class="btn btn-small h-full px-4 bg-gray-800 rounded-none mr-3">Brands</button>
        <button class="btn btn-small h-full px-4 bg-gray-800 rounded-none mr-0.6">Shop</button>
      </div>
    </div>
    <div
      v-nav-scroll
      id="navbar"
      class="relative bg-gray-50 transition duration-500 hover:bg-opacity-100 ease-in-out bg-opacity-0"
    >
      <div class="h-container -md:hidden">
        <ul class="flex">
          <li class="mr-8 pb-2 text-4xl text-orange-400" style="line-height: 4rem;">
            <router-link to="/">
              <span :class="mdAndLarger ? 'font-faster font-normal' : ''">HATTOMEN</span>
            </router-link>
          </li>
          <li class="btn group mx-2.5 mt-6 pb-2 cursor-pointer">
            <span>Home</span>
          </li>
          <li class="btn group mx-2.5 mt-6 pb-2 cursor-pointer">
            <span>Introduction</span>
          </li>
          <li class="btn group mx-2.5 mt-6 pb-2 cursor-pointer" v-for="menu in menus">
            <span @mouseover.self="menuHover(menu)">{{ menu.name }}</span>
            <div class="hidden absolute inset-x-0 t-0 py-7 bg-gray-50 group-hover:block">
              <div class="flex">
                <div class="min-w-1/3"></div>
                <div class="ml-3/10">
                  <div v-for="child in menu.children" @mouseover="btnHover(child)">
                    <router-link
                      :to="`/product/${child.path}`"
                      class="block text-black btn py-1 text-left"
                    >{{ child.name }}</router-link>
                  </div>
                </div>
                <el-image class="ml-30 min-w-50" :src="currentImg"></el-image>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { menus } from '~/data/nav';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { ref } from 'vue'

const breakpoints = useBreakpoints(breakpointsTailwind)

const mdAndLarger = breakpoints.greater('md')

const currentImg = ref('')

const menuHover = (menu) => {
  currentImg.value = menu.children[0].img
}

const btnHover = (child) => {
  currentImg.value = child.img
}

</script>

<style scoped>
@import url("https://fonts.font.im/css?family=Monoton|Fredericka+the+Great|Faster+One");

.font-faster {
  font-family: "Faster One", cursive;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 101;
}
.btn-small {
  font-size: 0.78rem;
}
</style>
