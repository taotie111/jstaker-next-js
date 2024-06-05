import React from "react";
import { DoubleRightOutlined } from "@ant-design/icons";

import Link from "next/link";
//后台管理
function BgManagement() {
  return (
    <div className="mb-3">
      <div className="text-base leading-9">
        <DoubleRightOutlined className="mr-1 text-blue-600"  />
        后台管理
      </div>
      <div className="flex flex-col">
      <Link className="router-link"  href='/jstakerDashBoard/siteManage'>站点管理</Link>
        <Link className="router-link"  href='/jstakerDashBoard/userManage'>用户管理</Link>
      </div>
   
    </div>
  );
}

export default BgManagement;
