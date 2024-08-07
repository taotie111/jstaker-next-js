import {request} from '@/app/utils/request.ts'
export function getWebList(data){
    return request('/weblog/web/getWebList', {
        method: 'GET',
        data: data
    })
}

export function getWebErrorList(data){
    return request('/weblog/getErrorList', {
        method: 'GET',
        data: data
    })
}

export function getPerformMonitorList(data){
    return request("/weblog/getPerformMonitorList",{
        method: 'GET',
        data: data
    })
}

export function getUVDataListCenter(data){
    return request("/weblog/uv/getUVDataListCenter",{
        method: 'GET',
        data: data
    })
}
 