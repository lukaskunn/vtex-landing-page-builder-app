export const CATCHALL_DEFAULT_PROPS = {
  disableAnimations: false,
  isOneColumnOnMobile: false,
  catchallTitle: {
    catchallTitleText: "EXCEPTEUR SINT OCCAECAT",
    catchallTitleAlignment: "start",
    catchallTitleFontColor: "#001428",
    catchallTitleFontSize: "40px",
    catchallTitleFontSizeMobile: "24px"
  },
  title: {
    titleAlignment: "start",
    titleFontColor: "#001428",
    titleFontSize: "90px",
    titleFontSizeMobile: "60px"
  },
  subtitle: {
    subtitleAlignment: "start",
    subtitleFontColor: "#001428",
    subtitleFontSize: "25px",
    subtitleFontSizeMobile: "18px"
  },
  description: {
    descriptionAlignment: "start",
    descriptionFontColor: "#001428",
    descriptionFontSize: "15px",
    descriptionFontSizeMobile: "15px"
  },
  catchallList: [
    {
      useIcon: false,
      catchallIcon: "",
      titleText: "Stats",
      subtitleText: "commodo",
      descriptionText:
        "Duis aute irure reprehenderit in voluptate velit esse cillum doloreesse cillum esse reprehenderit"
    },
    {
      useIcon: false,
      catchallIcon: "",
      titleText: "50%",
      subtitleText: "consequat",
      descriptionText:
        "Duis aute irure reprehenderit in voluptate velit esse cillum doloreesse cillum esse reprehenderit"
    },
    {
      useIcon: false,
      catchallIcon: "",
      titleText: "35m",
      subtitleText: "commodo",
      descriptionText:
        "Duis aute irure reprehenderit in voluptate velit esse cillum doloreesse cillum esse reprehenderit"
    },
    {
      useIcon: false,
      catchallIcon: "",
      titleText: "102%",
      subtitleText: "consequat",
      descriptionText:
        "Duis aute irure reprehenderit in voluptate velit esse cillum doloreesse cillum esse reprehenderit"
    }
  ]
};

export const SCHEMA_CATCHALL = {
  title: "Catchall Component",
  type: "object",
  properties: {
    disableAnimations: {
      type: "boolean",
      title: "Disable Animations?",
      default: false
    },
    isOneColumnOnMobile: {
      type: "boolean",
      title: "Is One Column On Mobile?",
      default: false
    },
    catchallTitle: {
      type: "object",
      properties: {
        catchallTitleText: {
          type: "string",
          title: "Catchall Title Text"
        },
        catchallTitleAlignment: {
          type: "string",
          title: "Catchall Title Alignment",
          enum: ["start", "center", "end"],
          enumNames: ["Left", "Center", "Right"]
        },
        catchallTitleFontColor: {
          type: "string",
          title: "Catchall Title Font Color",
          widget: {
            "ui:widget": "color"
          }
        },
        catchallTitleFontSize: {
          type: "string",
          title: "Catchall Title Font Size"
        },
        catchallTitleFontSizeMobile: {
          type: "string",
          title: "Catchall Title Font Size (Mobile)"
        }
      }
    },
    title: {
      type: "object",
      properties: {
        titleAlignment: {
          type: "string",
          title: "Catchall Item Title Alignment",
          enum: ["start", "center", "end"],
          enumNames: ["Left", "Center", "Right"]
        },
        titleFontColor: {
          type: "string",
          title: "Catchall Item Title Font Color",
          widget: {
            "ui:widget": "color"
          }
        },
        titleFontSize: {
          type: "string",
          title: "Catchall Item Title Font Size"
        },
        titleFontSizeMobile: {
          type: "string",
          title: "Catchall Item Title Font Size (Mobile)"
        }
      }
    },
    subtitle: {
      type: "object",
      properties: {
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
    },
    catchallList: {
      minItems: 2,
      maxItems: 5,
      title: "Catchall List",
      description: "Define the catchall list items",
      type: "array",
      items: {
        title: "Catchall List Item",
        type: "object",
        properties: {
          __editorItemTitle: {
            isLayout: false,
            title: "Site editor item identification",
            type: "string"
          },
          useIcon: {
            type: "boolean",
            title: "Use Icon?",
            default: false
          },
          catchallIcon: {
            type: "string",
            title: "Catchall Icon",
            ui: {
              "ui:widget": "image-uploader"
            }
          },
          titleText: {
            type: "string",
            title: "Title Text"
          },
          subtitleText: {
            type: "string",
            title: "subtitle Text"
          },
          descriptionText: {
            type: "string",
            title: "Description Text"
          }
        }
      }
    }
  }
};
