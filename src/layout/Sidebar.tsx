import styles from "./layout.module.css";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  const items = [
    { label: "Главная", icon: "/icons/room.outline.svg", to: "/" },
    { label: "Пользователи", icon: "/icons/user.outline.svg", to: "/users" },
    { label: "Настройки", icon: "/icons/briefcase.outline.svg", to: "/settings" },
    { label: "Новости", icon: "/icons/feed.outline.svg", to: "/settings" },
    { label: "Другие", icon: "/icons/apps.outline.svg", to: "/profile" },
    { label: "Поиск", icon: "/icons/search.outline.svg", to: "/help" },
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
        {items.map(({ icon, label, to }, idx) => (
          <NavLink
            key={idx}
            to={to}
            className={({ isActive }) => `${styles.menuItem} ${isActive ? styles.active : ""}`}
          >
            <img src={icon} alt={label} className={styles.icon} />
          </NavLink>
        ))}
        <NavLink to={"/profile"} className={({ isActive }) => `${styles.menuItem} ${isActive ? styles.active : ""}`}>
          <div className={styles.lastMenuItem}>
            <img src={"/icons/exit.icon.svg"} alt="Личный Кабинет" className={styles.lastIcon} />
            <span className={styles.menuLabel}>Личный Кабинет</span>
          </div>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
