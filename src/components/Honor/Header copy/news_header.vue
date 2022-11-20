<template>
  <div class="header2" style="top: 0px">
    <div class="d1" style="top: 0px">
      <div class="nav">
        <div class="left">
          <RouterLink to="/">首页</RouterLink> |
          <RouterLink to="/honor">成就</RouterLink> |
          <RouterLink to="/">项目</RouterLink> |
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
    <div class="d2" style="top: 0px">
      <div class="nav">
        <div class="left">
          <img src="/img/logo_red.png" alt="" />
          <a>优贤工作室</a>
        </div>
        <div class="mid">
          <RouterLink to="/">回到首页</RouterLink>
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
<script setup lang="ts"></script>
<style>
@import "@/assets/css/header.css";
@import "@/assets/font/BOBOHEI-2_1668055909497/BOBOHEI-2.css";
@import "@/assets/font/HongLeiXingShuJianTi-2_1668055834995/HongLeiXingShuJianTi-2.css";
</style>
