import {request} from '@/app/utils/request.ts'
//获取站点列表
export function getWebList(data){
    return request('/weblog/web/getWebList', {
        method: 'GET',
        data: data
    })
}
//新建站点
export function createWebList(data) {
    return request('/weblog/web/createWeb', {
        method: 'POST',
        data: data
    })
}

//更新站点
export function updateWebList(data) {
    return request('/weblog/web/updateWeb', {
        method: 'POST',
        data: data
    })
}
//删除站点
export function deleteWebList(data) {
    return request('/weblog/web/deleteWeb', {
        method: 'DELETE',
        data
       
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
 