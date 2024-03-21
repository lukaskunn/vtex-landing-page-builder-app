export const SECTION_DIVIDER_DEFAULT_PROPS = {
  disableAnimations: false,
  componentIsFullWidth: false,
  sectionId: "",
  dividerColor: "#000000",
  dividerHeight: "1px"
};

export const SCHEMA_SECTION_DIVIDER = {
  title: "Section Divider Component",
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
    sectionId: {
      type: "string",
      title: "Component ID"
    },
    dividerColor: {
      type: "string",
      title: "Divider Color",
      widget: {
        "ui:widget": "color"
      }
    },
    dividerHeight: {
      type: "string",
      title: "Divider Height",
      description:
        "Define the height of the divider, set 0 to use this component as a anchor."
    }
  }
};
