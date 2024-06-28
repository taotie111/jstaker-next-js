'use client'
import React, { use } from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import clsx from 'clsx';
import Link from "next/link";
import { usePathname } from 'next/navigation'
//后台管理
function BgManagement() {
  const pathname = usePathname()
  return (
    <div className="mb-3">
      <div className="text-base leading-9">
        <DoubleRightOutlined className="!text-[#ffbf75] mr-1 "  />
        后台管理
      </div>
      <div className="flex gap-2 flex-col">
      <Link className={clsx('router-link',{'router-link-active':pathname=='/jstakerDashBoard/siteManage'})}  href='/jstakerDashBoard/siteManage'>站点管理</Link>
        <Link className={clsx('router-link',{'router-link-active':pathname=='/jstakerDashBoard/userManage'})}   href='/jstakerDashBoard/userManage'>用户管理</Link>
      </div>
   
    </div>
  );
}

export default BgManagement;
