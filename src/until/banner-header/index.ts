import { BK2Img, imgIn, imgOut, projeceList } from '@/until/mainBk2/index'
import { photoLeft, photoOpac} from '@/until/mainBk3/index'
import { this_Main } from '@/until/JumpTo/jumpto'
import { ref } from 'vue'

// 用作于是否到达顶部
let ScollTopIndex = true
// 是否到达BK2
export let BK2Show = ref(false)
// 是否到达BK3
export const BK3Show = ref(false)


// 初始化
export const InHomePage = () => {
    header.value.topD1 = "-45px"
    header.value.topD2 = "-130px"
    header.value.toum = 0
    header2.value.topD1 = "-45px"
    header2.value.topD2 = "-130px"
    header2.value.toum = 0
    ScollTopIndex = true
    BK2Show.value = false
    BK3Show.value = false
}

export const header = ref({
    topD1: '-45px',
    topD2: '-130px',
    toum: 0
})
export const header2 = ref({
    topD1: '-45px',
    topD2: '-130px',
    toum: 0
})
// banner dis
export const bannerDis = ref('block')
// main的display
export const mainDis = ref({
    top: '-0px',
})
// 向下
// top为0时出现
export const mouseWheelDown = function () {
    mainDis.value.top = '-100%'
    header.value.topD1 = '-45px'
    header.value.topD2 = '-130px'
    header.value.toum = 0
    header2.value.topD1 = '0px'
    header2.value.topD2 = '0px'
    header2.value.toum = 1
}
export const mouseWheelUp = function () {
    mainDis.value.top = '0%'
    header2.value.topD1 = '-45px'
    header2.value.topD2 = '-130px'
    header2.value.toum = 0
    header.value.topD1 = '0px'
    header.value.topD2 = '0px'
    header.value.toum = 1
}



// banner滚向main
export const bannerScroll = (e: any) => {
    if (e.deltaY > 0) {
        mainDis.value.top = '-100%'
        setTimeout(() => {
            header.value.topD1 = '-45px'
            header.value.topD2 = '-130px'
            header.value.toum = 0
            header2.value.topD1 = '0px'
            header2.value.topD2 = '0px'
            header2.value.toum = 1
        }, 400)
    }
}
// 滚动事件
export const mainScroll = (e: any) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target
    // console.log(scrollTop, clientHeight, scrollHeight)

    // BK2的出现与隐藏
    // 出现
    if (scrollTop + clientHeight > 1600 && BK2Show.value == false) {
        // 随机项目
        const index: any = Math.floor(Math.random() * 4);
        for (var i = 0; i < BK2Img.value.length; i++) {
            BK2Img.value[i] = projeceList[index];
        }
        imgIn()
        BK2Show.value = true
    } else if (scrollTop + clientHeight < 1500 && BK2Show.value == true) {
        BK2Show.value = false
        imgOut()
    }
    // BK3出现
    if (scrollTop + clientHeight > 2450 && BK3Show.value == false) {
        photoLeft.value = "0px"
        photoOpac.value = 1
        BK3Show.value = true;
    } else if (scrollTop + clientHeight < 2400 && BK3Show.value == true) {
        photoLeft.value = "-1300px"
        photoOpac.value = 0
        BK3Show.value = false
    }
    // 到达顶部
    if (scrollTop === 0) {
        console.log(12313)
        ScollTopIndex = true;
        header2.value.topD1 = '0px'
        header2.value.topD2 = '0px'
    } else {
        ScollTopIndex = false;
    }
}
// main滚回banner 滚轮事件
export const mainWheel = (e: any) => {
    if (ScollTopIndex == true && e.deltaY < 0) {
        mouseWheelUp()
    }else if(e.deltaY < 0){
        header2.value.topD1 = '-0px'
        header2.value.topD2 = '-0px'
    }
    if (e.deltaY > 0) {
        header2.value.topD1 = '-45px'
        header2.value.topD2 = '-45px'
    }
}