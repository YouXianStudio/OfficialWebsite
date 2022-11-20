import { ref } from 'vue'


// 这里需要个人物照片接口
interface IntroduceList {
    id: number;
    name: string;
    class: string;
    Intro: string;
    like: string;
    imgUrl: string;
}
const IntroduceList =ref<IntroduceList[]>([
    { id: 1, name: "刘良方老师", class: "专业老师", Intro: "非常好非常好非常好非常好非常好非常好非常好", like: "非常好非常好非常好非常好非常好非常好",imgUrl:"./img/teacher1.png"},
    { id: 2, name: "易巧玲老师", class: "专业老师", Intro: "非常好非常好非常好非常好非常好非常好非常好", like: "非常好非常好非常好非常好非常好非常好",imgUrl:"./img/teacher2.png"},
    { id: 3, name: "凌诗佳老师", class: "专业老师", Intro: "非常好非常好非常好非常好非常好非常好非常好", like: "非常好非常好非常好非常好非常好非常好",imgUrl:"./img/teacher3.png"},
    { id: 4, name: "姚智斌", class: "21软件1班", Intro: "非常好非常好非常好非常好非常好非常好非常好", like: "非常好非常好非常好非常好非常好非常好",imgUrl:"./img/student4.png"},
    { id: 5, name: "吕心鸣", class: "21软件1班", Intro: "非常好非常好非常好非常好非常好非常好非常好", like: "非常好非常好非常好非常好非常好非常好",imgUrl:"./img/student5.png"},
    { id: 6, name: "陈泽鑫", class: "21软件1班", Intro: "非常好非常好非常好非常好非常好非常好非常好", like: "非常好非常好非常好非常好非常好非常好",imgUrl:"./img/student6.png"},
    { id: 7, name: "冯子玄", class: "21软件1班", Intro: "非常好非常好非常好非常好非常好非常好非常好", like: "非常好非常好非常好非常好非常好非常好",imgUrl:"./img/student7.png"},
    { id: 8, name: "李泽楷", class: "20软件2班", Intro: "非常好非常好非常好非常好非常好非常好非常好", like: "非常好非常好非常好非常好非常好非常好",imgUrl:"./img/student8.png"},
])
// hover鼠标移入图片 显示文字
// export const imgHover = (i: number) => {
//     i = i - 1
//     Introduce.value.name = IntroduceList[i].name
//     Introduce.value.class = IntroduceList[i].class
//     Introduce.value.Intro = IntroduceList[i].Intro
//     Introduce.value.like = IntroduceList[i].like
// }
// hover后展示的文字
interface Introduce {
    name: string,
    class: string,
    Intro: string,
    like: string,
}
export const Introduce = ref<Introduce>({
    name: '姓名',
    class: '班级',
    Intro: '个人介绍',
    like: "偏好/喜好方向/强项"
})
// bk3box1图片
export const bk3Box1 = ref<IntroduceList[]>([])
export const bk3Box2 = ref<IntroduceList[]>([])
export const bk3getBox1 =()=>{
    bk3Box1.value=IntroduceList.value.slice(0,6)
}
export const bk3getBox2 =()=>{
    bk3Box2.value=IntroduceList.value.slice(2,8)
}
// 控制BK3照片出现CSS
export const photoLeft = ref("-1200px")
export const photoOpac = ref(0)

