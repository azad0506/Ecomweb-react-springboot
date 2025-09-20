// src/components/Loader.jsx
import React from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const isLoading = useSelector((state) => state.auth.isLoading);
  if (!isLoading) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,0.3)",
      zIndex: 9999,
    }}>
      <h2>Loading coming data...</h2>
    </div>
  );
};

export default Loader;
