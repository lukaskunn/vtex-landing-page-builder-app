/* eslint-disable */
import React, { useEffect } from "react";
import { usePageContext } from "../ComponentRender/components/PageContext";
import validateObjects from "../../utils/ValidateObject";
import { BANNER_DEFAULT_PROPS } from "./schema";
import styles from "./Banner.module.css";

const Banner = props => {
  const [currentImage, setCurrentImage] = React.useState("");
  const { isMobile, device } = usePageContext();
  const { props: bannerProps } = props;
  const { image, bannerIsFullWidth } = validateObjects(
    bannerProps,
    BANNER_DEFAULT_PROPS
  );
  const { imageSrc, imageSrcMobile, imageAlt, imageSrcSmallDesk } = image;

  useEffect(() => {
    const handleImageSrc = () => {
      if (device === "mobile") {
        setCurrentImage(imageSrcMobile);
      } else if (device === "smallDesktop" || device === "tablet") {
        setCurrentImage(imageSrcSmallDesk);
      } else {
        setCurrentImage(imageSrc);
      }
    };

    handleImageSrc();
  }, [device]);

  const containerStyle = {
    maxWidth: bannerIsFullWidth ? "100%" : "1380px",
    padding: isMobile && !bannerIsFullWidth ? "0 20px" : "0"
  };

  const imageStyle = {
    height: isMobile ? "auto" : "100%"
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <img
        src={currentImage}
        alt={imageAlt}
        className={styles["image-banner"]}
        style={imageStyle}
      />
    </div>
  );
};

export default Banner;
