import React from "react";
import RecomendedProductCard from "../components/RecomendedProductCard";
import { mockCards } from "../data/Recomended";

interface Props {}

const ProductRecommendationsContainer: React.FC<Props> = () => {
  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <h2 style={{ margin: 0, fontSize: 18 }}>Рекомендуемые продукты</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#e8e8e8",
              borderRadius: 20,
              padding: "4px 10px",
              fontSize: 14,
            }}
          >
            <span style={{ marginRight: 8 }}>Частным лицам</span>
            <div
              style={{
                width: 28,
                height: 16,
                borderRadius: 8,
                backgroundColor: true ? "#0077cc" : "#aaa",
              }}
            />
          </div>
        </div>
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "#0077cc",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Все продукты →
        </button>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 16,
        }}
      >
        {mockCards.map((card, index) => (
          <RecomendedProductCard key={index} data={card} />
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendationsContainer;
