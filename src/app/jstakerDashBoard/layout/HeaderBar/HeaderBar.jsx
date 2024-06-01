import React from "react";
import styles from './styles.module.css';
import User from './User.jsx'
function HeaderBar() {
  return (
    <div className={styles.header}>
        <img src='/jstakerIcon.png' className={styles.icon}></img>
        <div className={styles.title}>数据监控中心</div>
        <div className={styles.right}>
            <User></User>
        </div>
    </div>
  );
}

export default HeaderBar;
