"use client";
import React, { useState } from "react";
import BgManagement from "./bgManagement";
import MonitorSite from "./monitorSite";
import InspectionTime from "./inspectionTime";
function siderbar() {
  return (
    <div className="w-65 bg-white py-2  px-4">
      <BgManagement />
      <MonitorSite />
      <InspectionTime />
    </div>
  );
}

export default siderbar;
