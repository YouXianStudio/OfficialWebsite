<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Banner></Banner>
  <div
    id="main"
    ref="main"
    class="main"
    @scroll="mainScroll($event)"
    @mousewheel="mainWheel"
    :style="{ top: mainDis.top }"
  >
    <div id="bk1">
      <h1 class="title">工作室 · 简介</h1>
      <div class="content">
        <div>
          <img :src="bk1.Picture" alt="" class="photo" />
          <a>优贤工作室成员大合照...</a>
        </div>
        <div>
          <div>
            <a>{{ bk1.content1 }}</a>
          </div>
          <div>
            <a>{{ bk1.content2 }}</a>
          </div>
        </div>
        <div>
          <div>
            <a>{{ bk1.content3 }}</a>
          </div>
          <div>
            <a>{{ bk1.content4 }}</a>
          </div>
        </div>
        <div>
          <img :src="bk1.TuanJian" alt="" class="photo" />
        </div>
      </div>
    </div>
    <div id="bk2">
      <div class="title" @click="imgIn">
        <h1>项</h1>
        <h1>目</h1>
        <h1>·</h1>
        <h1>展</h1>
        <h1>示</h1>
      </div>
      <div class="content">
        <div
          v-for="(item, index) in BK2Img"
          :key="index"
          :style="getStyle(index)"
        >
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
    <div id="bk3">
      <div class="peopleList" id="bk3box1">
        <div :style="{ left: photoLeft, opacity: photoOpac }">
          <!-- eslint-disable vue/require-v-for-key -->
          <li v-for="item in bk3Box1">
            <div class="content">{{ item.name }}</div>
            <img :src="item.imgUrl" />
          </li>
        </div>
      </div>
      <div class="peopleList" id="bk3box2">
        <div :style="{ left: photoLeft, opacity: photoOpac }">
          <!-- eslint-disable vue/require-v-for-key -->
          <li v-for="item in bk3Box2">
            <div class="content">{{ item.name }}</div>
            <img :src="item.imgUrl" />
          </li>
        </div>
      </div>
      <h1 class="title">工作室 · 成员</h1>
    </div>
    <Footer></Footer>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Banner from "@/components/Banner/banner.vue";
import Footer from "@/components/Footer/footer.vue";
import { getMain } from "@/until/JumpTo/jumpto";
import { mainDis, mainScroll, mainWheel } from "@/until/banner-header/index";
import { bk1 } from "@/until/mainBk1/index";
import { BK2Img, getStyle, imgIn } from "@/until/mainBk2";
import {
  photoLeft,
  photoOpac,
  bk3Box1,
  bk3Box2,
  bk3getBox1,
  bk3getBox2,
} from "@/until/mainBk3";
import { onMounted } from "vue";

let main = ref();
onMounted(() => {
  // // 随机项目
  // const index: any = Math.floor(Math.random() * 4);
  // for (var i = 0; i < BK2Img.value.length; i++) {
  //   BK2Img.value[i] = projeceList[index];
  // }
  // // 生成成员展示学生随机三张照片
  bk3getBox1();
  bk3getBox2();
  // getphoto();
  getMain(main.value);
});
</script>
<style scoped>
@import url("@/assets/css/main.css");
</style>
