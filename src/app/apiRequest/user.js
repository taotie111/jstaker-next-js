import {request} from '@/app/utils/request.ts'

export function loginReq(data) {
    return request('/weblog/login', {
        method: 'POST',
        data: data
    })
}

export function getWebList(data){
    return request('/weblog/web/getWebList', {
        method: 'GET',
        data: data
    })
}