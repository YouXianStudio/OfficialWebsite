<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <n-carousel autoplay interval="3000">
    <img class="carousel-img" src="/img/banner1.png" />
    <img class="carousel-img" src="/img/banner2.png" />
    <img class="carousel-img" src="/img/banner3.png" />
    <img class="carousel-img" src="/img/banner4.png" />
    <img class="carousel-img" src="/img/banner5.png" />
    <template #dots="{ total, currentIndex, to }">
      <ul class="custom-dots">
        <li
          v-for="index of total"
          :key="index"
          :class="{ ['is-active']: currentIndex === index - 1 }"
          @click="to(index - 1)"
        >
          {{ index }}
        </li>
      </ul>
    </template>
  </n-carousel>
</template>
<style scoped>
@import "@/assets/css/carousel.css";
</style>
