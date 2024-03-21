export const VIDEO_DEFAULT_PROPS = {
  disableAnimations: false,
  videoIsFullWidth: false,
  video: {
    videoSrc: "https://www.youtube.com/watch?v=MPPCphBzD8E",
    videoSrcSmallDesk: "https://www.youtube.com/watch?v=MPPCphBzD8E",
    videoSrcMobile: "https://www.youtube.com/watch?v=MPPCphBzD8E",
    autoplay: true,
    loop: false,
    showControls: false,
    muted: true,
    videoAspectRatio: "16:9"
  }
};

export const SCHEMA_VIDEO = {
  title: "Simple Video",
  type: "object",
  properties: {
    showComponent: {
      type: "boolean",
      title: "Show Component?",
      description:
        "Show or hide this component. If you want to keep the component settings but not show it on the page, uncheck this box.",
      default: true
    },
    disableAnimations: {
      type: "boolean",
      title: "Disable Animations?",
      default: false
    },
    videoIsFullWidth: {
      type: "boolean",
      title: "Video is full width?",
      default: false
    },
    video: {
      type: "object",
      properties: {
        videoSrc: {
          type: "string",
          title: "video Source"
        },
        videoSrcSmallDesk: {
          type: "string",
          title: "video Source (Small Desktop)"
        },
        videoSrcMobile: {
          type: "string",
          title: "video Source (Mobile)"
        },
        autoplay: {
          type: "boolean",
          title: "Autoplay?",
          default: false
        },
        loop: {
          type: "boolean",
          title: "Loop?",
          default: false
        },
        showControls: {
          type: "boolean",
          title: "Show Controls?",
          default: false
        },
        muted: {
          type: "boolean",
          title: "Muted?",
          default: false
        },
        videoAspectRatio: {
          type: "string",
          title: "Video Aspect Ratio",
          enum: ["16/9", "4/3", "1/1", "3/4", "9/16", "21/9", "1/2", "2/1"]
        }
      }
    }
  }
};
