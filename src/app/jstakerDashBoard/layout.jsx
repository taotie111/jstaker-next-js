import styles from "./styles.module.css";
import SiderBar from "./_components/SiderBar/siderbar.jsx";
import { Button } from 'antd';
import { PoweroffOutlined } from "@ant-design/icons";
import { signOut } from '@/auth';
export default function DashboardLayout({ children }) {
  return (
    <section className={styles.dashboard}>
      <div className={styles.dashboard}>
        <div className={styles.header}>
    
        <img src="/jstakerIcon.png" className={styles.icon}></img>
          <div className={styles.title}> 数据监控中心</div>
          <form  className=" ml-auto mr-2"  action={async () => {
            'use server';
            console.log('hh')
            await signOut();
          }}>
        <Button className=" flex items-center" type="text"><PoweroffOutlined /> Sign Out</Button>
        </form>
       
        <div>


        </div>
        </div>
        <div className={styles.container}>
          <div className={styles.left}>
            <SiderBar></SiderBar>
          </div>
          <div className={styles.coreContainer}>{children}</div>
        </div>
      </div>
    </section>
  );
}
