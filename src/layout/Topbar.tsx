import styles from "./layout.module.css";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.logoSection}>
        <img src="/apex.insurance.logo.svg" alt="APEX" />
      </div>

      <div className={styles.actions}>
        <button className={styles.actionButton}>
          <img src="/topbar/first.svg" alt="" />
          Оформить E-polis
        </button>
        <button className={styles.actionButton}>
          <img src="/topbar/sec.svg" alt="show" />
          Такафул
        </button>

        <button className={styles.actionButton}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              borderRight: "2px solid #999",
              paddingRight: 8,
              marginRight: 8,
            }}
          >
            <img src="/topbar/th.svg" alt="Flag" />
          </span>
          <span>RU</span>
        </button>

        <button className={styles.actionButton}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px 8px 5px",
              borderRight: "2px solid #999",
            }}
          >
            <img src="/topbar/four.svg" alt="1188" />
            <span style={{ marginLeft: 4 }}>1188</span>
          </span>
          <img src="/topbar/five.svg" alt="Поддержка" style={{ marginRight: 4 }} />
          Поддержка
        </button>
      </div>
    </div>
  );
};

export default Topbar;
