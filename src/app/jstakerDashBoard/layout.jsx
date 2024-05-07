import styles from './styles.module.css'

export default function DashboardLayout({
    children,
  }) {
    return (
      <section className={styles.dashboard}>
            <div className={styles.dashboard} >
            <div className={styles.header}>
              <img src='/jstakerIcon.png' className={styles.icon}></img>
              <div className={styles.title}> 数据监控中心</div>
              
            </div>
            <div className={styles.container}>
                <div className={styles.left}></div>
                <div className={styles.coreContainer}>{children}</div>
            </div>
        </div>

      </section>
    )
  }