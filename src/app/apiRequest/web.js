import {request} from '@/app/utils/request.ts'
export function getWebList(data){
    return request('/weblog/web/getWebList', {
        method: 'GET',
        data: data
    })
}