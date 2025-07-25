import styles from "./layout.module.css";
import { FaPhone, FaFileAlt, FaEye } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { GiGoldBar } from "react-icons/gi";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.logoSection}>
        <img src="/apex.insurance.logo.svg" alt="APEX" />
      </div>

      <div className={styles.actions}>
        <button className={styles.actionButton}>
          <FaFileAlt />
          Оформить E-polis
        </button>
        <button className={styles.actionButton}>
          <FaEye /> |
          <GiGoldBar />
          Такафул
        </button>
        <button className={styles.actionButton}>RU</button>
        <button className={styles.actionButton}>
          <FaPhone />
          1188 |
          <MdSupportAgent />
          Поддержка
        </button>
      </div>
    </div>
  );
};

export default Topbar;
