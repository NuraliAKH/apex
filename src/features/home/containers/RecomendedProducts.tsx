import React from "react";
import RecomendedProductCard from "../components/RecomendedProductCard";
import { mockCards } from "../data/Recomended";
import CustomSwitch from "../../../components/CustomSwitch";

interface Props {}

const ProductRecommendationsContainer: React.FC<Props> = () => {
  const [isPrivate, setIsPrivate] = React.useState(false);
  return (
    <div style={{ paddingTop: 24, fontFamily: "sans-serif" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
          height: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <h2 style={{ margin: 0, fontSize: 18 }}>Рекомендуемые продукты</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: 20,
              padding: "4px 10px",
              fontSize: 14,
            }}
          >
            <span style={{ marginRight: 8 }}>Частным лицам</span>
            <CustomSwitch onChange={setIsPrivate} value={isPrivate} />
          </div>
        </div>
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "#0077cc",
            fontSize: 14,
            cursor: "pointer",
            paddingRight: 16,
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
          alignItems: "stretch",
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
