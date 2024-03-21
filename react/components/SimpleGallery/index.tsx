import React, { useEffect } from "react";

import { usePageContext } from "../ComponentRender/components/PageContext";
import validateObjects from "../../utils/ValidateObject";
import { SIMPLE_GALLERY_DEFAULT_PROPS } from "./schema";
import GalleryItem from "./components/GalleryItem";
import styles from "./SimpleGallery.module.css";

const SimpleGallery = props => {
  const containerRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const { isMobile } = usePageContext();
  const { props: componentProps } = props;
  const {
    componentIsFullWidth,
    disableAnimations,
    galleryList,
    componentIsScrollableMobile
  } = validateObjects(componentProps, SIMPLE_GALLERY_DEFAULT_PROPS);

  const galleryStyles = {
    display: isMobile && componentIsScrollableMobile ? "flex" : "grid",
    maxWidth: componentIsFullWidth ? "100%" : "1536px",
    gridTemplateColumns: isMobile
      ? "1fr"
      : `repeat(${galleryList.length}, 1fr)`,
    gridTemplateRows: isMobile ? `repeat(${galleryList.length}, 1fr)` : "1fr",
    padding: componentIsFullWidth
      ? "0"
      : isMobile && componentIsScrollableMobile
      ? "20px 0"
      : "60px 20px"
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

  return (
    <div className={styles.container} style={galleryStyles} ref={containerRef}>
      {galleryList.map((item, index) => {
        return (
          <GalleryItem
            item={item}
            isVisible={isVisible}
            disableAnimations={disableAnimations}
            isMobile={isMobile}
            componentIsFullWidth={componentIsFullWidth}
            key={index}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default SimpleGallery;
