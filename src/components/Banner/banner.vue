<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Header></Header>
  <div
    class="banner"
    @mousewheel="bannerScroll($event)"
    :style="{ display: bannerDis }"
  >
    <Carousel></Carousel>
  </div>
</template>
<script lang="ts" setup>
import Carousel from "@/components/Carousel/carousel.vue";

import { bannerScroll, bannerDis } from "@/until/banner-header/index";
</script>
<style scoped>
@import url("@/assets/css/banner.css");
</style>
