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
        <!-- <img /> -->
        <!-- <span>Hattomen</span> -->
        <ul class="flex">
          <li
            class="mr-8 pb-2 text-4xl text-light-blue-500 text-orange-400"
            style="line-height: 4rem;"
          >
            <router-link to="/">
              <span class="logo-font font-normal">HATTOMEN</span>
            </router-link>
          </li>
          <li class="btn mx-2.5 mt-6 pb-2 cursor-pointer" v-for="menu in menus">
            <router-link :to="`/product/${menu.path}`">{{ menu.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { menus } from '~/data/nav';

</script>

<style scoped>
@import url("https://fonts.font.im/css?family=Monoton|Fredericka+the+Great|Faster+One");
.logo-font {
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
