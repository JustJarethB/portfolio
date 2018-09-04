import React from "react";
import { NavLink } from "react-router-dom";
const style = {
  standard: {
    fontFamily: "Courier",
    fontSize: "2.5em",
    padding: "20px",
    margin: "auto",
    backgroundColor: "#333",
    flex: 1,
    color: "inherit",
    textDecoration: "inherit"
  },
  active: { backgroundColor: "#999" }
};

export default ({ exact, children, to = "/" }) => (
  <NavLink
    exact={exact}
    to={to}
    style={style.standard}
    activeStyle={style.active}>
    {children}
  </NavLink>
);
