import { ref } from 'vue';
import { mainDis, header, header2 } from '@/until/banner-header/index'
import {imgIn} from '@/until/mainBk2/index'
import {photoLeft,photoOpac} from '@/until/mainBk3/index'
import {BK3Show} from '@/until/banner-header/index'
import {screenWidth} from '@/until/WindowSize'
export const this_Main = ref()
export const getMain =(main:any) =>{
    this_Main.value=main
}   
// 获取main
// jump
const jump =()=>{
    mainDis.value.top = '-100%'
    setTimeout(() => {
        header.value.topD1 = '-45px'
        header.value.topD2 = '-130px'
        header.value.toum = 0
        header2.value.topD1 = '-45px'
        header2.value.topD2 = '-45px'
        header2.value.toum = 1
    }, 400)
}
// 跳转到简介
export const toIntroduct = () => {
    jump();
    // 跳转
    if(screenWidth.value<=1285){
        this_Main.value.scrollTo(0,100)
        return
    }
    this_Main.value.scrollTo(0,100)
}
// 跳转到项目
export const toPorject = () =>{
    jump();
    // 跳转
    if(screenWidth.value<=1285){
        this_Main.value.scrollTo(0,1650)
        return
    }
    this_Main.value.scrollTo(0,1150)
    imgIn()
}   
// 跳转到成员
export const toMember =()=>{
    jump();
    // 跳转
    if(screenWidth.value<=1280){
        this_Main.value.scrollTo(0,2750)
        return
    }
    this_Main.value.scrollTo(0,1970)
    photoLeft.value = "0px"
    photoOpac.value = 1
    BK3Show.value = true;
}