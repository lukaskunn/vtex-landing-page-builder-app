import { SCHEMA_IMAGE } from "../components/Image/schema";
import { SCHEMA_TEXT_WITH_SIDE_IMAGE } from "../components/TextWithSideImage/schema";
import { SCHEMA_SIMPLE_TITLE_AND_DESCRIPTION } from "../components/SimpleTitleAndDescription/schema";
import { SCHEMA_CATCHALL } from "../components/Catchall/schema";
import { SCHEMA_BREADCRUMB } from "../components/Breadcrumb/schema";
import { SCHEMA_SIMPLE_GALLERY } from "../components/SimpleGallery/schema";
import { SCHEMA_TEXT_WITH_SIDE_GALLERY } from "../components/TextWithSideImageGallery/schema";
import { SCHEMA_TEXT } from "../components/TextList/schema";
import { SCHEMA_BANNER } from "../components/Banner/schema";
import { SCHEMA_SECTION_DIVIDER } from "../components/SectionDivider/schema";
import { SCHEMA_GALLERY_CAROUSEL } from "../components/GalleryCarousel/schema";
import { SCHEMA_CATCHALL_SLIDE } from "../components/CatchallSlide/schema";
import { SCHEMA_GRID_GALLERY } from "../components/GridGallery/schema";
import { SCHEMA_VIDEO } from "../components/Video/schema";
import { SCHEMA_CUSTOM_CSS } from "../components/CustomCSS/schema";

export const simpleComponentSchemas = [
    {
      properties: {
        componentName: {
          enum: ["image"]
        },
        ...SCHEMA_IMAGE.properties
      }
    },
    {
        properties: {
          componentName: {
            enum: ["simpleTitleAndDescription"]
          },
          ...SCHEMA_SIMPLE_TITLE_AND_DESCRIPTION.properties
        }
      },
      {
        properties: {
          componentName: {
            enum: ["catchall"]
          },
          ...SCHEMA_CATCHALL.properties
        }
      },
      {
        properties: {
          componentName: {
            enum: ["breadcrumb"]
          },
          ...SCHEMA_BREADCRUMB.properties
        }
      },
      {
        properties: {
          componentName: {
            enum: ["simpleGallery"]
          },
          ...SCHEMA_SIMPLE_GALLERY.properties
        }
      },
      {
        properties: {
          componentName: {
            enum: ["textWithSideImage"]
          },
          ...SCHEMA_TEXT_WITH_SIDE_IMAGE.properties
        }
      },
      {
        properties: {
          componentName: {
            enum: ["textWithSideGallery"]
          },
          ...SCHEMA_TEXT_WITH_SIDE_GALLERY.properties
        }
      },
      {
        properties: {
          componentName: {
            enum: ["banner"]
          },
          ...SCHEMA_BANNER.properties
        }
      },
      {
        properties: {
          componentName: {
            enum: ["simpleText"]
          },
          ...SCHEMA_TEXT.properties
        }
      },
      {
        properties: {
          componentName: {
            enum: ["galleryCarousel"]
          },
          ...SCHEMA_GALLERY_CAROUSEL.properties
        }
      },
      {
        properties: {
          componentName: {
            enum: ["sectionDivider"]
          },
          ...SCHEMA_SECTION_DIVIDER.properties
        }
      },
      {
        properties: {
          componentName: {
            enum: ["catchallSlide"]
          },
          ...SCHEMA_CATCHALL_SLIDE.properties
        }
      },
      {
        properties: {
          componentName: {
            enum: ["gridGallery"]
          },
          ...SCHEMA_GRID_GALLERY.properties
        }
      },
      {
        properties: {
          componentName: {
            enum: ["video"]
          },
          ...SCHEMA_VIDEO.properties
        }
      },
      {
        properties: {
          componentName: {
            enum: ["customCSS"]
          },
          ...SCHEMA_CUSTOM_CSS.properties
        }
      }
  ];