"use client";
import React, { useState } from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
//监控站点
function MonitorSite() {
  //checkedList存放的是value值数组
  const [checkedList, setCheckedList] = useState([]);
  const monitorOptions = [
    { label: "城市生命线海塘专项", value: 0 },
    { label: "鳌江", value: 1 },
  ];
  const checkAll = monitorOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < monitorOptions.length;
  const onCheckAllChange = (e) => {
    setCheckedList(
      e.target.checked ? monitorOptions.map((item) => item.value) : []
    );
  };
  const onChange = (list) => {
    setCheckedList(list);
  };
  return (
    <div className="mb-3">
      <div className="text-base leading-9">
        <DoubleRightOutlined className="mr-1" style={{ color: "blue" }} />
        监控站点
      </div>
      <Checkbox
        className="mb-2"
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        全选
      </Checkbox>
      <Checkbox.Group
        options={monitorOptions}
        className="flex flex-col gap-2"
        onChange={onChange}
        value={checkedList}
      ></Checkbox.Group>
    </div>
  );
}

export default MonitorSite;
