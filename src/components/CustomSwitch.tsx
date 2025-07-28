import React from "react";

interface CustomSwitchProps {
  value: boolean;
  onChange: (newValue: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ value, onChange }) => {
  return (
    <div
      onClick={() => onChange(!value)}
      style={{
        width: 40,
        height: 24,
        borderRadius: 12,
        backgroundColor: value ? "#0077cc" : "#ccc",
        padding: 2,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: value ? "flex-end" : "flex-start",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "#fff",
          boxShadow: "0 0 2px rgba(0,0,0,0.3)",
          transition: "transform 0.3s ease",
        }}
      />
    </div>
  );
};

export default CustomSwitch;
