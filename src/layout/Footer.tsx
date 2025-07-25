import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f1f3f6",
        padding: "40px 20px",
        fontFamily: "sans-serif",
        fontSize: "14px",
        color: "#919699",
      }}
      className="footer"
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Логотип */}
        <div style={{ width: "100%", marginBottom: 24 }}>
          <img src="/apex.insurance.logo.svg" alt="APEX logo" style={{ height: 40 }} />
        </div>

        {/* Меню — 3 колонки */}
        <div style={{ display: "flex", flex: 3, justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span>Частным лицам</span>
            <span>Бизнесу</span>
            <span>О компании</span>
            <span>Контакты</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span>Личное страхование</span>
            <span>Страхование ответственности</span>
            <span>Страхование имущества</span>
            <span>Автострахование</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span>Единый портал корпоративной информации</span>
            <span>Правительственный портал</span>
            <span>Агентство по развитию страхового рынка</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 16,
              minWidth: 200,
            }}
          >
            <div style={{ display: "flex", gap: 12 }}>
              <img src="/networks/facebook.logo.svg" alt="Facebook" width={40} />
              <img src="/networks/insta.logo.svg" alt="Instagram" width={40} />
              <img src="/networks/in.logo.svg" alt="LinkedIn" width={40} />
              <img src="/networks/email.logo.svg" alt="Email" width={40} />
            </div>
            <div style={{ textAlign: "right", fontSize: 14, color: "#555" }}>
              <div>Круглосуточная связь:</div>
              <div style={{ fontWeight: "bold" }}>+998 (71) 203 08 08</div>
              <div>1188</div>
              <div style={{ textDecoration: "underline", cursor: "pointer" }}>Обратная связь</div>
            </div>
          </div>
        </div>

        {/* Соцсети и контакты */}
      </div>

      {/* Линия и лицензия */}
      <hr style={{ margin: "32px 0", border: "none", borderTop: "1px solid #ccc" }} />
      <p style={{ fontSize: 12, color: "#888", maxWidth: 900, margin: "0 auto" }}>
        При использовании материалов сайта ссылка на веб-сайт apexinsurance.uz обязательна. Лицензия Агентства по
        развитию страхового рынка при Министерстве финансов Республики Узбекистан серии СФ № 00030 от 18.02.2022 года.
      </p>
    </footer>
  );
};

export default Footer;
