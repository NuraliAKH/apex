import React from "react";
import "./ApexAboutContainer.css";

const ApexAboutContainer: React.FC = () => {
  return (
    <div className="apex-container">
      <div className="apex-left">
        <h3>
          О компании <strong>APEX INSURANCE</strong>
        </h3>
        <div className="apex-banner" />
      </div>
      <div className="apex-right">
        <h3>Наши преимущества</h3>
        <div className="apex-cards">
          <div className="apex-column black-cards">
            <div className="black-card with-badge">
              <div className="title">Качество и надёжность</div>
              <div className="badge">1</div>
            </div>
            <div className="black-card">Ответственность за ваше будущее</div>
          </div>

          <div className="apex-column gray-cards">
            <div className="gray-card">
              <div className="highlight">72+</div>
              <div className="desc">Страховых продуктов для частных лиц и компаний</div>
            </div>
            <div className="gray-card">
              <div className="highlight">52+</div>
              <div className="desc">Региональных филиалов</div>
            </div>
            <div className="gray-card">
              <div className="highlight">uzA++</div>
              <div className="desc">Исключительно высокий уровень надёжности</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApexAboutContainer;
