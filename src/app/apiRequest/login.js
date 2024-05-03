import {request} from '@/app/utils/request.ts'

export function loginReq(data) {
    return request('/weblog/login', {
        method: 'POST',
        data: data
    })
}