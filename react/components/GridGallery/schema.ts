export const GRID_GALLERY_DEFAULT_PROPS = {
  disableAnimations: false,
  rowsList: [
    {
      imagesList: [
        {
          imageSrc:
            "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/edffded0-4eb2-4580-8f1b-983f479121ac___b32e02dbfa3ea4ee900593f04de3b4af.png",
          imageAlt: "default image"
        }
      ]
    },
    {
      imagesList: [
        {
          imageSrc:
            "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
          imageAlt: "default image"
        },
        {
          imageSrc:
            "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/cb694de5-3650-4ff1-837c-67cea2d72836___52b92827fa5d4fd92d48e476f8e404b6.png",
          imageAlt: "default image"
        }
      ]
    }
  ]
};

export const SCHEMA_GRID_GALLERY = {
  title: "Grid Gallery Component",
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
    rowsList: {
      title: "Grid Gallery rows List",
      description: "Define the Grid Gallery list items",
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
          imagesList: {
            title: "Grid Gallery rows List",
            description: "Define the Grid Gallery list items",
            type: "array",
            maxItems: 2,
            items: {
              title: "Breadcrumb List Item",
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
                  widget: {
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
      }
    }
  }
};
