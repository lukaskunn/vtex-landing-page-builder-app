export const CATCHALL_SLIDE_DEFAULT_PROPS = {
  componentIsMiddleOfPage: false,
  disableAnimations: false,
  componentIsFullWidth: false,
  fontColor: "#000000",
  title: {
    titleText: "Learn More",
    titleFontSize: "40px",
    titleFontSizeMobile: "20px",
    titleAlignment: "start",
    titleBold: false,
    titleItalic: false,
    titleUnderline: false,
    titleUppercase: true
  },
  itemTitle: {
    itemTitleFontSize: "18px",
    itemTitleFontSizeMobile: "16px",
    itemTitleAlignment: "start",
    itemTitleBold: true,
    itemTitleItalic: false,
    itemTitleUnderline: false,
    itemTitleUppercase: false
  },
  description: {
    descriptionFontSize: "15px",
    descriptionFontSizeMobile: "15px",
    descriptionAlignment: "start"
  },
  learnMore: {
    learnMoreFontSize: "15px",
    learnMoreFontSizeMobile: "15px",
    learnMoreBold: true,
    learnMoreItalic: false,
    learnMoreUnderline: true,
    learnMoreUppercase: false
  },
  catchallList: [
    {
      itemHasTitle: true,
      itemTitle: "Loren Ipsun",
      itemText:
        "Lorem ipsum dolor sit amet, consectetur amet, adipiscing ipsum dolor sit amet, consectetur amet",
      itemHasLink: true,
      itemLink: "/",
      openLinkInNewTab: false,
      linkText: "learn More",
      imageSrc:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      imageAlt: "default image"
    },
    {
      itemHasTitle: true,
      itemTitle: "Loren Ipsun",
      itemText:
        "Lorem ipsum dolor sit amet, consectetur amet, adipiscing ipsum dolor sit amet, consectetur amet",
      itemHasLink: true,
      itemLink: "/",
      openLinkInNewTab: false,
      linkText: "learn More",
      imageSrc:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      imageAlt: "default image"
    },
    {
      itemHasTitle: true,
      itemTitle: "Loren Ipsun",
      itemText:
        "Lorem ipsum dolor sit amet, consectetur amet, adipiscing ipsum dolor sit amet, consectetur amet",
      itemHasLink: true,
      itemLink: "/",
      openLinkInNewTab: false,
      linkText: "learn More",
      imageSrc:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      imageAlt: "default image"
    },
    {
      itemHasTitle: true,
      itemTitle: "Loren Ipsun",
      itemText:
        "Lorem ipsum dolor sit amet, consectetur amet, adipiscing ipsum dolor sit amet, consectetur amet",
      itemHasLink: true,
      itemLink: "/",
      openLinkInNewTab: false,
      linkText: "learn More",
      imageSrc:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      imageAlt: "default image"
    }
  ]
};

export const SCHEMA_CATCHALL_SLIDE = {
  title: "Catchall Slide Component",
  type: "object",
  properties: {
    componentIsMiddleOfPage: {
      type: "boolean",
      title: "Component is Middle of Page?",
      default: false
    },
    disableAnimations: {
      type: "boolean",
      title: "Disable Animations?",
      default: false
    },
    componentIsFullWidth: {
      type: "boolean",
      title: "Component is Full Width?",
      default: false
    },
    fontColor: {
      type: "string",
      title: "Font Color",
      widget: {
        "ui:widget": "color"
      }
    },
    title: {
      type: "object",
      title: "Title props",
      properties: {
        titleText: {
          type: "string",
          title: "Title text"
        },
        titleFontSize: {
          type: "string",
          title: "Title size"
        },
        titleFontSizeMobile: {
          type: "string",
          title: "Title size (mobile)"
        },
        titleAlignment: {
          type: "string",
          title: "Title alignment",
          enum: ["start", "center", "end"],
          enumNames: ["Left", "Center", "Right"]
        },
        titleBold: {
          type: "boolean",
          title: "Bold title?",
          default: false
        },
        titleItalic: {
          type: "boolean",
          title: "Italic title?",
          default: false
        },
        titleUnderline: {
          type: "boolean",
          title: "Underline title?",
          default: false
        },
        titleUppercase: {
          type: "boolean",
          title: "Uppercase title?",
          default: false
        }
      }
    },
    itemTitle: {
      type: "object",
      title: "Title props",
      properties: {
        itemTitleFontSize: {
          type: "string",
          title: "Item Title size"
        },
        itemTitleFontSizeMobile: {
          type: "string",
          title: "Item Title size (mobile)"
        },
        itemTitleAlignment: {
          type: "string",
          title: "Item Title alignment",
          enum: ["start", "center", "end"],
          enumNames: ["Left", "Center", "Right"]
        },
        itemTitleBold: {
          type: "boolean",
          title: "Bold Item Title?",
          default: false
        },
        itemTitleItalic: {
          type: "boolean",
          title: "Italic Item Title?",
          default: false
        },
        itemTitleUnderline: {
          type: "boolean",
          title: "Underline Item Title?",
          default: false
        },
        itemTitleUppercase: {
          type: "boolean",
          title: "Uppercase Item Title?",
          default: false
        }
      }
    },
    description: {
      type: "object",
      title: "Description props",
      properties: {
        descriptionFontSize: {
          type: "string",
          title: "Description size"
        },
        descriptionFontSizeMobile: {
          type: "string",
          title: "Description size (mobile)"
        },
        descriptionAlignment: {
          type: "string",
          title: "Description alignment",
          enum: ["start", "center", "end"],
          enumNames: ["Left", "Center", "Right"]
        }
      }
    },
    learnMore: {
      type: "object",
      title: "Learn More props",
      properties: {
        learnMoreFontSize: {
          type: "string",
          title: "Learn More size"
        },
        learnMoreFontSizeMobile: {
          type: "string",
          title: "Learn More size (mobile)"
        },
        learnMoreBold: {
          type: "boolean",
          title: "Bold Learn More?",
          default: false
        },
        learnMoreItalic: {
          type: "boolean",
          title: "Italic Learn More?",
          default: false
        },
        learnMoreUnderline: {
          type: "boolean",
          title: "Underline Learn More?",
          default: false
        },
        learnMoreUppercase: {
          type: "boolean",
          title: "Uppercase Learn More?",
          default: false
        }
      }
    },
    catchallList: {
      title: "Catchall Slide List",
      description: "Define the Catchall Slide list items",
      type: "array",
      items: {
        title: "Breadcrumb List Item",
        type: "object",
        properties: {
          __editorItemTitle: {
            isLayout: false,
            title: "Site editor item identification",
            type: "string"
          },
          itemHasTitle: {
            type: "boolean",
            title: "Item has Title?",
            default: false
          },
          itemTitle: {
            type: "string",
            title: "Item Title"
          },
          itemText: {
            type: "string",
            title: "Item Text"
          },
          itemHasLink: {
            type: "boolean",
            title: "Item has Link?",
            default: false
          },
          itemLink: {
            type: "string",
            title: "Item Link"
          },
          openLinkInNewTab: {
            type: "boolean",
            title: "Open Link in New Tab?",
            default: false
          },
          linkText: {
            type: "string",
            title: "Link Text"
          },
          imageSrc: {
            type: "string",
            title: "Image Src",
            ui: {
              "ui:widget": "image-uploader"
            }
          },
          imageAlt: {
            type: "string",
            title: "Image Alt"
          }
        }
      }
    }
  }
};
