<template>
  <Header></Header>
  <Main></Main>
</template>
<script lang="ts" setup>
import Header from "@/components/News_CP/Header/news_header.vue";
import Main from "@/components/News_CP/Main/main.vue";
import { screenHeight, screenWidth } from "@/until/WindowSize";
import { onMounted } from "vue";
onMounted(() => {
  screenWidth.value = document.body.clientWidth;
  screenHeight.value = document.body.clientHeight;
});
</script>
