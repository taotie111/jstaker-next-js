"use client";
import React, { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select } from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormDisabledDemo: React.FC = () => {
  return (
    <>
      <Button className="mb-4">返回</Button>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="max-w-[600px] mt-50"
      >
        <Form.Item label="站点名称">
          <Input />
        </Form.Item>
        <Form.Item label="roleLevel">
          <Select>
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>

        <Form.Item label="备注">
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
