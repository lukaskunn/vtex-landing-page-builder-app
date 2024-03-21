/* eslint-disable no-extra-boolean-cast */
import React, { useEffect, useState } from "react";

import { usePageContext } from "../ComponentRender/components/PageContext";
import ArrowContainer from "./components/ArrowsContainer";
import { validateText } from "../../utils/validateText";
import validateObjects from "../../utils/ValidateObject";
import { TEXT_WITH_SIDE_GALLERY_DEFAULT_PROPS } from "./schema";
import styles from "./TextWithSideGallery.module.css";

const TextWithSideGallery = props => {
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef(null);
  const { isMobile } = usePageContext();
  const [currentListItem, setCurrentListItem] = useState(0);

  const { props: componentProps } = props;
  const {
    disableAnimations,
    title,
    description,
    sideImage,
    contentAlignment,
    galleryList
  } = validateObjects(componentProps, TEXT_WITH_SIDE_GALLERY_DEFAULT_PROPS);

  const {
    descriptionFontColor,
    descriptionFontSize,
    descriptionFontSizeMobile
  } = description;

  const { titleFontColor, titleFontSize, titleFontSizeMobile } = title;

  const { sideImagePosition, isSideImageFullWidth } = sideImage;

  const containerStyle = {
    display: isMobile ? "flex" : "grid",
    flexDirection: "column",
    gridTemplateAreas:
      // eslint-disable-next-line quotes
      sideImagePosition === "right" ? '"text image"' : '"image text"'
  };

  const sideTextContainerStyle = {
    opacity: disableAnimations ? 1 : 0,
    transform: disableAnimations ? "translateY(0)" : "translateY(20px)",
    justifySelf: sideImagePosition === "left" ? "start" : "end",
    alignItems: contentAlignment,
    maxWidth: "768px",
    padding: isMobile
      ? "20px"
      : sideImagePosition === "left"
      ? "0 0 0 50px"
      : "0 50px 0 0"
  };

  const titleStyle = {
    color: titleFontColor,
    fontSize: isMobile ? titleFontSizeMobile : titleFontSize,
    textAlign: isMobile ? "start" : contentAlignment
  };

  const descriptionStyle = {
    color: descriptionFontColor,
    fontSize: isMobile ? descriptionFontSizeMobile : descriptionFontSize,
    textAlign: isMobile ? "start" : contentAlignment
  };

  const sideImageContainerStyle = {
    width: isSideImageFullWidth ? "125%" : "auto",
    padding: isSideImageFullWidth
      ? "0px"
      : isMobile
      ? "60px 20px 10px"
      : "80px 0",
    height: isMobile ? "260px" : "500px",
    maxWidth: isSideImageFullWidth ? "100%" : "768px",
    justifySelf: sideImagePosition === "left" ? "end" : "start",
    opacity: disableAnimations ? 1 : 0,
    transform: disableAnimations ? "translateY(0)" : "translateY(20px)"
  };

  const sideImageSlideContainerStyle = {
    alignItems: isMobile
      ? "center"
      : sideImagePosition === "left"
      ? "flex-end"
      : "flex-start"
  };

  const sideImageStyle = {
    height: isMobile ? "auto" : "500px"
  };

  const controlButtonContainerStyles = {
    justifyContent: isMobile ? "start" : contentAlignment,
    bottom: !isMobile ? "50px" : isSideImageFullWidth ? "20px" : "40px",
    left: !isMobile
      ? contentAlignment === "left" || contentAlignment === "start"
        ? "0px"
        : "auto"
      : isSideImageFullWidth
      ? "20px"
      : "40px",
    right: !isMobile
      ? contentAlignment === "end"
        ? "0px"
        : "auto"
      : isSideImageFullWidth
      ? "20px"
      : "40px",
    top: isMobile ? "-60px" : "auto",
    opacity: disableAnimations ? 1 : 0
  };

  const callbackFunction = entries => {
    const [entry] = entries;

    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const containerReference = containerRef.current;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2
    };

    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerReference) observer.observe(containerReference);

    return () => {
      if (containerReference) observer.unobserve(containerReference);
    };
  }, [containerRef]);

  return (
    <div className={styles.container} style={containerStyle} ref={containerRef}>
      {galleryList.map((item, index) => {
        const { imageSrc, imageAlt, imageSrcMobile } = item;

        // TODO: Fix image height to fit the container
        return (
          <div
            className={
              index === currentListItem ? styles["slide-active"] : styles.slide
            }
            style={sideImageSlideContainerStyle}
            key={index}
          >
            {index === currentListItem && (
              <div
                className={`${styles["image-container"]} ${
                  isVisible && !disableAnimations
                    ? styles["enter-animation"]
                    : ""
                }`}
                style={sideImageContainerStyle}
              >
                <img
                  className={styles["side-image"]}
                  alt={imageAlt}
                  style={sideImageStyle}
                  src={isMobile ? imageSrcMobile : imageSrc}
                />
              </div>
            )}
          </div>
        );
      })}

      <div
        className={`${styles["side-text"]} ${
          isVisible && !disableAnimations ? styles["enter-animation"] : ""
        }`}
        style={sideTextContainerStyle}
      >
        {galleryList.map((item, index) => {
          const { titleText, descriptionText } = item;

          return (
            <div
              className={
                index === currentListItem
                  ? styles["slide-active"]
                  : styles.slide
              }
              key={index}
            >
              {index === currentListItem && (
                <>
                  {validateText(titleText) ? (
                    <h1
                      className={styles.title}
                      style={titleStyle}
                      dangerouslySetInnerHTML={{ __html: titleText }}
                    />
                  ) : null}
                  {validateText(descriptionText) ? (
                    <div
                      className={styles.description}
                      style={descriptionStyle}
                      dangerouslySetInnerHTML={{ __html: descriptionText }}
                    />
                  ) : null}
                </>
              )}
            </div>
          );
        })}
        <ArrowContainer
          setCurrentListItem={setCurrentListItem}
          currentListItem={currentListItem}
          galleryList={galleryList}
          disableAnimations={disableAnimations}
          arrowsContainerStyles={controlButtonContainerStyles}
          isVisible={isVisible}
        />
      </div>
    </div>
  );
};

export default TextWithSideGallery;
