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
      class="bg-gray-50 transition duration-500 hover:bg-opacity-80 ease-in-out bg-opacity-0"
    >
      <div class="h-container flex">
        <img />
        <ul class="flex">
          <li class="btn mx-2.5 mt-6 pb-2 cursor-pointer" v-for="menu in menus">{{ menu }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
const menus = reactive(['Hubs & Docks', 'Power Banks', 'Power Strips', 'Chargers', 'Other Products'])
</script>

<style scoped>
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
