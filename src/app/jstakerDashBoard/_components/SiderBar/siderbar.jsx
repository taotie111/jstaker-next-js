import React from "react";
import BgManagement from "./bgManagement";
import MonitorSite from "./monitorSite";
import InspectionTime from "./inspectionTime";
import {getWebList} from '@/app/apiRequest/web.js'
async function siderbar(props) {
  let webListData = [];
  const getWebListData = async () => {
    const res = await getWebList()
    webListData = res.data;
    return res.data;
  }
  webListData = await getWebListData()
  return (
    <div className="w-65  py-2  px-4 bg-[#fefbfb]">
      <BgManagement />
      <MonitorSite webListData={webListData}/>
      <InspectionTime />
    </div>
  );
}

export default siderbar;

// 这个函数在每个请求上运行，只在服务器端运行
export async function getServerSideProps(context) {
  // 假设我们从某个API或者其他数据源获取数据

  serverData =  webListData
  // 通过props返回数据
  return {
    props: { serverData  }, // 这里的数据将被传递给页面组件作为props
  };
}