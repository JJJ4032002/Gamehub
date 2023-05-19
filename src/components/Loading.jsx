import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress></CircularProgress>
    </div>
  );
}

export default Loading;
