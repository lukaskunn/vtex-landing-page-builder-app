import React from "react";

import Arrow from "../Arrow";
import styles from "../../TextWithSideGallery.module.css";

const ArrowContainer = ({
  setCurrentListItem,
  currentListItem,
  galleryList,
  disableAnimations,
  arrowsContainerStyles,
  isVisible
}) => {
  const nextSlide = () => {
    setCurrentListItem(
      currentListItem === galleryList.length - 1
        ? 0
        : parseInt(currentListItem, 10) + 1
    );
  };

  const prevSlide = () => {
    setCurrentListItem(
      currentListItem === 0 ? galleryList.length - 1 : currentListItem - 1
    );
  };

  return (
    <div
      className={`${styles["control-buttons"]} ${
        isVisible && !disableAnimations ? styles["enter-animation"] : ""
      }`}
      style={arrowsContainerStyles}
    >
      <Arrow
        controlFunction={prevSlide}
        imgSrc="https://motorolaimgrepo.vteximg.com.br/arquivos/new-prev-caret-icon.svg"
        imgAlt="prev-caret"
      />
      <Arrow
        controlFunction={nextSlide}
        imgSrc="https://motorolaimgrepo.vteximg.com.br/arquivos/new-next-caret-icon.svg"
        imgAlt="next-caret"
      />
    </div>
  );
};

export default ArrowContainer;
