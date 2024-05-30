import React from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
//后台管理
function BgManagement() {
  return (
    <div className="mb-3">
      <div className="text-base leading-9">
        <DoubleRightOutlined className="mr-1" style={{ color: "blue" }} />
        后台管理
      </div>
      <div className="router-link ">站点管理</div>
      <div className="router-link">用户管理</div>
    </div>
  );
}

export default BgManagement;
