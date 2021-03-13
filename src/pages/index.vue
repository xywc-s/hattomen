<script setup lang="ts">
import { reactive, onMounted } from 'vue'

const banners = reactive([
  "https://d2211byn0pk9fi.cloudfront.net/spree/activities/84739/image/large/home-banner-us.jpg?1602621043",
  "https://d2211byn0pk9fi.cloudfront.net/spree/activities/85510/image/large/HomeBanner-PC_%281%29.jpg?1610019319",
  "https://d2211byn0pk9fi.cloudfront.net/spree/activities/85334/image/large/%E5%AE%98%E7%BD%91-%E9%A6%96%E9%A1%B52650banner.jpg?1606101220",
  "https://d2211byn0pk9fi.cloudfront.net/spree/activities/85557/image/large/1617.jpg?1615188060"
])

const categorys = reactive([
  {
    title: 'Free Product Testing',
    image: 'https://d2211byn0pk9fi.cloudfront.net/spree/activities/62410/image/large/Free.jpg?1557402752'
  },
  {
    title: 'New Releases',
    image: 'https://d2211byn0pk9fi.cloudfront.net/spree/activities/66843/image/large/87.jpeg?1572944581'
  },
  {
    title: 'Hot Deals',
    image: 'https://d2211byn0pk9fi.cloudfront.net/spree/activities/67999/image/large/Anker3.0Web-Home_05.jpg?1523256752'
  }
])

const news_product = reactive([
  'https://d2211byn0pk9fi.cloudfront.net/spree/activities/79990/image/large/what%E2%80%9Cs-new.jpg?1599810376',
  'https://d2211byn0pk9fi.cloudfront.net/spree/activities/85513/image/large/Lark20210119-144948.jpeg?1611039068'
])

const services = [
  {
    icon: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190731_160127_190102111330-13.svg',
    title: 'Safe & Secure',
  },
  {
    icon: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190731_163245_190102111333-14.svg',
    title: 'Pay with Ease',
    logo: '//dz02g1kgtiysz.cloudfront.net/deals/files/191105_183619_cardusuk.png'
  },
  {
    icon: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190731_163252_190102111335-15.svg',
    title: 'Trusted Delivery',
    logo: '//dz02g1kgtiysz.cloudfront.net/deals/files/191105_190658_wi3.png'
  }
]

const about_infos = reactive([
  {
    title: 'About',
    subs: ['Our Company', 'Press Releases', 'Contact Us', 'Responsibility', 'Where to Buy', 'Technology', 'Careers', 'Media Coverage', 'Corporate Purchase', 'Student Beans',
    ]
  },
  {
    title: 'Support',
    subs: ['Documents & Drivers', 'Update Firmware', 'Process a Warranty', 'Warranty Info', 'Connected Equipment Warranty', 'Privacy Policy', 'Terms of Use', 'Product Verification', 'MAP Policy', 'Shipping Policy', 'Product Registration', 'WEEE Info']
  },
  {
    title: 'Contact Us',
    subs: ['US +1 (800) 988 7973 Mon-Fri 6:15AM-5PM (PT)', 'US (Bulk Sale Only) +1 (425) 256 4443 Mon-Fri 6:15AM-5PM (PT)', 'UK +44 (0) 1604 936 200 Mon-Sun 6AM-2PM (GMT)', 'DE +49 (0) 69 9579 7960 Mon-Fri 6AM-11AM', 'JP +81 03 4455 7823 Mon-Fri 9AM-5PM', 'CN +86 400 0550 036 Mon-Fri 9AM-5:30PM', 'UAE +971 8000320817 Sun-Thu 9AM-5:30PM', 'KSA +966 8008500030 Sun-Thu 8AM-4:30PM', 'KW +965 22069086 Sun-Thu 8AM-4:30PM', 'Middle East & Africa +971 42463266 Sun-Thu 9AM-5:30PM', 'Egypt +20 8000000826 Sun-Thu 7AM-3:30PM']
  }
])

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
          <span class="absolute top-1/2 left-1/10">{{ category.title }}</span>
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
