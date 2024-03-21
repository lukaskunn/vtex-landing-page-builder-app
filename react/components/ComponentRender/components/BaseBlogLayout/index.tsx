import React from "react";

import { usePageContext } from "../PageContext";

const BaseBlogLayout = ({ children, backgroundColor }) => {
  const { isMobile, device } = usePageContext();
  const containerStyle = {
    backgroundColor: backgroundColor ? backgroundColor : "white",
    width: "100%",
    minHeight: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding:
      isMobile || device === "smallDesktop" ? "0 20px" : "0 450px 0 200px"
  };

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

export default BaseBlogLayout;
