"use client";
import React, { useState } from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import { atom, useAtom } from "jotai"
import {checkWebListAtom} from "@/app/store/webListData/state.js"
import { useRouter } from 'next/navigation'
//监控站点
// const checkWebListAtom = atom([])
function MonitorSite(props) {
  console.log(props,'props')
  //checkedList存放的是value值数组
  const [checkedList, setCheckedList] = useAtom(checkWebListAtom);
  const base = "/jstakerDashBoard/monitoringScreen/"
  const route = useRouter()
  // 获取父组件中的 webListData 信息
  const webListData = []
  props.webListData.map(item => {
    webListData.push({
      label: item.name,
      value: item.id
    })
  })
  const monitorOptions = webListData; 
  const checkAll = monitorOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < monitorOptions.length;
  const onCheckAllChange = (e) => {
    setCheckedList(
      e.target.checked ? monitorOptions.map((item) => item.value) : []
    );
    let href = base;
    if (monitorOptions.length == 0){
      route.push(href + "/0")
    }
    href = href + monitorOptions[0].value
    for(let i=1; i < monitorOptions.length; i++){
      href = href + "-"+ monitorOptions[i].value
    }
    route.push(href)
  };
  const onChange = (list) => {
    setCheckedList(list);
    let href = base;
    if (list.length == 0){
      route.push(href + "/0")
    }
    href = href + list[0]
    for(let i=1; i < list.length; i++){
      href = href + "-"+ list[i]
    }
    route.push(href)
    console.log(list);
  };
  return (
    <div className="mb-3">
      <div className="text-[14px] leading-9">
        <DoubleRightOutlined className="mr-1 !text-[#ffbf75]"  />
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
