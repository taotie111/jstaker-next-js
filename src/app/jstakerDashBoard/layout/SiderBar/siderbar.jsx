
import React from "react";
import BgManagement from "./bgManagement";
import MonitorSite from "./monitorSite";
import InspectionTime from "./inspectionTime";
import {getWebList} from '@/app/apiRequest/web.js'
import { createStore,atom } from "jotai"
async function siderbar() {
  const myStore = createStore()
  const countAtom = atom(0)
  const getWebListData = async () => {
    const res = await getWebList()
    return res.data;
  }
  const webListData = await getWebListData()
  return (
    <div className="w-65 bg-white py-2  px-4 h-full">
      <BgManagement />
      <MonitorSite webListData={webListData}/>
      <InspectionTime />
    </div>
  );
}

export default siderbar;



