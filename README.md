# Landing Page Builder

This project is a Vtex app to create custom landing pages via admin site-editor.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [Next steps](#next-steps)
<!-- - [License](#license) -->

## Installation

To use this app you need to follow the steps below:

1. Clone the repository.
2. Update the manifest.json with the current vendor of the store you want to use the app.
3. Link the repository in a development workspace.
4. Add the ```component-render``` interface to a new or existing page template.
5. Validate if all components is working fine.
6. After all working fine, follow the [vtex publishing app guide](https://developers.vtex.com/docs/guides/vtex-io-documentation-publishing-an-app) to publish the app on your store vendor.

## Usage

After the app is installed on your store you can follow the steps bellow to use the Landing page builder:

1. Access the store admin.
2. Create a new page with the template that you insert the ```component-render``` interface.
3. Access the new created page on site editor.
4. Insert the components on the page
    ![Step by step insert new component](https://i.imgur.com/mtGrOtM.png)
5. Change the component props.
    ![new component props](https://i.imgur.com/h7r816A.png)
6. Save the component changes then save the component render changes.
7. The new component should appear on the page now.

## Configuration

### Changing component Styles

To fix the components to your store styles you can follow the steps below to change the component styles:

1. Access the component style file that you want to change
2. Change the styled to fit the new style
3. Link the change in a workspace
4. Check if all works fine and the component styles changed

### Creating a new component

The main idea in this project is to create the components and add to the landing pages. To build a new component and enable it to use on the landing pages, follow the steps below:

1. Create a new React component in the react/components folder.
2. Add to your new component a site editor schema.
3. create your component default props.
4. Add your component to [```react/utils/componentMapList.ts```](/react/utils/componentMapList.ts).

   ```javascript
   //...other components imported
   import YourNewComponent from "../components/YourNewComponent";
   export const ComponentMap = {
      //...other components
      yourNewComponent: YourNewComponent
    };
   ```

5. Add your component reference name to [```/react/utils/componentNames.ts```](/react/utils/componentNames.ts) in ```simpleComponentsEnum``` and the name to select on site editor on ```simpleComponentsEnumNames```.

   ```javascript
   const simpleComponentsEnum = [
        //...other components
        "yourNewComponent" //same name on the ComponentMap object prop
    ];

    const simpleComponentsEnumNames = [
        //...other components
        "Your New Component" //name to show on site editor
    ];
   ```

6. Add yout component schema to [```/react/utils/simpleComponentSchema.ts```](/react/utils/simpleComponentsSchema.ts).

    ```javascript
    //...other component schemas imported
    import { SCHEMA_YOUR_NEW_COMPONENT } from "../components/YourNewComponent/schema";

    export const simpleComponentSchemas = [
        //...other component schema props
        {
            properties: {
                componentName: {
                enum: ["yourComponentName"] //same name on the ComponentMap object prop
                },
                ...SCHEMA_YOUR_NEW_COMPONENT.properties
            }
        },
    ];
    ```

7. Check on site editor if your new component is available.

## Next steps

- [ ] Create a default schema to help who want to crete a new component
- [ ] Create a default component to help who want to crete a new component
- [ ] Add Sass to project
- [ ] Create Vtex component layouts (flexRow, flexColumn, etc...) to create more ways to to show the components on the page.
- [ ] Create a project Storybook
- [ ] Improve Project Documentation
- [ ] Add documentation for each component

## Contributing

We welcome contributions to improve this project! To contribute, please follow these guidelines:

1. Fork the repository and create a new branch for your contribution.
2. Make your changes and ensure they are well-tested.
3. Submit a pull request with a clear description of your changes and the problem they solve.
4. Your pull request will be reviewed by the project maintainers, and any necessary feedback will be provided.
5. Once your pull request is approved, it will be merged into the main branch.

By contributing to this project, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md).

Thank you for your contributions!
<!-- ## License -->

<!-- Information about the license for your project. -->

