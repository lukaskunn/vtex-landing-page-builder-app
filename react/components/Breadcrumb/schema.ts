export const BREADCRUMB_DEFAULT_PROPS = {
  disableAnimations: false,
  componentIsFullWidth: false,
  componentAlignment: "start",
  fontColor: "#001428",
  fontSize: "10px",
  fontSizeMobile: "10px",
  breadcrumbList: [
    {
      itemText: "Home",
      itemHasLink: true,
      itemLink: "/",
      openLinkInNewTab: false,
      isBold: false
    },
    {
      itemText: "motoverse",
      itemHasLink: true,
      itemLink: "/",
      openLinkInNewTab: false,
      isBold: false
    },
    {
      itemText: "Breadcrumb",
      itemHasLink: true,
      itemLink: "/",
      openLinkInNewTab: false,
      isBold: true
    }
  ]
};

export const SCHEMA_BREADCRUMB = {
  title: "Breadcrumb Component",
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
    componentAlignment: {
      type: "string",
      title: "Component Alignment",
      enum: ["start", "center", "end"],
      enumNames: ["Left", "Center", "Right"]
    },
    fontColor: {
      type: "string",
      title: "Font Color",
      widget: {
        "ui:widget": "color"
      }
    },
    fontSize: {
      type: "string",
      title: "Font Size"
    },
    fontSizeMobile: {
      type: "string",
      title: "Font Size (Mobile)"
    },
    breadcrumbList: {
      title: "Breadcrumb List",
      description: "Define the Breadcrumb list items",
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
          isBold: {
            type: "boolean",
            title: "Bold?",
            default: false
          }
        }
      }
    }
  }
};
