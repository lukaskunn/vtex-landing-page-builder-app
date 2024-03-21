import React from "react";

import styles from "../../TextWithSideGallery.module.css";

const Arrow = ({ controlFunction, imgSrc, imgAlt }) => {
  return (
    <button
      onClick={controlFunction}
      type="button"
      className={styles["prev-button"]}
    >
      <img src={imgSrc} alt={imgAlt} />
    </button>
  );
};

export default Arrow;
