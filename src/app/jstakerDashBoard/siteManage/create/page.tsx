"use client";
import React, { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, message } from "antd";
import { createWebList } from "@/app/apiRequest/web";
import { useRouter } from "next/navigation";
const { TextArea } = Input;

const FormDisabledDemo: React.FC = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  let onFinish = (value: any) => {
    createWebList({ ...value }).then((res) => {
      console.log(res);
      if (res.success) {
        messageApi.open({
          type: "success",
          content: "新建站点成功",
        }).then(()=>{
          router.back();
        });
      
      }
    });
  };
  return (
    <>
      {contextHolder}
      <Button className="mb-4" onClick={() => router.back()}>
        返回
      </Button>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="max-w-[600px] mt-50"
        onFinish={onFinish}
        form={form}
      >
        <Form.Item label="站点名称" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="站点位置" name="address">
          <Input />
        </Form.Item>
        <Form.Item label="roleLevel" name="roleLevel">
          <Select>
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="备注" name="remark">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 3, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <FormDisabledDemo />;
