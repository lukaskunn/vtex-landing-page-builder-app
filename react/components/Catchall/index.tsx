import React, { useEffect, useRef } from "react";

import { usePageContext } from "../ComponentRender/components/PageContext";
import validateObjects from "../../utils/ValidateObject";
import { CATCHALL_DEFAULT_PROPS } from "./schema";
import styles from "./Catchall.module.css";

const Catchall = props => {
  const { props: catchallProps } = props;
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const { isMobile } = usePageContext();

  const {
    catchallTitle,
    catchallList,
    description,
    disableAnimations,
    subtitle,
    title,
    isOneColumnOnMobile
  } = validateObjects(catchallProps, CATCHALL_DEFAULT_PROPS);

  const { titleAlignment, titleFontColor, titleFontSize, titleFontSizeMobile } =
    title;

  const {
    descriptionAlignment,
    descriptionFontColor,
    descriptionFontSize,
    descriptionFontSizeMobile
  } = description;

  const {
    catchallTitleText,
    catchallTitleAlignment,
    catchallTitleFontColor,
    catchallTitleFontSize,
    catchallTitleFontSizeMobile
  } = catchallTitle;

  const {
    subtitleAlignment,
    subtitleFontColor,
    subtitleFontSize,
    subtitleFontSizeMobile
  } = subtitle;

  const catchallTitleStyles = {
    textAlign: catchallTitleAlignment,
    color: catchallTitleFontColor,
    fontSize: isMobile ? catchallTitleFontSizeMobile : catchallTitleFontSize,
    opacity: disableAnimations ? 1 : 0,
    transform: disableAnimations ? "translateY(0)" : "translateY(20px)"
  };

  const catchallListContainerStyles = {
    gridTemplateColumns: isMobile
      ? isOneColumnOnMobile
        ? "1fr"
        : "1fr 1fr"
      : `repeat(${catchallList.length}, 1fr)`
  };

  const catchallItemTitleStyles = {
    textAlign: titleAlignment,
    color: titleFontColor,
    fontSize: isMobile
      ? titleFontSizeMobile
      : window.innerWidth >= 1026 && window.innerWidth <= 1380
      ? "60px"
      : titleFontSize
  };

  const catchallItemSubtitleStyles = {
    textAlign: subtitleAlignment,
    color: subtitleFontColor,
    fontSize: isMobile ? subtitleFontSizeMobile : subtitleFontSize
  };

  const catchallItemDescriptionStyles = {
    textAlign: descriptionAlignment,
    color: descriptionFontColor,
    fontSize: isMobile ? descriptionFontSizeMobile : descriptionFontSize
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
      threshold: isMobile ? 0.2 : 0.5
    };

    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerReference) observer.observe(containerReference);

    return () => {
      if (containerReference) observer.unobserve(containerReference);
    };
  }, [containerRef, isMobile]);

  return (
    <div className={styles.container} ref={containerRef}>
      {!!catchallTitleText && (
        <h2
          className={`${styles["catchall-title"]} ${
            isVisible && !disableAnimations ? styles["enter-animation"] : ""
          }`}
          dangerouslySetInnerHTML={{ __html: catchallTitleText }}
          style={catchallTitleStyles}
        />
      )}
      {!!catchallList.length && (
        <div
          className={styles["catchall-container"]}
          style={catchallListContainerStyles}
        >
          {catchallList.map((item, index) => {
            const {
              useIcon,
              titleText,
              subtitleText,
              descriptionText,
              catchallIcon
            } = item;

            const catchallItemStyle = {
              transitionDelay: `${index * 0.1 + 0.2}s`,
              opacity: disableAnimations ? 1 : 0,
              maxWidth: !isMobile
                ? "100%"
                : isOneColumnOnMobile
                ? "100%"
                : "325px",
              transform: disableAnimations
                ? "translateY(0)"
                : "translateY(20px)"
            };

            return (
              <div
                className={`${styles["catchall-item"]} ${
                  isVisible && !disableAnimations
                    ? styles["enter-animation"]
                    : ""
                }`}
                key={index}
                style={catchallItemStyle}
              >
                {useIcon ? (
                  <img
                    src={catchallIcon}
                    alt={catchallIcon}
                    className={styles["catchall-icon"]}
                  />
                ) : (
                  <h3
                    className={styles["catchall-item-title"]}
                    dangerouslySetInnerHTML={{ __html: titleText }}
                    style={catchallItemTitleStyles}
                  />
                )}
                <p
                  className={styles["catchall-item-subtitle"]}
                  dangerouslySetInnerHTML={{ __html: subtitleText }}
                  style={catchallItemSubtitleStyles}
                />
                <p
                  className={styles["catchall-item-description"]}
                  dangerouslySetInnerHTML={{ __html: descriptionText }}
                  style={catchallItemDescriptionStyles}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Catchall;
