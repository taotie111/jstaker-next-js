export function deleteParamsIsNotNull (params: any){
    for(let item in params){
        if (params[item] === null || params[item] === undefined || params[item] === ''){
            delete params[item]
        }
    }
    return params;
}