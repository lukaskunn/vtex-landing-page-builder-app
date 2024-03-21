export const TEXT_WITH_SIDE_IMAGE_DEFAULT_PROPS = {
  contentAlignment: "start",
  disableAnimations: false,
  title: {
    titleFontSize: "40px",
    titleFontSizeMobile: "18px",
    titleFontColor: "#001428",
    titleText: ""
  },
  description: {
    descriptionFontSize: "15px",
    descriptionFontSizeMobile: "15px",
    descriptionFontColor: "#001428",
    descriptionText:
      "Duis aute irure dolor in reprehenderit in orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  },
  learnMoreButton: {
    showLearnMoreButton: false,
    learnMoreButtonText: "Learn More",
    learnMoreButtonLink: "/",
    learnMoreButtonFontColor: "#001428",
    learnMoreButtonFontColorOnHover: "#fff",
    learnMoreButtonFontSize: "18px",
    learnMoreButtonFontSizeMobile: "16px",
    learnMoreButtonBackgroundColor: "#ffffff",
    learnMoreButtonBorderColor: "#001428",
    learnMoreButtonBackgroundColorOnHover: "#001428",
    learnMoreButtonBorderColorOnHover: "#fff"
  },
  sideImage: {
    isSideImageFullWidth: false,
    sideImageSrc:
      "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/edffded0-4eb2-4580-8f1b-983f479121ac___b32e02dbfa3ea4ee900593f04de3b4af.png",
    sideImageSrcMobile:
      "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/18f927d1-e0cb-4803-98bd-146aa90e91aa___671d12d38468c9bf4ebee31798189648.png",
    sideImageAlt: "default image",
    sideImagePosition: "right"
  }
};

export const SCHEMA_TEXT_WITH_SIDE_IMAGE = {
  title: "Text with side image",
  type: "object",
  properties: {
    disableAnimations: {
      type: "boolean",
      title: "Disable Animations?",
      default: TEXT_WITH_SIDE_IMAGE_DEFAULT_PROPS.disableAnimations
    },
    contentAlignment: {
      type: "string",
      title: "Content Alignment",
      enum: ["start", "center", "end"],
      enumNames: ["Left", "Center", "Right"],
      default: TEXT_WITH_SIDE_IMAGE_DEFAULT_PROPS.contentAlignment
    },
    title: {
      type: "object",
      properties: {
        titleText: {
          type: "string",
          default: TEXT_WITH_SIDE_IMAGE_DEFAULT_PROPS.title.titleText,
          title: "Title Text"
        },
        titleFontColor: {
          type: "string",
          default: TEXT_WITH_SIDE_IMAGE_DEFAULT_PROPS.title.titleFontColor,
          title: "Title Font Color",
          widget: {
            "ui:widget": "color"
          }
        },
        titleFontSize: {
          type: "string",
          default: TEXT_WITH_SIDE_IMAGE_DEFAULT_PROPS.title.titleFontSize,
          title: "Title Font Size"
        },
        titleFontSizeMobile: {
          type: "string",
          default: TEXT_WITH_SIDE_IMAGE_DEFAULT_PROPS.title.titleFontSizeMobile,
          title: "Title Font Size (Mobile)"
        }
      }
    },
    description: {
      type: "object",
      properties: {
        descriptionText: {
          type: "string",
          default:
            TEXT_WITH_SIDE_IMAGE_DEFAULT_PROPS.description.descriptionText,
          title: "Description Text"
        },
        descriptionFontColor: {
          type: "string",
          title: "Description Font Color",
          default:
            TEXT_WITH_SIDE_IMAGE_DEFAULT_PROPS.description.descriptionFontColor,
          widget: {
            "ui:widget": "color"
          }
        },
        descriptionFontSize: {
          type: "string",
          title: "Description Font Size"
        },
        descriptionFontSizeMobile: {
          type: "string",
          title: "Description Font Size (Mobile)"
        }
      }
    },
    learnMoreButton: {
      type: "object",
      properties: {
        showLearnMoreButton: {
          type: "boolean",
          title: "Show Learn More Button?",
          default: false
        },
        learnMoreButtonText: {
          type: "string",
          title: "Learn More Text"
        },
        learnMoreButtonLink: {
          type: "string",
          title: "Learn More Link"
        },
        learnMoreButtonFontColor: {
          type: "string",
          title: "Learn More Font Color",
          widget: {
            "ui:widget": "color"
          }
        },
        learnMoreButtonFontColorOnHover: {
          type: "string",
          title: "Learn More Font Color on Hover",
          widget: {
            "ui:widget": "color"
          }
        },
        learnMoreButtonFontSize: {
          type: "string",
          title: "Learn More Font Size"
        },
        learnMoreButtonFontSizeMobile: {
          type: "string",
          title: "Learn More Font Size (Mobile)"
        },
        learnMoreButtonBackgroundColor: {
          type: "string",
          title: "Learn More Background Color",
          widget: {
            "ui:widget": "color"
          }
        },
        learnMoreButtonBorderColor: {
          type: "string",
          title: "Learn More Border Color",
          widget: {
            "ui:widget": "color"
          }
        },
        learnMoreButtonBackgroundColorOnHover: {
          type: "string",
          title: "Learn More Background Color on Hover",
          widget: {
            "ui:widget": "color"
          }
        },
        learnMoreButtonBorderColorOnHover: {
          type: "string",
          title: "Learn More Border Color on Hover",
          widget: {
            "ui:widget": "color"
          }
        }
      }
    },
    sideImage: {
      type: "object",
      title: "Side Image",
      description: "Side Image description",
      properties: {
        isSideImageFullWidth: {
          type: "boolean",
          title: "Image is Full Width?",
          default: false
        },
        sideImageSrc: {
          type: "string",
          title: "Image URL",
          widget: {
            "ui:widget": "image-uploader"
          }
        },
        sideImageSrcMobile: {
          type: "string",
          title: "Image URL (Mobile)",
          widget: {
            "ui:widget": "image-uploader"
          }
        },
        sideImageAlt: {
          type: "string",
          title: "Image Alt Text"
        },
        sideImagePosition: {
          type: "string",
          title: "Image Position",
          enum: ["left", "right"],
          enumNames: ["Left", "Right"]
        }
      }
    }
  }
};
