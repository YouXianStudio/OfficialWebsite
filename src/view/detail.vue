<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="detail">
    <div class="title">{{ ShowNew.title }}</div>
    <div class="time">{{ ShowNew.time }}</div>
    <div class="content">
      {{ ShowNew.content }}
    </div>
    <div class="img">
      <img :src="ShowNew.imgUrl" alt="" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { ShowNew, getNew } from "@/until/news/detail";
import { screenHeight, screenWidth } from "@/until/WindowSize";
onMounted(() => {
  const route = useRoute();
  const router_data = useRouter().currentRoute.value.query;
  route.meta.title = router_data.title;
  if (typeof router_data.title === "string") {
    document.title = router_data.title;
  }
  getNew(router_data.id);
  screenWidth.value = document.body.clientWidth;
  screenHeight.value = document.body.clientHeight;
});
</script>

<style scoped>
@import "@/assets/css/news_css/detail.css";
</style>
