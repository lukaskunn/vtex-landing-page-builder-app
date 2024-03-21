import React from "react";

import styles from "../../ComponentRender.module.css";

const BaseDefaultLayout = ({ children, backgroundColor }) => {
  const containerStyle = {
    backgroundColor: backgroundColor ? backgroundColor : "white",
    width: "100%",
    minHeight: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  };

  return (
    <div style={containerStyle} className={styles["base-layout"]}>
      {children}
    </div>
  );
};

export default BaseDefaultLayout;
