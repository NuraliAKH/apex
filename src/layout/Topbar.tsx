import styles from "./layout.module.css";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.logoSection}>
        <img src="/apex.insurance.logo.svg" alt="APEX" />
      </div>

      <div className={styles.actions}>
        <button className={styles.actionButton}>
          <img src="/topbar/first.svg" alt="Оформить E-polis" />
          Оформить E-polis
        </button>
        <button className={styles.actionButton}>
          <img src="/topbar/sec.svg" alt="show" />
          |
          <img src="th" alt="Такафул" />
          Такафул
        </button>
        <button className={styles.actionButton}>RU</button>
        <button className={styles.actionButton}>
          <img src="four" alt="1188" />
          1188 |
          <img src="five" alt="Поддержка" />
          Поддержка
        </button>
      </div>
    </div>
  );
};

export default Topbar;
