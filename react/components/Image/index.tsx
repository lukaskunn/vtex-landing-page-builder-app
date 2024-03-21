import React, { useEffect } from "react";

import { usePageContext } from "../ComponentRender/components/PageContext";
import validateObjects from "../../utils/ValidateObject";
import { IMAGE_DEFAULT_PROPS } from "./schema";
import styles from "./Image.module.css";

const Image = props => {
  const { isMobile, device } = usePageContext();
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef(null);
  const { props: imageProps } = props;
  const { image, disableAnimations, imageIsFullWidth, removeMargin } =
    validateObjects(imageProps, IMAGE_DEFAULT_PROPS);

  const { imageSrc, imageSrcSmallDesk, imageSrcMobile, imageAlt } = image;
  const [currentImage, setCurrentImage] = React.useState(imageSrc);

  const imageContainerStyle = {
    width: imageIsFullWidth ? "100%" : "100vw",
    padding: removeMargin ? "0px" : "20px"
  };

  const imageStyle = {
    opacity: disableAnimations ? 1 : 0,
    transform: disableAnimations ? "translateY(0)" : "translateY(20px)"
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
      threshold: 0.1
    };

    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerReference) observer.observe(containerReference);

    return () => {
      if (containerReference) observer.unobserve(containerReference);
    };
  }, [containerRef, isMobile]);

  useEffect(() => {
    const handleCurrentImage = () => {
      if (device === "mobile") {
        setCurrentImage(imageSrcMobile);
      } else if (device === "desktop" || device === "ultraWide") {
        setCurrentImage(imageSrc);
      } else {
        setCurrentImage(imageSrcSmallDesk);
      }
    };

    handleCurrentImage();
  }, [device, imageSrc, imageSrcMobile, imageSrcSmallDesk]);

  return (
    <div
      className={styles.container}
      style={imageContainerStyle}
      ref={containerRef}
    >
      <img
        src={currentImage}
        alt={imageAlt}
        style={imageStyle}
        className={`${styles.image} ${
          isVisible ? `${styles["enter-animation"]}` : ""
        }`}
      />
    </div>
  );
};

export default Image;
