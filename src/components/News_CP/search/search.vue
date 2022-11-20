<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="search">
    <div class="searchbox">
      <input
        placeholder="输入你要查找的新闻标题"
        v-model="content"
        type="text"
      />
      <div @click="Search(content)">
        <img src="/img/search.png" alt="" />
      </div>
    </div>
    <div class="nothing" v-show="NothingShow">
      <a
        >似乎没有你想找的新闻T-T————<span class="reset" @click="reset"
          >复原</span
        ></a
      >
    </div>
    <div class="news" v-show="!NothingShow">
      <div class="newbox" v-for="(item, index) in searchNews" :key="index">
        <div class="time">
          <a class="year">{{ item.time.substring(4, 2) }}/</a>
          <a class="month">{{ item.time.substring(7, 5) }}/</a>
          <a class="day">{{ item.time.substring(10, 8) }}</a>
          <router-link
            :to="{
              path: '/detail',
              query: { id: item.newID, title: item.title },
            }"
            class="goin"
          >
            <img src="/img/goin.png" alt="" />
          </router-link>
        </div>
        <n-image
          class="img"
          width="330"
          height="190"
          :src="item.imgUrl"
          alt=""
        />
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div class="text">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { NothingShow, content, Search, searchNews } from "@/until/news/search";
import { reset } from "@/until/news/index";
import { RouterLink } from "vue-router";
</script>
<style scoped>
@import "@/assets/css/news_css/search.css";
</style>
