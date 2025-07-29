import React from "react";
import "./Footer.css"; // подключаем стили

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Логотип */}
        <div className="footer-logo">
          <img src="/apex.insurance.logo.svg" alt="APEX logo" />
        </div>

        {/* Меню + контакты */}
        <div className="footer-content">
          <div className="footer-columns">
            <div className="footer-column">
              <span>Частным лицам</span>
              <span>Бизнесу</span>
              <span>О компании</span>
              <span>Контакты</span>
            </div>
            <div className="footer-column">
              <span>Личное страхование</span>
              <span>Страхование ответственности</span>
              <span>Страхование имущества</span>
              <span>Автострахование</span>
            </div>
            <div className="footer-column">
              <span>Единый портал корпоративной информации</span>
              <span>Правительственный портал</span>
              <span>Агентство по развитию страхового рынка</span>
            </div>
          </div>

          <div className="footer-contact">
            <div className="footer-socials">
              <img src="/networks/facebook.logo.svg" alt="Facebook" />
              <img src="/networks/insta.logo.svg" alt="Instagram" />
              <img src="/networks/in.logo.svg" alt="LinkedIn" />
              <img src="/networks/email.logo.svg" alt="Email" />
            </div>
            <div className="footer-phone">
              <div>Круглосуточная связь:</div>
              <div className="bold">+998 (71) 203 08 08</div>
              <div>1188</div>
              <div className="feedback-link">Обратная связь</div>
            </div>
          </div>
        </div>

        {/* Лицензия */}
        <hr className="footer-divider" />
        <p className="footer-license">
          При использовании материалов сайта ссылка на веб-сайт apexinsurance.uz обязательна. Лицензия Агентства по
          развитию страхового рынка при Министерстве финансов Республики Узбекистан серии СФ № 00030 от 18.02.2022 года.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
