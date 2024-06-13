import {request} from '@/app/utils/request.ts'
export function getWebList(data){
    console.log(data,'getWebList')
    return request('/weblog/web/getWebList', {
        method: 'GET',
        data: data
    })
}