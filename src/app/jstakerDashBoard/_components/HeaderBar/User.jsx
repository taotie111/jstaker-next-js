'use client'
import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import styles from './styles.module.css';
import { signOut } from "next-auth/react"
function SignOut() {
    return <button onClick={() => signOut()}>退出</button>
 }
function User() {
    const onClick = ({ key }) => {
        console.log(key,'key')
        switch(key){
            case 0: ;
        }
      };
    const items = [
        {
            label: (<SignOut>退出</SignOut>) ,
            key: '0',
        },

    ];
    return (
        <div className={styles.user}>
            <Dropdown
                menu={{
                    items,
                    onClick
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

