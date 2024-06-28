export function deleteParamsIsNotNull (params: any){
    for(let item in params){
        if (params[item] === null || params[item] === undefined || params[item] === ''){
            delete params[item]
        }
    }
    return params;
}



export  function  errorDataHanderCenter()  {
        // 读取前一个小时的 errorList 使用 getErrorList API函数 其中参数为 startDate
    // 将前一个小时的 errorList 进行分类统计得出
    // 上一个小时总共的 error 数量
    // 将其存入一个描述 error 总数与小时相关的数据库
    const  oneHourAgo  =  new  Date();
    oneHourAgo.setHours(oneHourAgo.getHours()  -  1);
    const  startDate  =  oneHourAgo.toISOString();

    //  假设  getErrorList  是一个已经定义好的  API  函数，它返回指定时间段的  errorList
    getErrorList(startDate).then(errorList  =>  {
        if  (errorList  &&  errorList.length  >  0)  {
            const  categorizedErrors  =  categorizeErrors(errorList);
            const  totalErrors  =  errorList.length;
            saveErrorData(totalErrors,  oneHourAgo);

            function  categorizeErrors(errors)  {
                const  categories  =  {};
                errors.forEach(error  =>  {
                    if  (categories[error.type])  {
                        categories[error.type]++;
                    }  else  {
                        categories[error.type]  =  1;
                    }
                });
                return  categories;
            }

            function  saveErrorData(errorCount,  date)  {
                //  假设有一个函数  saveToDatabase  用于将数据保存到数据库
                //  这里我们假设该函数接受两个参数，一个是错误数量，一个是日期
                saveToDatabase('error_totals',  {  error_count:  errorCount,  date:  date  });
            }
        }
    }).catch(error  =>  {
        console.error('Failed  to  fetch  or  process  error  data:',  error);
    });
}

//  假设的  getErrorList  API  函数
function  getErrorList(startDate)  {
    return  new  Promise((resolve,  reject)  =>  {
        //  模拟  API  调用
        setTimeout(()  =>  {
            const  mockData  =  [
                {  type:  'Type1',  message:  'Error  1'  },
                {  type:  'Type2',  message:  'Error  2'  },
                {  type:  'Type1',  message:  'Error  3'  },
                {  type:  'Type3',  message:  'Error  4'  }
            ];
            resolve(mockData);
        },  1000);
    });
}

//  假设的  saveToDatabase  函数
function  saveToDatabase(tableName,  data)  {
    console.log(`Saving  to  ${tableName}:`,  data);
}