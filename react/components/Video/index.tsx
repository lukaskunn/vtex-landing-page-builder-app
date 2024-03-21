import React, { useEffect } from "react";
import ReactPlayer from "react-player";

import { usePageContext } from "../ComponentRender/components/PageContext";
import validateObjects from "../../utils/ValidateObject";
import { VIDEO_DEFAULT_PROPS } from "./schema";
import styles from "./Video.module.css";

const Video = props => {
  const { props: videoProps } = props;
  const { videoIsFullWidth, video } = validateObjects(
    videoProps,
    VIDEO_DEFAULT_PROPS
  );

  const {
    videoSrc,
    videoSrcSmallDesktop,
    videoSrcMobile,
    videoAspectRatio,
    loop,
    autoplay,
    showControls,
    muted
  } = video;

  const { device } = usePageContext();
  const [currentVideo, setCurrentVideo] = React.useState(videoSrc);

  const containerStyle = {
    maxWidth: videoIsFullWidth ? "100%" : "1536px",
    padding: videoIsFullWidth ? "0" : "80px 0px"
  };

  const videoStyle = {
    aspectRatio: videoAspectRatio
  };

  useEffect(() => {
    const handleCurrentImage = () => {
      if (device === "mobile") {
        setCurrentVideo(videoSrcMobile);
      } else if (device === "tablet") {
        setCurrentVideo(videoSrcSmallDesktop);
      } else if (device === "desktop" || device === "ultraWide") {
        setCurrentVideo(videoSrc);
      } else {
        setCurrentVideo(videoSrc);
      }
    };

    handleCurrentImage();
  }, [device, videoSrc, videoSrcSmallDesktop, videoSrcMobile]);

  return (
    <div className={styles.container} style={containerStyle}>
      <ReactPlayer
        className={styles.video}
        controls={showControls}
        style={videoStyle}
        url={currentVideo}
        playing={autoplay}
        loop={loop}
        muted={muted}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Video;
