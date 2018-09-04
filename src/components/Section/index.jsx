import React from "react";
const defaultStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap"
};
export default ({ title = "Unnamed Section", children }) => (
  <section>
    <h2>{title}</h2>
    <hr style={{ width: "80%" }} />
    <span style={defaultStyle}>{children}</span>
  </section>
);
