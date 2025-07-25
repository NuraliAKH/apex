import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import styles from "./layout.module.css";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <Topbar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
