import styles from './styles.module.css'

import HeaderBar from './layout/HeaderBar/HeaderBar.jsx'
export default function DashboardLayout({
    children,
  }) {
    return (
      <section className={styles.dashboard}>
            <div className={styles.dashboard} >
            <div className={styles.header}>
              <HeaderBar></HeaderBar>
  
              
            </div>
            <div className={styles.container}>
                <div className={styles.left}></div>
                <div className={styles.coreContainer}>{children}</div>
            </div>
        </div>

      </section>
    )
  }