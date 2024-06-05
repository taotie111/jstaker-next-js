import React from "react";
import BgManagement from "./bgManagement";
import MonitorSite from "./monitorSite";
import InspectionTime from "./inspectionTime";
function siderbar() {
  return (
    <div className="w-65  py-2  px-4 bg-[#fefbfb]">
      <BgManagement />
      <MonitorSite />
      <InspectionTime />
    </div>
  );
}

export default siderbar;
