import React from "react";

const defaultStyle = {
  minWidth: "60vw",
  maxWidth: "600px",
  minHeight: "200px",
  padding: "5px",
  // flex: 1,
  borderRadius: "5px",
  backgroundColor: "#eee",
  margin: "10px"
};

export default ({ title = "Unnamed Section", subTitle, children }) => (
  <div style={defaultStyle}>
    <h2 style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ flex: 1 }}>{title}</span>
      {subTitle && <span style={{ flex: 1 }}>{subTitle}</span>}
    </h2>
    <hr style={{ width: "80%" }} />
    {children}
  </div>
);
