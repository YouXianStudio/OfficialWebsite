import {ref} from 'vue'
export let screenWidth = ref()
export let screenHeight = ref();
window.onresize = () => {
  return (() => {
    screenWidth.value = document.body.clientWidth;
    screenHeight.value = document.body.clientHeight;
  })();
};