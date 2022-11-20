<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header" :style="{ top: header.topD2, opacity: header.toum }">
    <div class="d1" :style="{ top: header.topD1 }">
      <div class="nav">
        <div class="left">
          <RouterLink :to="$route.path">首页</RouterLink> |
          <RouterLink to="/honor">成就</RouterLink> |
          <a @click="toPorject()">项目</a> |
          <n-popover trigger="hover" placement="bottom" :show-arrow="false">
            <template #trigger> <a>加入我们</a> </template>
            <a
              >鼠标放上 "加入申请"
              扫描二维码填写问卷哦！或者通过右上角联系方式联系我们</a
            >
          </n-popover>
          |
          <RouterLink to="/news">新闻</RouterLink>
        </div>
        <div class="right">
          <a>B站</a
          ><a href="https://github.com/YouXianStudio" target="_blank">Github</a>
          <n-popover trigger="hover" placement="bottom" :show-arrow="false">
            <template #trigger> <a>微信</a> </template>
            <a>微信:15014483047</a>
          </n-popover>
          <n-popover trigger="hover" placement="bottom" :show-arrow="false">
            <template #trigger> <a>邮箱</a> </template>
            <a>邮箱:666@666.COM</a>
          </n-popover>
          <n-popover trigger="hover" placement="bottom" :show-arrow="false">
            <template #trigger> <a>地址</a> </template>
            <a>地址:信息工程学院 知信楼F103</a>
          </n-popover>
        </div>
      </div>
    </div>
    <div class="d2" :style="{ top: header.topD2 }">
      <div class="nav">
        <div class="left">
          <img src="/img/logo_white.png" alt="" />
          <a>优贤工作室</a>
        </div>
        <div class="mid">
          <a @click="toIntroduct()">简介</a><a @click="toPorject()">项目</a
          ><a @click="toMember()">成员</a>
          <n-popover trigger="hover" placement="bottom" :show-arrow="false">
            <template #trigger> <a>加入我们</a> </template>
            <a
              >鼠标放上 "加入申请"
              扫描二维码填写问卷哦！或者通过右上角联系方式联系我们</a
            >
          </n-popover>
          <RouterLink to="/news">新闻</RouterLink>
        </div>
        <div class="right">
          <n-popover trigger="hover" placement="bottom" :show-arrow="false">
            <template #trigger> <a>加入申请</a> </template>
            <img src="/img/二维码.png" alt="" />
          </n-popover>
        </div>
      </div>
    </div>
  </div>
  <div class="header2" :style="{ top: header2.topD2, opacity: header2.toum }">
    <div class="d1" :style="{ top: header2.topD1 }">
      <div class="nav">
        <div class="left">
          <RouterLink to="/">首页</RouterLink> |
          <RouterLink to="/honor">成就</RouterLink> |
          <a @click="toPorject()">项目</a> |
          <n-popover trigger="hover" placement="bottom" :show-arrow="false">
            <template #trigger> <a>加入我们</a> </template>
            <a
              >鼠标放上 "加入申请"
              扫描二维码填写问卷哦！或者通过右上角联系方式联系我们</a
            >
          </n-popover>
          |
          <RouterLink to="/news">新闻</RouterLink>
        </div>
        <div class="right">
          <a>B站</a
          ><a href="https://github.com/YouXianStudio" target="_blank">Github</a>
          <n-popover trigger="hover" placement="bottom" :show-arrow="false">
            <template #trigger> <a>微信</a> </template>
            <a>微信:15014483047</a>
          </n-popover>
          <n-popover trigger="hover" placement="bottom" :show-arrow="false">
            <template #trigger> <a>邮箱</a> </template>
            <a>邮箱:666@666.COM</a>
          </n-popover>
          <n-popover trigger="hover" placement="bottom" :show-arrow="false">
            <template #trigger> <a>地址</a> </template>
            <a>地址:信息工程学院 知信楼F103</a>
          </n-popover>
        </div>
      </div>
    </div>
    <div class="d2" :style="{ top: header2.topD2 }">
      <div class="nav">
        <div class="left">
          <img src="/img/logo_red.png" alt="" />
          <a>优贤工作室</a>
        </div>
        <div class="mid">
          <a @click="toIntroduct()">简介</a><a @click="toPorject()">项目</a
          ><a @click="toMember()">成员</a>
          <n-popover trigger="hover" placement="bottom" :show-arrow="false">
            <template #trigger> <a>加入我们</a> </template>
            <a
              >鼠标放上 "加入申请"
              扫描二维码填写问卷哦！或者通过右上角联系方式联系我们</a
            >
          </n-popover>
          <RouterLink to="/news">新闻</RouterLink>
        </div>
        <div class="right">
          <n-popover trigger="hover" placement="bottom" :show-arrow="false">
            <template #trigger> <a>加入申请</a> </template>
            <img src="/img/二维码.png" alt="" />
          </n-popover>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { header, header2, mouseWheelUp } from "@/until/banner-header/index";
import { toIntroduct, toPorject, toMember } from "@/until/JumpTo/jumpto";
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
// 创建
onMounted(() => {
  setTimeout(() => {
    mouseWheelUp();
  }, 300);
});
</script>
<style scoped>
@import "@/assets/css/header.css";
@import "@/assets/font/BOBOHEI-2_1668055909497/BOBOHEI-2.css";
@import "@/assets/font/HongLeiXingShuJianTi-2_1668055834995/HongLeiXingShuJianTi-2.css";
</style>
