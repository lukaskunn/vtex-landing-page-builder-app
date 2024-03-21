import React, { useEffect } from "react";

import { usePageContext } from "../ComponentRender/components/PageContext";
import validateObjects from "../../utils/ValidateObject";
import { GRID_GALLERY_DEFAULT_PROPS } from "./schema";
import styles from "./GridGallery.module.css";

const GridGallery = props => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { isMobile } = usePageContext();
  const containerRef = React.useRef(null);
  const { props: gridGalleryProps } = props;
  const { disableAnimations, rowsList } = validateObjects(
    gridGalleryProps,
    GRID_GALLERY_DEFAULT_PROPS
  );

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
      threshold: 0.15
    };

    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerReference) observer.observe(containerReference);

    return () => {
      if (containerReference) observer.unobserve(containerReference);
    };
  }, [containerRef, isMobile]);

  return (
    <div className={styles.container} ref={containerRef}>
      {rowsList.map((row, index) => {
        const { imagesList } = row;

        const rowContainerStyles = {
          gridTemplateColumns: `repeat(${imagesList.length}, 1fr)`
        };

        return (
          <div
            key={index}
            className={styles["row-container"]}
            style={rowContainerStyles}
          >
            {imagesList.map((image, imageIndex) => {
              const { imageSrc, imageAlt } = image;
              const imageStyle = {
                transitionDelay: `${parseInt(index, 10) * 0.1}s`,
                opacity: disableAnimations ? 1 : 0,
                transform: disableAnimations
                  ? "translateY(0)"
                  : "translateY(20px)"
              };

              return (
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  key={imageIndex}
                  style={imageStyle}
                  className={`${styles["image-item"]} ${
                    isVisible ? styles["enter-animation"] : ""
                  }`}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GridGallery;
