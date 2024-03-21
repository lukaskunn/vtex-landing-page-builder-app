// Used to group components that are not container type
const simpleComponentsEnum = [
    "banner",
    "breadcrumb",
    "catchall",
    "catchallSlide",
    "customCSS",
    "galleryCarousel",
    "gridGallery",
    "image",
    "sectionDivider",
    "simpleGallery",
    "simpleText",
    "textWithSideGallery",
    "textWithSideImage",
    "simpleTitleAndDescription",
    "video"
];

const simpleComponentsEnumNames = [
    "Banner",
    "Breadcrumb",
    "Catchall",
    "Catchall Slide",
    "Custom CSS",
    "Gallery Carousel",
    "Grid Gallery",
    "Image",
    "Section Divider",
    "Simple Gallery",
    "Simple Text",
    "Text with side gallery",
    "Text with side image",
    "Title and Description",
    "Video"
];

// Used to group all components
const allComponentsEnum = [
    ...simpleComponentsEnum,
    "flexLayoutRow"
]

const allComponentsEnumNames = [
    ...simpleComponentsEnumNames,
    "Flex layout row",
];

export {
    simpleComponentsEnum,
    simpleComponentsEnumNames,
    allComponentsEnum,
    allComponentsEnumNames
}