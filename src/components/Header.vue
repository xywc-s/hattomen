<template>
  <section class="header -md:hidden">
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
      <div class="h-container">
        <ul class="flex">
          <li class="mr-8 pb-2 text-4xl text-orange-400" style="line-height: 4rem;">
            <router-link to="/">
              <span class="font-faster font-normal">HATTOMEN</span>
            </router-link>
          </li>
          <li class="btn mx-2.5 mt-6 pb-2 cursor-pointer">
            <router-link to="/">Home</router-link>
          </li>
          <li class="btn mx-2.5 mt-6 pb-2 cursor-pointer">
            <span>Introduction</span>
          </li>
          <li class="btn group mx-2.5 mt-6 pb-2 cursor-pointer" v-for="menu in menus">
            <span @mouseover.self="menuHover(menu)">{{ menu.name }}</span>
            <div class="hidden absolute inset-x-0 t-0 py-7 bg-gray-50 group-hover:(block)">
              <div class="flex transition-all duration-600 ease-in">
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
  <section class="md:hidden header h-48px bg-black border-b-0.5px border-opacity-0">
    <transition name="fade" :duration="250" mode="in-out">
      <div v-if="smallerMD" class="px-3 flex h-full justify-between items-center">
        <button
          type="button"
          class="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          aria-label="toggle menu"
          @click.native="() => { menushow = !menushow; }"
        >
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
        <div class="font-faster font-normal text-orange-400 text-3xl ring-offset-white shadow">
          <span>HATTOMEN</span>
        </div>
        <div></div>
      </div>
    </transition>

    <transition name="fade" :duration="250" mode="in-out">
      <div v-show="menushow" class="bg-black p-5">
        <ul class="flex flex-col text-white all-child:mb-2">
          <li class="btn mx-2.5 cursor-pointer">
            <router-link to="/">Home</router-link>
          </li>
          <li class="btn mx-2.5 cursor-pointer" v-for="menu in menus">
            <span>{{ menu.name }}</span>
            <div v-for="child in menu.children">
              <router-link :to="`/product/${child.path}`" class="block btn pl-3">{{ child.name }}</router-link>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </section>
</template>
<script setup lang="ts">
import { menus } from '~/data/nav';
import { ref } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const breakPoints = useBreakpoints(breakpointsTailwind);
const smallerMD = breakPoints.smaller('md')

const currentImg = ref('')
const menushow = ref(false)

const menuHover = (menu) => {
  currentImg.value = menu.children[0].img
}

const btnHover = (child) => {
  currentImg.value = child.img
}
onBeforeRouteLeave(() => {
  menushow.value = false
})

onBeforeRouteUpdate(() => {
  menushow.value = false
})

</script>

<style scoped>
@import url("https://fonts.font.im/css?family=Monoton|Fredericka+the+Great|Faster+One");

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
