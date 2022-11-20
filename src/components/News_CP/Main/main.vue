<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main">
    <div class="bodyer">
      <div class="content">
        <n-card class="news" title="优贤 · 新闻" hoverable>
          <div class="newList">
            <!-- <div class="search">
              翻页太累，想要查找？<RouterLink to="/search">点我</RouterLink>
            </div>
            <div class="list">
              <RouterLink
                :to="{
                  path: '/detail',
                  query: { id: item.newID, title: item.title },
                }"
                v-for="(item, index) in showList"
                :key="index"
              >
                <img :src="item.imgUrl" alt="" />
                <a class="title">{{ item.title }}</a>
                <a class="time">{{ item.time }}</a>
              </RouterLink>
            </div>
            <div class="pagein">
              <n-pagination v-model:page="page" :page-count="pagesize" />
            </div> -->
            <Search></Search>
            <div class="pagein" v-show="PageShow">
              <n-pagination v-model:page="page" :page-count="pagesize" />
            </div>
          </div>
        </n-card>
      </div>
    </div>
    <Footer style="margin-top: 50px"></Footer>
  </div>
</template>
<script setup lang="ts">
import { page, getpageSize, pagesize, getShowList } from "@/until/news/index";
import { PageShow } from "@/until/news/search";
import Footer from "@/components/Footer/footer.vue";
import { onMounted, watch } from "vue";
import Search from "@/components/News_CP/search/search.vue";
onMounted(() => {
  getpageSize();
  getShowList(1);
});
watch(
  () => page.value,
  () => {
    getShowList(page.value);
  }
);
</script>
<style scoped>
@import "@/assets/css/news_css/news_main.css";
</style>
