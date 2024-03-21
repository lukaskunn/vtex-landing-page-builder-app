/* eslint-disable no-extra-boolean-cast */
import React, { useEffect } from "react";

import validateObjects from "../../utils/ValidateObject";
import { validateText } from "../../utils/validateText";
import styles from "./TextWithSideImage.module.css";
import { TEXT_WITH_SIDE_IMAGE_DEFAULT_PROPS } from "./schema";
import { usePageContext } from "../ComponentRender/components/PageContext";

const TextWithSideImage = props => {
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef(null);
  const { isMobile } = usePageContext();
  const [isHoveringLearnMoreButton, setIsHoveringLearnMoreButton] =
    React.useState(false);

  const { props: textWithSideImageProps } = props;
  const {
    disableAnimations,
    title,
    description,
    learnMoreButton,
    sideImage,
    contentAlignment
  } = validateObjects(
    textWithSideImageProps,
    TEXT_WITH_SIDE_IMAGE_DEFAULT_PROPS
  );

  const {
    descriptionText,
    descriptionFontColor,
    descriptionFontSize,
    descriptionFontSizeMobile
  } = description;

  const { titleText, titleFontColor, titleFontSize, titleFontSizeMobile } =
    title;

  const {
    showLearnMoreButton,
    learnMoreButtonText,
    learnMoreButtonFontColor,
    learnMoreButtonBackgroundColor,
    learnMoreButtonBorderColor,
    learnMoreButtonFontSize,
    learnMoreButtonFontSizeMobile,
    learnMoreButtonBackgroundColorOnHover,
    learnMoreButtonFontColorOnHover,
    learnMoreButtonBorderColorOnHover,
    learnMoreButtonLink
  } = validateObjects(
    learnMoreButton,
    TEXT_WITH_SIDE_IMAGE_DEFAULT_PROPS.learnMoreButton
  );

  const {
    sideImageSrc,
    sideImageAlt,
    sideImageSrcMobile,
    sideImagePosition,
    isSideImageFullWidth
  } = validateObjects(sideImage, TEXT_WITH_SIDE_IMAGE_DEFAULT_PROPS.sideImage);

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
      ? "30px 20px 0"
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
    maxWidth: isSideImageFullWidth ? "960px" : "768px",
    padding: isSideImageFullWidth
      ? "0px"
      : isMobile
      ? "60px 20px 10px"
      : "80px 0",
    height: !isSideImageFullWidth || isMobile ? "auto" : "500px",
    justifySelf: sideImagePosition === "left" ? "end" : "start",
    opacity: disableAnimations ? 1 : 0,
    transform: disableAnimations ? "translateY(0)" : "translateY(20px)"
  };

  const sideImageStyle = {
    height: !isSideImageFullWidth || isMobile ? "auto" : "500px"
  };

  const learnMoreButtonContainerStyle = {
    justifyContent: isMobile ? "start" : contentAlignment
  };

  const learnMoreButtonStyle = {
    backgroundColor: isHoveringLearnMoreButton
      ? learnMoreButtonBackgroundColorOnHover
      : learnMoreButtonBackgroundColor,
    color: isHoveringLearnMoreButton
      ? learnMoreButtonFontColorOnHover
      : learnMoreButtonFontColor,
    borderColor: isHoveringLearnMoreButton
      ? learnMoreButtonBorderColorOnHover
      : learnMoreButtonBorderColor,
    fontSize: isMobile ? learnMoreButtonFontSizeMobile : learnMoreButtonFontSize
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
      <div
        className={`${styles["image-container"]} ${
          isVisible && !disableAnimations ? styles["enter-animation"] : ""
        }`}
        style={sideImageContainerStyle}
      >
        <img
          className={styles["side-image"]}
          alt={sideImageAlt}
          style={sideImageStyle}
          src={isMobile ? sideImageSrcMobile : sideImageSrc}
        />
      </div>
      <div
        className={`${styles["side-text"]} ${
          isVisible && !disableAnimations ? styles["enter-animation"] : ""
        }`}
        style={sideTextContainerStyle}
      >
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
        {showLearnMoreButton ? (
          <div
            className={styles["learn-more-button-container"]}
            style={learnMoreButtonContainerStyle}
          >
            <a
              href={learnMoreButtonLink}
              style={learnMoreButtonStyle}
              className={styles["learn-more-button"]}
              onMouseEnter={() => setIsHoveringLearnMoreButton(true)}
              onMouseLeave={() => setIsHoveringLearnMoreButton(false)}
              dangerouslySetInnerHTML={{ __html: learnMoreButtonText }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

// TextWithSideImage.defaultProps = TEXT_WITH_SIDE_IMAGE_DEFAULT_PROPS;

export default TextWithSideImage;
