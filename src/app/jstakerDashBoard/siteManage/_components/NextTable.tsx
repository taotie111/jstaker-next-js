"use client";
import React, { useEffect, useState } from "react";
import { Space, Table, message } from "antd";
import { getWebList, deleteWebList } from "@/app/apiRequest/web";
import { useRouter } from "next/navigation";

function NextTable() {
  const router = useRouter();
  const [siteListData, setSiteListData] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const columns = [
    {
      title: "站点名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "roleLevel",
      dataIndex: "roleLevel",
      key: "roleLevel",
    },

    {
      title: "备注",
      dataIndex: "remark",
      key: "remark",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record: Object) => {
        return (
          <>
            <Space size="middle">
              <a onClick={() => handleDelete(record)}>Delete</a>
              <a onClick={() => handleUpdate(record)}>Update</a>
            </Space>
          </>
        );
      },
    },
  ];
  //删除数据
  let handleDelete = async (record: any) => {
    console.log("删除", record);
    let res = await deleteWebList({ id: record.id });
    if (res.success) {
      messageApi
        .open({
          type: "success",
          content: "删除站点成功",
        })
        .then(() => {
          getList();
        });
    }
  };
  //更新数据
  let handleUpdate = async (record: any) => {
    console.log("更新", record);
    router.push('/jstakerDashBoard/siteManage/create')

  };
  //获取列表数据
  let getList = async () => {
    let res = await getWebList();
    setSiteListData(res.data);
  };
  useEffect(() => {
    getList();
  }, []);
  console.log("列表数据", siteListData);

  return (
    <>
      {contextHolder}
      <Table columns={columns} dataSource={siteListData} />
    </>
  );
}

export default NextTable;
