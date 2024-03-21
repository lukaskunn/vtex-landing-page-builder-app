import { SCHEMA_FLEX_LAYOUT_ROW } from './../components/FlexLayoutRow/schema';
import { simpleComponentSchemas } from "./simpleComponentsSchema";

export const allComponentSchemas = [
  ...simpleComponentSchemas,
  {
    properties: {
      componentName: {
        enum: ["flexLayoutRow"]
      },
      ...SCHEMA_FLEX_LAYOUT_ROW.properties
    }
  },
];