export const SIMPLE_TITLE_AND_DESCRIPTION_DEFAULT_PROPS = {
  disableAnimations: false,
  componentIsMiddleOfPage: false,
  showComponentSideBySide: false,
  title: {
    titleText: "",
    titleAlignment: "start",
    titleFontColor: "#001428",
    titleFontSize: "44px",
    titleFontSizeMobile: "32px"
  },
  subtitle: {
    subtitleText: "",
    subtitleAlignment: "start",
    subtitleFontColor: "#001428",
    subtitleFontSize: "20px",
    subtitleFontSizeMobile: "14px"
  },
  description: {
    descriptionText: "",
    descriptionAlignment: "start",
    descriptionFontColor: "#001428",
    descriptionFontSize: "15px",
    descriptionFontSizeMobile: "15px"
  }
};

export const SCHEMA_SIMPLE_TITLE_AND_DESCRIPTION = {
  title: "Simple Title and Description",
  type: "object",
  properties: {
    disableAnimations: {
      type: "boolean",
      title: "Disable Animations?",
      default: false
    },
    componentIsMiddleOfPage: {
      type: "boolean",
      title: "Component is Middle of Page?",
      default: false
    },
    showComponentSideBySide: {
      type: "boolean",
      title: "Show Component Side by Side?",
      default: false
    },
    title: {
      type: "object",
      properties: {
        titleText: {
          type: "string",
          title: "Title Text"
        },
        titleAlignment: {
          type: "string",
          title: "Title Alignment",
          enum: ["start", "center", "end"],
          enumNames: ["Left", "Center", "Right"]
        },
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
    subtitle: {
      type: "object",
      properties: {
        subtitleText: {
          type: "string",
          title: "subtitle Text"
        },
        subtitleAlignment: {
          type: "string",
          title: "subtitle Alignment",
          enum: ["start", "center", "end"],
          enumNames: ["Left", "Center", "Right"]
        },
        subtitleFontColor: {
          type: "string",
          title: "subtitle Font Color",
          widget: {
            "ui:widget": "color"
          }
        },
        subtitleFontSize: {
          type: "string",
          title: "subtitle Font Size"
        },
        subtitleFontSizeMobile: {
          type: "string",
          title: "subtitle Font Size (Mobile)"
        }
      }
    },
    description: {
      type: "object",
      properties: {
        descriptionText: {
          type: "string",
          title: "Description Text"
        },
        descriptionAlignment: {
          type: "string",
          title: "Description Alignment",
          enum: ["start", "center", "end"],
          enumNames: ["Left", "Center", "Right"]
        },
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
    }
  }
};
