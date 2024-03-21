export const SIMPLE_GALLERY_DEFAULT_PROPS = {
  disableAnimations: false,
  componentIsFullWidth: false,
  componentIsScrollableMobile: false,
  galleryList: [
    {
      itemHasLink: false,
      itemLink: "",
      openLinkInNewTab: false,
      imageSrc:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/edffded0-4eb2-4580-8f1b-983f479121ac___b32e02dbfa3ea4ee900593f04de3b4af.png",
      imageSrcMobile:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/18f927d1-e0cb-4803-98bd-146aa90e91aa___671d12d38468c9bf4ebee31798189648.png",
      imageAlt: "default image"
    },
    {
      itemHasLink: false,
      itemLink: "",
      openLinkInNewTab: false,
      imageSrc:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/edffded0-4eb2-4580-8f1b-983f479121ac___b32e02dbfa3ea4ee900593f04de3b4af.png",
      imageSrcMobile:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/18f927d1-e0cb-4803-98bd-146aa90e91aa___671d12d38468c9bf4ebee31798189648.png",
      imageAlt: "default image"
    },
    {
      itemHasLink: false,
      itemLink: "",
      openLinkInNewTab: false,
      imageSrc:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/edffded0-4eb2-4580-8f1b-983f479121ac___b32e02dbfa3ea4ee900593f04de3b4af.png",
      imageSrcMobile:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/18f927d1-e0cb-4803-98bd-146aa90e91aa___671d12d38468c9bf4ebee31798189648.png",
      imageAlt: "default image"
    },
    {
      itemHasLink: false,
      itemLink: "",
      openLinkInNewTab: false,
      imageSrc:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/edffded0-4eb2-4580-8f1b-983f479121ac___b32e02dbfa3ea4ee900593f04de3b4af.png",
      imageSrcMobile:
        "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/18f927d1-e0cb-4803-98bd-146aa90e91aa___671d12d38468c9bf4ebee31798189648.png",
      imageAlt: "default image"
    }
  ]
};

export const SCHEMA_SIMPLE_GALLERY = {
  title: "Simple Gallery Component",
  type: "object",
  properties: {
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
    componentIsScrollableMobile: {
      type: "boolean",
      title: "Component is horizontal scrollable on Mobile?",
      default: false
    },
    galleryList: {
      title: "Simple Gallery List",
      description: "Define the Simple Gallery list items",
      minItems: 2,
      maxItems: 4,
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
          }
        }
      }
    }
  }
};
