import { simpleComponentsEnum, simpleComponentsEnumNames } from "../../utils/componentNames";
import { simpleComponentSchemas } from "../../utils/simpleComponentsSchema";

export const SCHEMA_FLEX_LAYOUT_ROW = {
  title: "Component render",
  description: "Component render",
  type: "object",
  properties: {
    components: {
      minItems: 1,
      title: "Flex layout row",
      description: "Select the components to show on page",
      type: "array",
      items: {
        title: "Flex layout row",
        description: "Select the components to show on page",
        type: "object",
        properties: {
          componentName: {
            isLayout: false,
            title: "Component Name",
            type: "string",
            enum: simpleComponentsEnum,
            enumNames: simpleComponentsEnumNames
          },
          __editorItemTitle: {
            default: "textWithSideImage",
            isLayout: false,
            title: "Site editor component identification",
            type: "string",
            enum: simpleComponentsEnumNames,
            enumNames: simpleComponentsEnumNames
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
            oneOf: simpleComponentSchemas
          }
        }
      }
    }
  }
};
