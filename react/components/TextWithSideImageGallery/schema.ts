export const TEXT_WITH_SIDE_GALLERY_DEFAULT_PROPS = {
  disableAnimations: false,
  contentAlignment: "start",
  title: {
    titleFontSize: "40px",
    titleFontSizeMobile: "18px",
    titleFontColor: "#001428"
  },
  description: {
    descriptionFontSize: "15px",
    descriptionFontSizeMobile: "15px",
    descriptionFontColor: "#001428"
  },
  sideImage: {
    isSideImageFullWidth: false,
    sideImagePosition: "left"
  },
  galleryList: [
    {
      imageSrc:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      imageSrcMobile:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      imageAlt: "default image",
      descriptionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ",
      titleText: ""
    },
    {
      imageSrc:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      imageSrcMobile:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      imageAlt: "default image",
      descriptionText:
        "aliquip orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatris nisi ut aliquip.",
      titleText: ""
    },
    {
      imageSrc:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      imageSrcMobile:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      imageAlt: "default image",
      descriptionText:
        "aliquip orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatris nisi ut aliquip.",
      titleText: ""
    }
  ]
};

export const SCHEMA_TEXT_WITH_SIDE_GALLERY = {
  title: "Text with side Gallery",
  type: "object",
  properties: {
    disableAnimations: {
      type: "boolean",
      title: "Disable Animations?",
      default: false
    },
    contentAlignment: {
      type: "string",
      title: "Content Alignment",
      enum: ["start", "center", "end"],
      enumNames: ["Left", "Center", "Right"]
    },
    title: {
      type: "object",
      properties: {
        titleFontColor: {
          type: "string",
          title: "Title Font Color",
          widget: {
            "ui:widget": "color"
          }
        },
        titleFontSize: {
          type: "string",
          title: "Title Font Size"
        },
        titleFontSizeMobile: {
          type: "string",
          title: "Title Font Size (Mobile)"
        }
      }
    },
    description: {
      type: "object",
      properties: {
        descriptionFontColor: {
          type: "string",
          title: "Description Font Color",
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
        sideImagePosition: {
          type: "string",
          title: "Image Position",
          enum: ["left", "right"],
          enumNames: ["Left", "Right"]
        }
      }
    },
    galleryList: {
      title: "Gallery List",
      description: "Define the Gallery content list items",
      minItems: 2,
      type: "array",
      items: {
        title: "Gallery content List Item",
        type: "object",
        properties: {
          __editorItemTitle: {
            isLayout: false,
            title: "Site editor item identification",
            type: "string"
          },
          imageSrc: {
            type: "string",
            title: "Image Source",
            ui: {
              "ui:widget": "image-uploader"
            }
          },
          imageSrcMobile: {
            type: "string",
            title: "Image Source (Mobile)",
            ui: {
              "ui:widget": "image-uploader"
            }
          },
          imageAlt: {
            type: "string",
            title: "Image Alt"
          },
          descriptionText: {
            type: "string",
            title: "Description Text"
          },
          titleText: {
            type: "string",
            title: "Description Text"
          }
        }
      }
    }
  }
};
