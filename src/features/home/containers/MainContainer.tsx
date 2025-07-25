import React from "react";

const BackgroundContainer: React.FC = () => {
  return (
    <div
      style={{
        height: "400px",
        backgroundImage: 'url("/home/first.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "40px",
      }}
    >
      <div>
        <p style={{ fontSize: "14px", opacity: 0.8, marginBottom: "10px" }}>Страхование ответственности</p>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: 0, marginBottom: "12px" }}>
          Оформите ОСГО ВТС онлайн
        </h1>
        <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: "20px" }}>И получите ссылку на E-polis по смс</p>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "14px",
            backgroundColor: "#ffffffcc",
            color: "#000",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          Подробнее →
        </button>
      </div>
    </div>
  );
};

export default BackgroundContainer;
