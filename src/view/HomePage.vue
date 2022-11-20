<template>
  <Header></Header>
  <Bodyer></Bodyer>
</template>
<script lang="ts" setup>
import Header from "@/components/Header/header.vue";
import Bodyer from "@/components/Main/main.vue";
import { screenHeight, screenWidth } from "@/until/WindowSize";
import { onMounted } from "vue";
onMounted(() => {
  screenWidth.value = document.body.clientWidth;
  screenHeight.value = document.body.clientHeight;
});
</script>
