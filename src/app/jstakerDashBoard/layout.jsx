import styles from "./styles.module.css";

import HeaderBar from "./_components/HeaderBar/HeaderBar.jsx";
import SiderBar from "./_components/SiderBar/siderbar.jsx";

export default function DashboardLayout({ children }) {
  return (
    <section className={styles.dashboard}>
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <HeaderBar></HeaderBar>
        </div>
        <div className={styles.container}>
          <div className={styles.left}>
            <SiderBar className={styles.left}></SiderBar>
          </div>
          <div className={styles.coreContainer}>
            <main className={styles.content}>{children}</main>
          </div>
        </div>
      </div>
    </section>
  );
}
