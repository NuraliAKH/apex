import styles from "./layout.module.css";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import React from "react";

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  const items = [
    { label: "Главная", icon: "/icons/room.outline.svg", to: "/" },
    { label: "Пользователи", icon: "/icons/user.outline.svg", to: "/users" },
    { label: "Настройки", icon: "/icons/briefcase.outline.svg", to: "/settings" },
    { label: "Новости", icon: "/icons/feed.outline.svg", to: "/news" },
    { label: "Другие", icon: "/icons/apps.outline.svg", to: "/profile", hideOnMobile: true },
    { label: "Поиск", icon: "/icons/search.outline.svg", to: "/help", hideOnMobile: true },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.topSection}>
        <div className={styles.themeToggle} onClick={toggleTheme}>
          {theme === "light" ? (
            <img src="/icons/moon.icon.svg" alt="Темная тема" />
          ) : (
            <img src="/icons/sun.outline.svg" alt="Светлая тема" />
          )}
        </div>
      </div>

      <div className={styles.menu}>
        {items.map(({ icon, label, to, hideOnMobile }, idx) => (
          <React.Fragment key={idx}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${styles.menuItem} ${isActive ? styles.active : ""} ${hideOnMobile ? styles.hideMobile : ""}`
              }
            >
              <img src={icon} alt={label} className={styles.icon} />
            </NavLink>

            {idx < items.length - 1 && !hideOnMobile && <div className={styles.iconDivider} />}
          </React.Fragment>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
