import React, { useEffect } from "react";

import { usePageContext } from "../ComponentRender/components/PageContext";
import styles from "./Breadcrumb.module.css";
import validateObjects from "../../utils/ValidateObject";
import { BREADCRUMB_DEFAULT_PROPS } from "./schema";

const BreadCrumb = props => {
  const { isMobile } = usePageContext();
  const containerRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const { props: breadcrumbProps } = props;
  const {
    breadcrumbList,
    componentAlignment,
    fontColor,
    fontSize,
    fontSizeMobile,
    disableAnimations,
    componentIsFullWidth
  } = validateObjects(breadcrumbProps, BREADCRUMB_DEFAULT_PROPS);

  const breadcrumbStyles = {
    fontSize: isMobile ? fontSizeMobile : fontSize,
    maxWidth: componentIsFullWidth
      ? "100%"
      : "1536px",
    justifyContent: componentAlignment
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
    <div
      className={styles.container}
      style={breadcrumbStyles}
      ref={containerRef}
    >
      <span className={styles["breadcrumb-list"]}>
        {breadcrumbList.map((item, index) => {
          const { itemText, itemLink, openLinkInNewTab, isBold, itemHasLink } =
            item;

          const itemStyles = {
            color: fontColor,
            fontWeight: isBold ? "bold" : "normal",
            transitionDelay: `${index * 0.1 + 0.2}s`,
            opacity: disableAnimations ? 1 : 0,
            transform: disableAnimations ? "translateY(0)" : "translateY(20px)"
          };

          const itemDividerStyles = {
            transitionDelay: `${index * 0.1 + 0.2}s`,
            opacity: disableAnimations ? 1 : 0,
            transform: disableAnimations ? "translateY(0)" : "translateY(20px)"
          };

          return (
            <div key={index}>
              {itemHasLink ? (
                // eslint-disable-next-line react/jsx-no-target-blank
                <a
                  className={`${styles["breadcrumb-item"]} ${
                    isVisible && !disableAnimations
                      ? styles["enter-animation"]
                      : ""
                  }`}
                  style={itemStyles}
                  href={itemLink}
                  target={openLinkInNewTab ? "_blank" : "_self"}
                  rel={openLinkInNewTab ? "noreferrer" : ""}
                >
                  {itemText}
                </a>
              ) : (
                <p
                  className={`${styles["breadcrumb-item"]} ${
                    isVisible && !disableAnimations
                      ? styles["enter-animation"]
                      : ""
                  }`}
                  style={itemStyles}
                >
                  {itemText}
                </p>
              )}
              {index < breadcrumbList.length - 1 && (
                <span
                  className={`${styles["breadcrumb-item-divider"]} ${
                    isVisible && !disableAnimations
                      ? styles["enter-animation"]
                      : ""
                  }`}
                  style={itemDividerStyles}
                >
                  /
                </span>
              )}
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default BreadCrumb;
