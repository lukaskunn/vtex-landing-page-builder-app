import React from "react";

import styles from "../../SimpleGallery.module.css";

const GalleryItem = ({
  item,
  isVisible,
  disableAnimations,
  isMobile,
  componentIsFullWidth,
  index,
  key
}) => {
  const {
    imageSrc,
    imageSrcMobile,
    imageAlt,
    itemHasLink,
    itemLink,
    openLinkInNewTab
  } = item;

  const [isHovered, setIsHovered] = React.useState(false);

  const galleryItemContainerStyles = {
    minWidth: isMobile && !componentIsFullWidth ? "none" : "250px",
    minHeight: isMobile && !componentIsFullWidth ? "none" : "250px",
    transitionDelay: `${index * 0.1 + 0.2}s`,
    opacity: disableAnimations ? 1 : 0,
    transform: disableAnimations ? "scale(1)" : "scale(0.9)"
  };

  const galleryItemStyle = {
    transform: isHovered ? "scale(1.1)" : "scale(1)"
  };

  return itemHasLink ? (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      className={`${styles["gallery-item-container"]} ${
        isVisible && !disableAnimations ? styles["enter-animation"] : ""
      }`}
      key={key}
      href={itemLink}
      target={openLinkInNewTab ? "_blank" : "_self"}
      rel={openLinkInNewTab ? "noreferrer" : ""}
      style={galleryItemContainerStyles}
    >
      <img
        src={isMobile ? imageSrcMobile : imageSrc}
        alt={imageAlt}
        className={styles["gallery-item"]}
        style={galleryItemStyle}
        onMouseEnter={() => setIsHovered(true && !disableAnimations)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </a>
  ) : (
    <div
      className={`${styles["gallery-item-container"]} ${
        isVisible && !disableAnimations ? styles["enter-animation"] : ""
      }`}
      key={index}
      style={galleryItemContainerStyles}
    >
      <img
        src={isMobile ? imageSrcMobile : imageSrc}
        alt={imageAlt}
        className={styles["gallery-item"]}
        style={galleryItemStyle}
        onMouseEnter={() => setIsHovered(true && !disableAnimations)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default GalleryItem;
