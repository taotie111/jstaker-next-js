'use client'
import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import styles from './styles.module.css';
function User() {
    const items = [
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
            key: '0',
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            ),
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item（disabled）',
            key: '3',
            disabled: true,
        },
    ];
    return (
        <div className={styles.user}>
            <Dropdown
                menu={{
                    items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        ADMIN
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
}

export default User;

