import React from "react";

interface Props {
  data: TouristInsuranceCardData;
}
export interface TouristInsuranceCardData {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  leftButton: string;
  rightButton: string;
  iconUserUrl?: string;
  iconTypeUrl?: string;
}

const RecomendedProductCard: React.FC<Props> = ({ data }) => {
  return (
    <div
      style={{
        width: 300,
        borderRadius: 16,
        border: "1px solid #e0e0e0",
        overflow: "hidden",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        fontFamily: "sans-serif",
        backgroundColor: "#fff",
      }}
    >
      {/* Top image */}
      <div style={{ position: "relative" }}>
        <img src={data.imageUrl} alt="preview" style={{ width: "100%", height: 160, objectFit: "cover" }} />
        {/* Top-right icon */}
        {data.iconUserUrl && (
          <img
            src={data.iconUserUrl}
            alt="user"
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: "#fff",
              padding: 4,
            }}
          />
        )}
      </div>

      {/* Text content */}
      <div style={{ padding: "16px" }}>
        <h3 style={{ margin: 0, fontSize: 18 }}>{data.title}</h3>
        <p style={{ margin: "4px 0", fontSize: 14, color: "#0077cc" }}>{data.subtitle}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <p style={{ fontSize: 13, color: "#555", flex: 1, marginTop: 8 }}>{data.description}</p>
          {data.iconTypeUrl && (
            <img src={data.iconTypeUrl} alt="icon" style={{ width: 18, height: 18, marginLeft: 8, marginTop: 8 }} />
          )}
        </div>

        {/* Divider */}
        <hr style={{ margin: "16px 0", border: "none", borderTop: "1px solid #eee" }} />

        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "#0077cc",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            {data.leftButton}
          </button>
          <button
            style={{
              backgroundColor: "#111",
              color: "#fff",
              borderRadius: 20,
              border: "none",
              padding: "6px 16px",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            {data.rightButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecomendedProductCard;
