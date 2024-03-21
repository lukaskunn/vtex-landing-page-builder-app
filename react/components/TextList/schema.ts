export const TEXT_DEFAULT_PROPS = {
  disableAnimations: false,
  contentAlignment: "start",
  singleContent: "",
  paragraph: {
    paragraphFontColor: "#001428",
    paragraphFontSize: "15px",
    paragraphFontSizeMobile: "15px",
    textAlignment: "start"
  },
  paragraphList: []
};

export const SCHEMA_TEXT = {
  title: "Simple Text",
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
    singleContent: {
      type: "string",
      title: "Single Content",
      description: "If you want, you can place all the content in HTML here.",
      ui: {
        widget: "textarea"
      }
    },
    paragraph: {
      type: "object",
      properties: {
        paragraphFontColor: {
          type: "string",
          title: "paragraph Font Color",
          widget: {
            "ui:widget": "color"
          }
        },
        paragraphFontSize: {
          type: "string",
          title: "paragraph Font Size"
        },
        paragraphFontSizeMobile: {
          type: "string",
          title: "paragraph Font Size (Mobile)"
        },
        textAlignment: {
          type: "string",
          title: "Text Alignment",
          enum: ["start", "center", "end"],
          enumNames: ["Left", "Center", "Right"]
        }
      }
    },
    paragraphList: {
      title: "Text List",
      description: "Define the Text content list",
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
          paragraphText: {
            type: "string",
            title: "Paragraph Text"
          }
        }
      }
    }
  }
};
