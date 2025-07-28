import React from "react";

const ApexAboutContainer: React.FC = () => {
  return (
    <div style={{ display: "flex", gap: 24, fontFamily: "sans-serif", padding: "24px 0" }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: 12, color: "#111" }}>
          О компании <strong>APEX INSURANCE</strong>
        </h3>
        <div
          style={{
            height: "100%",
            minHeight: 260,
            backgroundColor: "#e6eaf0",
            borderRadius: 12,
          }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: 12, color: "#111" }}>Наши преимущества</h3>
        <div style={{ display: "flex", gap: 24, height: "100%" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Карточка 1 (чёрная) */}
            <div
              style={{
                backgroundColor: "#1c1f22",
                color: "white",
                padding: 16,
                borderRadius: 12,
                position: "relative",
                flex: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: 20 }}>Качество и надёжность</div>
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  fontSize: 30,
                  border: "1px solid #ccc",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#333",
                }}
              >
                1
              </div>
            </div>

            {/* Карточка 2 (чёрная) */}
            <div
              style={{
                backgroundColor: "#1c1f22",
                color: "white",
                padding: 16,
                borderRadius: 12,
                flex: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: 14 }}>Ответственность за ваше будущее</div>
            </div>
          </div>

          {/* Правая колонка */}
          <div style={{ flex: 1.5, display: "flex", flexDirection: "column", gap: 16, paddingRight: 16 }}>
            {/* Карточка 1 (серая) */}
            <div
              style={{
                backgroundColor: "#f0f3f8",
                padding: 32,
                flex: 1,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ flex: 1, fontSize: 20, textAlign: "center", color: "#0077cc", fontWeight: "bold" }}>
                72+
              </div>
              <div style={{ flex: 2, fontSize: 14, color: "#555" }}>Страховых продуктов для частных лиц и компаний</div>
            </div>

            {/* Карточка 2 (серая) */}
            <div
              style={{
                backgroundColor: "#f0f3f8",
                padding: 32,
                flex: 1,

                display: "flex",
                alignItems: "center",
                borderRadius: 12,
              }}
            >
              <div style={{ flex: 1, fontSize: 20, textAlign: "center", color: "#0077cc", fontWeight: "bold" }}>
                52+
              </div>
              <div style={{ flex: 2, fontSize: 14, color: "#555" }}>Региональных филиалов</div>
            </div>

            {/* Карточка 3 (серая) */}
            <div
              style={{
                backgroundColor: "#f0f3f8",
                padding: 32,
                flex: 1,

                display: "flex",
                alignItems: "center",
                borderRadius: 12,
              }}
            >
              <div style={{ flex: 1, fontSize: 20, textAlign: "center", color: "#0077cc", fontWeight: "bold" }}>
                uzA++
              </div>
              <div style={{ flex: 2, fontSize: 14, color: "#555" }}>Исключительно высокий уровень надёжности</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApexAboutContainer;
