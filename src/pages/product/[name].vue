<template>
  <section class="bg-gray-50 pb-10 -sm:px-3">
    <div class="h-container pt-5 md:pt-25 pb-5">
      <div class="text-left" v-html="product.category"></div>
    </div>
    <el-row class="h-container">
      <el-col :span="smaller ? 24 : 11">
        <div class="flex">
          <div class="flex flex-col max-w-58px mr-2">
            <el-image
              v-preview="img"
              v-for="img in product.images"
              :src="img"
              class="cursor-pointer mb-2"
            ></el-image>
          </div>
          <div>
            <el-image class="w-full active-img" :src="product.images[0]"></el-image>
          </div>
        </div>
      </el-col>
      <el-col :span="smaller ? 24 : 12" :offset="smaller ? 0 : 1" class="text-left">
        <el-row type="flex" class="flex-col all-child:mt-3">
          <!-- {{ product }} -->
          <div class="-sm:text-xl sm:text-4xl font-extrabold">{{ product.name }}</div>
          <div class="sm:hidden flex items-center">
            <span class="text-xl mr-3 align-middle">${{ product.price }}</span>
            <el-rate
              class="text-xl"
              :modelValue="5"
              disabled
              show-score
              :score-template="`{value} (${product.reviews.length} Reviews) `"
            ></el-rate>
          </div>
          <div class="sm:text-xl text-gray-500">{{ product.title }}</div>
          <el-rate
            class="-sm:hidden"
            :modelValue="5"
            disabled
            show-score
            :score-template="`{value} (${product.reviews.length} Reviews) `"
          ></el-rate>
          <span v-for="point in product.points" class="text-gray-700">
            <span class="text-lg">·</span>
            {{ point }}
          </span>
          <span class="text-xl -sm:hidden">${{ product.price }}</span>
          <div>
            <span class="mr-4">Quantity :</span>
            <el-input-number v-model="cart_number" :min="1"></el-input-number>
          </div>
          <div class="flex">
            <button
              class="-md:py-1 -md:px-5 -md:flex-grow -md:flex-shrink md:px-10 md:py-2 md:w-180px rounded-full text-orange-500 bg-orange-300 font-semibold border-1 border-orange-600 mr-5 hover:bg-opacity-80"
            >ADD TO CART</button>
            <button
              class="-md:py-1 -md:px-5 -md:flex-grow -md:flex-shrink md:px-10 md:py-2 md:w-180px rounded-full bg-orange-500 text-white font-semibold hover:bg-opacity-80"
            >BUY NOW</button>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </section>
  <section class="bg-white">
    <!-- <component :is="props.name" :details="product.details"></component> -->
    <template v-if="props.name === 'bypass-lopper'">
      <bypass-lopper :details="product.details"></bypass-lopper>
    </template>
    <template v-else-if="props.name === 'hedge-shears'">
      <hedge-shears :details="product.details"></hedge-shears>
    </template>
    <template v-else-if="props.name === 'electric-snow-blower'">
      <electric-snow-blower :details="product.details"></electric-snow-blower>
    </template>
    <template v-else-if="props.name === 'electric-lawn-mower'">
      <electric-lawn-mower :details="product.details"></electric-lawn-mower>
    </template>
    <template v-else-if="props.name === 'electric-garden-tiller'">
      <electric-garden-tiller :details="product.details"></electric-garden-tiller>
    </template>
    <template v-else-if="props.name === 'garden-cart'">
      <garden-cart :details="product.details"></garden-cart>
    </template>
    <template v-else-if="props.name === 'hand-saw'">
      <hand-saw :details="product.details"></hand-saw>
    </template>
    <template v-else-if="props.name === 'folding-hand-saw'">
      <folding-hand-saw :details="product.details"></folding-hand-saw>
    </template>
    <template v-else-if="props.name === 'extendable-hedge-shears'">
      <extendable-hedge-shears :details="product.details"></extendable-hedge-shears>
    </template>
    <template v-else-if="props.name === 'extendable-anvil-loppers'">
      <extendable-anvil-loppers :details="product.details"></extendable-anvil-loppers>
    </template>

    <div class="h-container py-10 -xl:px-4">
      <div>
        <div class="text-3xl">Reviews</div>
        <el-rate
          class="my-8"
          :modelValue="5"
          disabled
          show-score
          :score-template="`(${product.reviews.length} Reviews) `"
        ></el-rate>
      </div>
      <div>
        <div v-for="review in product.reviews" class="text-left mb-15">
          <div class>{{ review.title }}</div>
          <div class="flex items-center">
            <el-rate :modelValue="5" disabled></el-rate>
            <span>5.0</span>
          </div>
          <div class="text-sm text-gray-500" v-html="review.content"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, ref, reactive, onBeforeUpdate } from 'vue'
import { Products } from '~/data/product'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakPoints = useBreakpoints(breakpointsTailwind);
const smaller = breakPoints.smaller('sm');


const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
let cart_number = ref(1)
let current = Object.assign({}, Products[props.name])
let product = reactive(current)


onBeforeUpdate(() => {
  product.name = Products[props.name].name
  product.category = Products[props.name].category
  product.title = Products[props.name].title
  product.price = Products[props.name].price
  product.ratings = Products[props.name].ratings
  product.images = Products[props.name].images
  product.points = Products[props.name].points
  product.reviews = Products[props.name].reviews
  product.details = Products[props.name].details
})

</script>

<route lang="yaml">
meta:
  layout: default
</route>
