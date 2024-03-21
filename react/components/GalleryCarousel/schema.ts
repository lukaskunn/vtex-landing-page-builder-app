export const GALLERY_CAROUSEL_DEFAULT_PROPS = {
  backgroundColor: "#FFFFFF",
  disableAnimations: false,
  componentIsFullWidth: false,
  textColor: "#001428",
  headline: "DUIS AUTE IRURE DOLOR IN",
  headlineFontSize: "40px",
  headlineFontSizeMobile: "20px",
  slideToShowInDesktop: 5,
  slideToShowInWide: 3,
  slideToShowInUltraWide: 7,
  gallery: [
    {
      imageUrl: "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      imageUrlMobile: "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      videoUrl: "",
      videoUrlMobile: ""
    },
    {
      imageUrl: "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      imageUrlMobile: "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      videoUrl: "",
      videoUrlMobile: ""
    },
    {
      imageUrl: "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      imageUrlMobile: "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      videoUrl: "",
      videoUrlMobile: ""
    },
    {
      imageUrl: "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      imageUrlMobile: "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
      videoUrl: "",
      videoUrlMobile: ""
    }
  ]
};

export const SCHEMA_GALLERY_CAROUSEL = {
  type: "object",
  name: "gallery_carousel",
  title: "Gallery Carousel",
  properties: {
    backgroundColor: {
      title: "Background color",
      type: "string",
      default: "#FFFFFF",
      ui: {
        widget: "colorPicker"
      }
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
    textColor: {
      title: "Text color",
      type: "string",
      default: "#000000",
      ui: {
        widget: "colorPicker"
      }
    },
    headline: {
      title: "Headline",
      type: "string",
      default: "Design headline section goes here",
      description: "Headline of the component"
    },
    headlineFontSize: {
      title: "Headline font size",
      type: "string",
      default: 20
    },
    headlineFontSizeMobile: {
      title: "Headline font size mobile",
      type: "string",
      default: 20
    },
    slideToShowInDesktop: {
      title: "slide to show in desktop",
      type: "number"
    },
    slideToShowInWide: {
      title: "slide to show in wide screen",
      type: "number"
    },
    slideToShowInUltraWide: {
      title: "slide to show in ultra wide screen",
      type: "number"
    },
    gallery: {
      title: "Gallery",
      type: "array",
      items: {
        title: "Item",
        type: "object",
        properties: {
          imageUrl: {
            title: "Image Url",
            type: "string",
            ui: {
              widget: "imageUpload"
            }
          },
          imageUrlMobile: {
            title: "Image Url Mobile",
            type: "string",
            ui: {
              widget: "imageUpload"
            }
          },
          videoUrl: {
            title: "Video Url",
            type: "string"
          },
          videoUrlMobile: {
            title: "Video Url Mobile",
            type: "string"
          }
        }
      }
    }
  }
};
