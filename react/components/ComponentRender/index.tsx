import React from 'react'
import { SCHEMA_COMPONENT_RENDER } from "./schema";
import { PageContextProvider } from "./components/PageContext";
import BaseDefaultLayout from "./components/BaseDefaultLayout";
import BaseBlogLayout from "./components/BaseBlogLayout";
import { ComponentMap } from "../../utils/componentMapList";


const ComponentRender = (props) => {
  const { components, pageType } = props;

  const BaseComponentMap = {
    defaultPage: BaseDefaultLayout,
    blogLayout: BaseBlogLayout
  };

  return (
    <>
      {!!components &&
        components.map((component, index) => {
          const { componentName, showComponent } = component;
          const NewComponent = ComponentMap[componentName];
          const BaseComponent =
            BaseComponentMap[pageType] || BaseComponentMap.defaultPage;

          return (
            showComponent &&
            ComponentMap[componentName] !== undefined && (
              <PageContextProvider key={index}>
                <BaseComponent backgroundColor={component.backgroundColor}>
                  <NewComponent props={component} />
                </BaseComponent>
              </PageContextProvider>
            )
          );
        })}
    </>
  );
}

ComponentRender.schema = SCHEMA_COMPONENT_RENDER;
export default ComponentRender
