<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bodyer">
    <div class="main">
      <div class="title">
        <div class="titleText">关于 · 优贤</div>
        <div class="titleText">一路走来的成就</div>
      </div>
      <div class="content">
        <div>
          <n-number-animation
            class="num"
            ref="number0"
            :from="0"
            :to="202011"
          />
          <div>工作室成立于</div>
        </div>
        <div>
          <n-number-animation class="num" ref="number1" :from="0" :to="42" />
          <div>成员总数</div>
        </div>
        <div>
          <n-number-animation class="num" ref="number2" :from="0" :to="3" />
          <div>指导老师</div>
        </div>
        <div>
          <n-number-animation class="num" ref="number3" :from="0" :to="20" />
          <div>完成项目</div>
        </div>
        <div>
          <n-number-animation class="num" ref="number4" :from="0" :to="31" />
          <div>比赛获奖</div>
        </div>
        <div>
          <n-number-animation ref="number5" :from="0" :to="22301" />
          <div>奖学金</div>
        </div>
        <div>
          <n-number-animation ref="number6" :from="0" :to="10" />
          <div>国赛奖</div>
        </div>
        <div>
          <n-number-animation ref="number7" :from="0" :to="30" />
          <div>省赛奖</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import type { NumberAnimationInst } from "naive-ui";
const number0 = ref<NumberAnimationInst | null>(null);
const number1 = ref<NumberAnimationInst | null>(null);
const number2 = ref<NumberAnimationInst | null>(null);
const number3 = ref<NumberAnimationInst | null>(null);
const number4 = ref<NumberAnimationInst | null>(null);
const number5 = ref<NumberAnimationInst | null>(null);
const number6 = ref<NumberAnimationInst | null>(null);
const number7 = ref<NumberAnimationInst | null>(null);
onMounted(() => {
  setInterval(() => {
    const num = Math.floor(Math.random() * 7);
    switch (num) {
      case 0:
        number0.value?.play();
        break;
      case 1:
        number1.value?.play();
        break;
      case 2:
        number2.value?.play();
        break;
      case 3:
        number3.value?.play();
        break;
      case 4:
        number4.value?.play();
        break;
      case 5:
        number5.value?.play();
        break;
      case 6:
        number6.value?.play();
        break;
      case 7:
        number7.value?.play();
        break;
    }
  }, 3000);
});
</script>
<style scoped>
@import "@/assets/css/HONOR/main.css";
</style>
