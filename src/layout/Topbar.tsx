import styles from "./layout.module.css";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.logoSection}>
        <img src="/apex.insurance.logo.svg" alt="APEX" />
      </div>

      <div className={styles.actions}>
        <button>
          <img src="/topbar/first.svg" alt="" />
        </button>
        <button className={styles.actionButton}>
          <img src="/topbar/sec.svg" alt="show" />
          Такафул
        </button>
        <button className={styles.actionButton}>
          <img src="/topbar/th.svg" alt="" /> | RU
        </button>
        <button className={styles.actionButton}>
          <img src="/topbar/four.svg" alt="1188" />
          1188 |
          <img src="/topbar/five.svg" alt="Поддержка" />
          Поддержка
        </button>
      </div>
    </div>
  );
};

export default Topbar;
