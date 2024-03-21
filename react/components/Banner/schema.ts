export const BANNER_DEFAULT_PROPS = {
  bannerIsFullWidth: false,
  bannerType: "image",
  image: {
    imageSrc:
      "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/edffded0-4eb2-4580-8f1b-983f479121ac___b32e02dbfa3ea4ee900593f04de3b4af.png",
    imageSrcSmallDesk:
      "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/edffded0-4eb2-4580-8f1b-983f479121ac___b32e02dbfa3ea4ee900593f04de3b4af.png",
    imageSrcMobile:
      "https://motorolauk.vtexassets.com/assets/vtex.file-manager-graphql/images/18f927d1-e0cb-4803-98bd-146aa90e91aa___671d12d38468c9bf4ebee31798189648.png",
    imageAlt: "dafault image"
  },
  video: {
    videoSrc: "https://www.youtube.com/watch?v=MPPCphBzD8E",
    autoPlay: false,
    loop: false
  }
};

export const SCHEMA_BANNER = {
  title: "Simple Banner",
  type: "object",
  properties: {
    bannerIsFullWidth: {
      type: "boolean",
      title: "Banner is full width?",
      default: false
    },
    image: {
      type: "object",
      properties: {
        imageSrc: {
          type: "string",
          title: "Image Source",
          widget: {
            "ui:widget": "image-uploader"
          }
        },
        imageSrcSmallDesk: {
          type: "string",
          title: "Image Source (Small Desktop)",
          widget: {
            "ui:widget": "image-uploader"
          }
        },
        imageSrcMobile: {
          type: "string",
          title: "Image Source (Mobile)",
          widget: {
            "ui:widget": "image-uploader"
          }
        },
        imageAlt: {
          type: "string",
          title: "Image Alt"
        }
      }
    }
  }
};
