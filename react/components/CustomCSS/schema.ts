export const SCHEMA_CUSTOM_CSS = {
  title: "Custom CSS",
  type: "object",
  properties: {
    css: {
      title: "Custom CSS",
      type: "string",
      default: "",
      ui: {
        "ui:widget": "textarea"
      }
    }
  }
};
