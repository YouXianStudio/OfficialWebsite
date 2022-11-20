import { ref } from 'vue'
import {
    newList, page,
    getpageSize,
    pagesize,
    getShowList,
} from '@/until/news/index'

interface newList {
    imgUrl: string;
    title: string;
    newID: number;
    time: string;
    Headline: boolean;
}

export const NothingShow = ref(false)
export const PageShow=ref(true)
// 查询出的新闻展示
export const searchNews = ref<newList[]>([])
// 搜索框内容
export const content = ref("")
// 搜索功能
export const Search = (content: any) => {
    PageShow.value=false
    var arr = new Array();
    if (content == '' || content == null) {
        // 展示   什么都没有   框
        NothingShow.value = true
        return
    }
    newList.value.forEach((item) => {
        if (item.title.indexOf(content) != -1) {
            // 取消展示   什么都没有   框
            
            NothingShow.value = false
            arr.push(item)
        }
    });
    if(arr.length!=0){
        searchNews.value = arr
        return
    }
    searchNews.value = arr
    NothingShow.value = true

}