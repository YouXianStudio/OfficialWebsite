import { ref } from 'vue'
import { newList } from '@/until/news/index'

interface ShowNewType {
    imgUrl: string;
    title: string;
    time: string;
    content: string;
}

export const ShowNew = ref<ShowNewType>({
    imgUrl: '', title: "", time: "", content: '',
})

export const getNew = (index:any) =>{
    newList.value.forEach((item) => {
        if(index==item.newID){
            ShowNew.value.title=item.title
            ShowNew.value.content=item.content
            ShowNew.value.time=item.time
            ShowNew.value.imgUrl=item.imgUrl
        }
    });
}