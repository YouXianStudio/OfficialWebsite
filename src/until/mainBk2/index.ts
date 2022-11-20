import { ref } from 'vue'
import { screenHeight,screenWidth} from '@/until/WindowSize'
// 项目列表
export const projeceList = ["./img/project1.png", "./img/project2.png", "./img/project3.png", "./img/project4.png"]
export const BK2Img = ref(['', '', '', ''])
export const BK2ImgStyle = ref([
    { top: '-30PX', opacity: '0' },
    { top: '60PX', opacity: '0' },
    { top: '-30PX', opacity: '0' },
    { top: '60PX', opacity: '0' },
])
export const getStyle = function (index: any) {
    if(screenWidth.value<1285){
        return
    }
    return BK2ImgStyle.value[index];
}
export const imgIn = () => {
    BK2ImgStyle.value.forEach(function (index) {
        index.opacity = '1',
            index.top = '0px'
    });
}
export const imgOut = () => {
    for (var i = 0; i < BK2ImgStyle.value.length; i++) {
        if (i % 2 == 0) {
            BK2ImgStyle.value[i].top = '-30px'
            BK2ImgStyle.value[i].opacity = '0'
        } else {
            BK2ImgStyle.value[i].top = '60px'
            BK2ImgStyle.value[i].opacity = '0'
        }
    }
}
window.onresize = () => {
    return (() => {
      screenWidth.value = document.body.clientWidth;
      screenHeight.value = document.body.clientHeight;
    })();
  };