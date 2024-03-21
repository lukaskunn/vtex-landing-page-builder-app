import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";

import { usePageContext } from "../ComponentRender/components/PageContext";
import { GALLERY_CAROUSEL_DEFAULT_PROPS } from "./schema";
import validateObjects from "../../utils/ValidateObject";
import styles from "./GalleryCarousel.module.css";
import "./slick-theme.global.css";
import "./slick.global.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <img
        src="https://motorolaimgrepo.vteximg.com.br/arquivos/new-next-caret-icon.svg"
        alt="prev-caret"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <img
        src="https://motorolaimgrepo.vteximg.com.br/arquivos/new-prev-caret-icon.svg"
        alt="prev-caret"
      />
    </div>
  );
}

function GalleryCarousel(props) {
  const [galleryList, setGalleryList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = React.useRef(null);
  const { isMobile, device } = usePageContext();
  const { props: galleryProps } = props;
  const {
    gallery,
    headline,
    headLineAlignment,
    textColor,
    headlineFontSize,
    headlineFontSizeMobile,
    componentIsFullWidth,
    slideToShowInDesktop,
    slideToShowInWide,
    slideToShowInUltraWide,
    disableAnimations
  } = validateObjects(galleryProps, GALLERY_CAROUSEL_DEFAULT_PROPS);

  /**
   * Calculates the number of slides to show based on the device screen size.
   * @returns An object containing the number of slides to show for each device size.
   */
  const slidesToShowByDevice = useMemo(() => {
    return {
      ultraWide: slideToShowInUltraWide || 7,
      desktop: slideToShowInDesktop || 5,
      smallDesktop: slideToShowInWide || 3,
      tablet: slideToShowInWide || 3,
      mobile: 1
    };
  }, [slideToShowInUltraWide, slideToShowInDesktop, slideToShowInWide]);

  const settings = {
    dots: false,
    centerMode: true,
    centerPadding: "10px",
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShowByDevice[device],
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const headlinePropsStyles = {
    textAlign: headLineAlignment,
    color: textColor,
    fontSize: isMobile ? headlineFontSizeMobile : headlineFontSize,
    maxWidth: componentIsFullWidth ? "none" : "1536px",
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
      threshold: 0.2
    };

    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerReference) observer.observe(containerReference);

    return () => {
      if (containerReference) observer.unobserve(containerReference);
    };
  }, [containerRef, isMobile]);

  /**
   * useEffect hook that handles the gallery list based on the current device and gallery length.
   * If the gallery length is less than the number of slides to show by device, it duplicates the gallery.
   * Otherwise, it sets the gallery list to the original gallery.
   */
  useEffect(() => {
    const handleGalleryList = () => {
      if (gallery.length <= slidesToShowByDevice[device]) {
        setGalleryList([...gallery, ...gallery]);
      } else {
        setGalleryList(gallery);
      }
    };

    handleGalleryList();
  }, [gallery, device, slidesToShowByDevice]);

  /**
   * Renders a gallery carousel component.
   *
   * @component
   * @param {Object} props - The component props.
   * @param {string} props.headline - The headline to display above the carousel.
   * @param {boolean} props.isVisible - Indicates whether the carousel is visible.
   * @param {boolean} props.disableAnimations - Indicates whether animations are disabled.
   * @param {Array} props.galleryList - The list of gallery items to display in the carousel.
   * @returns {JSX.Element} The rendered gallery carousel component.
   */
  return (
    <div className={styles.container} ref={containerRef}>
      {!!headline && (
        <h2
          className={`${styles["gallery-headline"]} ${
            isVisible ? styles["enter-animation"] : ""
          }`}
          dangerouslySetInnerHTML={{ __html: headline }}
          style={headlinePropsStyles}
        />
      )}
      <Slider {...settings}>
        {galleryList.map((item, index) => {
          const imageContainerStyles = {
            opacity: disableAnimations ? 1 : 0
          };

          return (
            <div key={index} className={styles["image-container"]}>
              <img
                style={imageContainerStyles}
                src={item.imageUrl}
                alt=""
                className={`${styles["carousel-image"]} ${
                  isVisible ? styles["enter-animation"] : ""
                }`}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default GalleryCarousel;
