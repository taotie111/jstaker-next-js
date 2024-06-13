import React from "react";
import NextSearch from "./_components/NextSearch";
import NextTable from "./_components/NextTable";
import { Button, Flex } from "antd";
import Link from "next/link";
import { PlusOutlined } from "@ant-design/icons";
function page() {
  return (
    <div className="w-full">
      {/* 站点管理 */}
      <div className="flex  item-center justify-between gap-2">
        <NextSearch />
        <Link href={`/jstakerDashBoard/siteManage/create`}>
          <Button type="primary" icon={<PlusOutlined />}>
            新建
          </Button>
        </Link>
      </div>
      <div className="mt-4">
        <NextTable />
      </div>
    </div>
  );
}

export default page;
