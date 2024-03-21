/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useRef } from "react";

import { usePageContext } from "../ComponentRender/components/PageContext";
import { validateText } from "../../utils/validateText";
import validateObjects from "../../utils/ValidateObject";
import { SIMPLE_TITLE_AND_DESCRIPTION_DEFAULT_PROPS } from "./schema";
import styles from "./SimpleTitleAndDescription.module.css";

const SimpleTitleAndDescription = props => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const { isMobile } = usePageContext();
  const { props: simpleTitleAndDescriptionProps } = props;
  const {
    description,
    title,
    subtitle,
    disableAnimations,
    showComponentSideBySide,
    componentIsMiddleOfPage
  } = validateObjects(
    simpleTitleAndDescriptionProps,
    SIMPLE_TITLE_AND_DESCRIPTION_DEFAULT_PROPS
  );

  const {
    descriptionText,
    descriptionFontSize,
    descriptionFontSizeMobile,
    descriptionFontColor,
    descriptionAlignment
  } = description;

  const {
    titleText,
    titleFontSize,
    titleFontSizeMobile,
    titleFontColor,
    titleAlignment
  } = title;

  const {
    subtitleText,
    subtitleFontSize,
    subtitleFontSizeMobile,
    subtitleFontColor,
    subtitleAlignment
  } = subtitle;

  const containerStyle = {
    padding: isMobile
      ? componentIsMiddleOfPage
        ? "63px 20px 67px"
        : "30px 20px 60px"
      : componentIsMiddleOfPage
      ? "80px 200px 80px 20px"
      : "50px 20px 80px",
    display:
      validateText(titleText) &&
      validateText(descriptionText) &&
      showComponentSideBySide &&
      !isMobile
        ? "grid"
        : "flex"
  };

  const titleContainerStyle = {
    opacity: disableAnimations ? 1 : 0,
    transform: disableAnimations ? "translateY(0)" : "translateY(20px)"
  };

  const titleStyle = {
    fontSize: isMobile ? titleFontSizeMobile : titleFontSize,
    color: titleFontColor,
    textAlign: titleAlignment
  };

  const subtitleStyle = {
    fontSize: isMobile ? subtitleFontSizeMobile : subtitleFontSize,
    textAlign: subtitleAlignment,
    color: subtitleFontColor
  };

  const descriptionContainerStyle = {
    opacity: disableAnimations ? 1 : 0,
    transform: disableAnimations ? "translateY(0)" : "translateY(20px)"
  };

  const descriptionStyle = {
    fontSize: isMobile ? descriptionFontSizeMobile : descriptionFontSize,
    textAlign: descriptionAlignment,
    color: descriptionFontColor
  };

  /**
   * Callback function for intersection observer.
   * @param {IntersectionObserverEntry[]} entries - The array of intersection observer entries.
   */
  const callbackFunction = entries => {
    const [entry] = entries;

    setIsVisible(entry.isIntersecting);
  };

  /**
   * Sets up an IntersectionObserver to track the visibility of the container element.
   * @param {React.RefObject<HTMLElement>} containerRef - Reference to the container element.
   */
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
      {validateText(titleText) && (
        <div
          className={`${styles["title-container"]} ${
            isVisible && !disableAnimations ? styles["enter-animation"] : ""
          }`}
          style={titleContainerStyle}
        >
          <h2
            className={styles.title}
            style={titleStyle}
            dangerouslySetInnerHTML={{ __html: titleText }}
          />
          {validateText(subtitleText) && (
            <p
              className={styles.subtitle}
              style={subtitleStyle}
              dangerouslySetInnerHTML={{ __html: subtitleText }}
            />
          )}
        </div>
      )}
      {validateText(descriptionText) && (
        <div
          className={`${styles["description-container"]} ${
            isVisible && !disableAnimations ? styles["enter-animation"] : ""
          }`}
          style={descriptionContainerStyle}
        >
          <span
            className={styles.description}
            style={descriptionStyle}
            dangerouslySetInnerHTML={{ __html: descriptionText }}
          />
        </div>
      )}
    </div>
  );
};

export default SimpleTitleAndDescription;
