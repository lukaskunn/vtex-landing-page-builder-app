import { allComponentSchemas } from "../../utils/allComponentsSchema";
import { allComponentsEnum, allComponentsEnumNames } from "../../utils/componentNames";

export const SCHEMA_COMPONENT_RENDER = {
  title: "Component render",
  description: "Component render",
  type: "object",
  properties: {
    pageType: {
      title: "Page type",
      type: "string",
      enum: ["defaultPage", "blogLayout"],
      enumNames: ["Full Width", "Blog"]
    },
    components: {
      minItems: 1,
      title: "Components to render",
      description: "Select the components to show on page",
      type: "array",
      items: {
        title: "Component to render",
        description: "Select the components to show on page",
        type: "object",
        properties: {
          componentName: {
            isLayout: false,
            title: "Component Name",
            type: "string",
            enum: allComponentsEnum,
            enumNames: allComponentsEnumNames
          },
          __editorItemTitle: {
            default: "textWithSideImage",
            isLayout: false,
            title: "Site editor component identification",
            type: "string",
            enum: allComponentsEnumNames,
            enumNames: allComponentsEnumNames
          },
          backgroundColor: {
            title: "Background Color",
            widget: {
              "ui:widget": "color"
            },
            type: "string"
          },
          showComponent: {
            type: "boolean",
            title: "Show Component?",
            description:
              "Show or hide this component. If you want to keep the component settings but not show it on the page, uncheck this box.",
            default: true
          }
        },
        dependencies: {
          componentName: {
            oneOf: allComponentSchemas
          }
        }
      }
    }
  }
};
