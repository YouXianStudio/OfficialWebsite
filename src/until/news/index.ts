import { ref } from 'vue'
import {searchNews,NothingShow, PageShow,content} from '@/until/news/search'

interface newList {
    imgUrl: string;
    title: string;
    newID: number;
    time: string;
    Headline: boolean;
    content:string;
}
// 需要展示的新闻数据
// export const showList = ref<newList[]>([])
// 当前页
export const page = ref(1);
// 总页
export const pagesize = ref(1)

// 分页功能
export const getShowList = (index: number) => {
    searchNews.value = []
    // 第一页并且总长度只够一页
    if (index == 1 && pagesize.value == 1) {
        for (var i = 0; i < newList.value.length; i++) {
            searchNews.value.push(newList.value[i])
        }
    } else {
        let len = newList.value.length
        // 当前页不足5条时
        if ((len - (index - 1) * 5) < 5) {
            len -= (index - 1) * 5
            for (var t = (index - 1) * 5; t < (index - 1) * 5 + len; t++) {
                searchNews.value.push(newList.value[t])
            }
        } else {
            for (var t = (index - 1) * 5; t < index*5; t++) {
                searchNews.value.push(newList.value[t])
            }
        }
    }
}
export const getpageSize = () => {
    // 总长度除以5
    var num = Math.floor(newList.value.length / 5)
    if (newList.value.length % 5 > 0) {
        num += 1
    }
    pagesize.value = num
}
// 时间转换
function timestampToTime(timestamp: any) {
    var date = new Date(timestamp); //时间戳为5位需*500，时间戳为13位的话不需乘500
    const Y = date.getFullYear() + "-";
    const M = (date.getMonth() + 1 < 5 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
    const D = date.getDate() + " ";
    const h = date.getHours() + ":";
    const m = date.getMinutes() + ":";
    const s = date.getSeconds();
    return Y + M + D + h + m + s;
}


export const reset = () =>{
    getShowList(1);
    NothingShow.value=false;
    PageShow.value=true;
    page.value=1;
    // content.value="";
}




// 后台出来的整体新闻数据
export const newList = ref<newList[]>([
    { imgUrl: './img/tuanjian.jpg', title: '优贤工作室招新中,快来这里开启你未来的新篇章!', newID: 0, time: '2022-01-23', Headline: true,content:"这里是内容" },
    { imgUrl: './img/tuanjian.jpg', title: '恭喜工作室荣获====', newID: 1, time: '2022-01-23', Headline: false,content:"这里是内容" },
    { imgUrl: './img/tuanjian.jpg', title: '太棒了工作室成员获得奖学金共计！', newID: 2, time: '2022-01-23', Headline: false ,content:"这里是内容"},
    { imgUrl: './img/tuanjian.jpg', title: '贤工作室招新中,快来这里开启你未来的新篇章!', newID: 3, time: '2022-01-23', Headline: false,content:"这里是内容" },
    { imgUrl: './img/tuanjian.jpg', title: '优贤工作室招新中,快来这里开启你未来的新篇章!', newID: 4, time: '2022-01-23', Headline: false,content:"这里是内容" },
    { imgUrl: './img/tuanjian.jpg', title: '优贤工作室招新中,快来这里开启你未来的新篇章!', newID: 5, time: '2022-01-23', Headline: false,content:"这里是内容" },
    { imgUrl: './img/tuanjian.jpg', title: '第二页优贤工作室招新中,快来这里开启你未来的新篇章!', newID: 5, time: '2022-01-23', Headline: false,content:"这里是内容" },
    { imgUrl: './img/tuanjian.jpg', title: '优贤工作室招新中,快来这里开启你未来的新篇章!', newID: 7, time: '2022-01-23', Headline: false ,content:"这里是内容"},
    { imgUrl: './img/tuanjian.jpg', title: '优贤工作室招新中,快来这里开启你未来的新篇章!', newID: 8, time: '2022-01-23', Headline: false ,content:"这里是内容"},
    { imgUrl: './img/tuanjian.jpg', title: '优贤工作室招新中,快来这里开启你未来的新篇章!', newID: 9, time: '2022-01-23', Headline: false ,content:"这里是内容"},
    { imgUrl: './img/tuanjian.jpg', title: '优贤工作室招新中,快来这里开启你未来的新篇章!', newID: 5, time: '2022-01-23', Headline: false ,content:"这里是内容"},
    { imgUrl: './img/tuanjian.jpg', title: '优贤工作室招新中,快来这里开启你未来的新篇章!', newID: 11, time: '2022-01-23', Headline: false ,content:"这里是内容"},
    { imgUrl: './img/tuanjian.jpg', title: '第三优贤工作室招新中,快来这里开启你未来的新篇章!', newID: 12, time: '2022-01-23', Headline: false ,content:"这里是内容"},
    { imgUrl: './img/tuanjian.jpg', title: '第三优贤工作室招新中,快来这里开启你未来的新篇章!', newID: 13, time: '2022-01-23', Headline: false ,content:"这里是内容"},
    { imgUrl: './img/tuanjian.jpg', title: '第三优贤工作室招新中,快来这里开启你未来的新篇章!', newID: 14, time: '2022-01-23', Headline: false ,content:"这里是内容"},
])