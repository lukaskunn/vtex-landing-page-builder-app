// TODO: Refactor this component to fit a better structure
// TODO : Fix typescript issue on line 171
import React, { useEffect } from "react";

import { validateText } from "../../utils/validateText";
import validateObjects from "../../utils/ValidateObject";
import { CATCHALL_SLIDE_DEFAULT_PROPS } from "./schema";
import { usePageContext } from "../ComponentRender/components/PageContext";
import styles from "./CatchallSlide.module.css";

const SampleNextArrow = () => {
  return (
    <img
      src="https://motorolaimgrepo.vteximg.com.br/arquivos/motoverse-arrow-right.svg"
      alt="prev-caret"
    />
  );
};

const SamplePrevArrow = () => {
  return (
    <img
      src="https://motorolaimgrepo.vteximg.com.br/arquivos/motoverse-arrow-left.svg"
      alt="prev-caret"
    />
  );
};

const CatchallSlide = props => {
  const [renderList, setRenderList] = React.useState([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const { isMobile, device } = usePageContext();
  const { props: catchallSlideProps } = props;
  const {
    catchallList,
    description,
    // TODO: Implement animations
    // disableAnimations,
    fontColor,
    learnMore,
    title,
    itemTitle,
    componentIsMiddleOfPage
  } = validateObjects(catchallSlideProps, CATCHALL_SLIDE_DEFAULT_PROPS);

  const {
    itemTitleAlignment,
    itemTitleFontSize,
    itemTitleFontSizeMobile,
    itemTitleBold,
    itemTitleItalic,
    itemTitleUnderline,
    itemTitleUppercase
  } = itemTitle;

  const {
    descriptionAlignment,
    descriptionFontSize,
    descriptionFontSizeMobile
  } = description;

  const {
    learnMoreBold,
    learnMoreItalic,
    learnMoreUnderline,
    learnMoreFontSize,
    learnMoreFontSizeMobile
  } = learnMore;

  const {
    titleAlignment,
    titleFontSize,
    titleFontSizeMobile,
    titleBold,
    titleItalic,
    titleText,
    titleUnderline,
    titleUppercase
  } = title;

  const containerStyles = {
    padding: isMobile
      ? componentIsMiddleOfPage
        ? "60px 0 80px 20px"
        : "40px 0 80px 20px"
      : componentIsMiddleOfPage
      ? "60px 20px 80px"
      : "40px 20px 80px",
    display: "flex",
    flexDirection: "column"
  };

  const titleStyles = {
    textAlign: titleAlignment,
    fontSize: isMobile ? titleFontSizeMobile : titleFontSize,
    fontWeight: titleBold ? "bold" : "normal",
    fontStyle: titleItalic ? "italic" : "normal",
    textDecoration: titleUnderline ? "underline" : "none",
    textTransform: titleUppercase ? "uppercase" : "none",
    color: fontColor
  };

  const itemTitleStyles = {
    textAlign: itemTitleAlignment,
    fontSize: isMobile ? itemTitleFontSizeMobile : itemTitleFontSize,
    fontWeight: itemTitleBold ? "bold" : "normal",
    fontStyle: itemTitleItalic ? "italic" : "normal",
    textDecoration: itemTitleUnderline ? "underline" : "none",
    textTransform: itemTitleUppercase ? "uppercase" : "none",
    color: fontColor
  };

  const descriptionStyles = {
    textAlign: descriptionAlignment,
    fontSize: isMobile ? descriptionFontSizeMobile : descriptionFontSize,
    color: fontColor
  };

  const learnMoreStyles = {
    fontWeight: learnMoreBold ? "bold" : "normal",
    fontStyle: learnMoreItalic ? "italic" : "normal",
    textDecoration: learnMoreUnderline ? "underline" : "none",
    fontSize: isMobile ? learnMoreFontSizeMobile : learnMoreFontSize,
    color: fontColor
  };

  const handleNextSlide = () => {
    if (currentSlide < renderList.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(renderList.length - 1);
    }
  };

  useEffect(() => {
    const createRenderList = (array: any[]) => {
      const isMobile = device === "mobile";
      const size = isMobile ? 1 : 3;
      const matrix = [];
      const n = array.length;
      let i = 0;

      while (i < n) {
        i += Number(size);
        // TODO: Fix typescript issue
        // @ts-ignore
        matrix.push(array.slice(i - size, i));
      }

      setRenderList(matrix);
    };

    createRenderList(catchallList);
  }, [device, catchallList]);

  const calculateDisplacement = () => {
    const leftMovement = isMobile ? 310 : 1350;
    const displacement = currentSlide * leftMovement;

    return displacement;
  };

  return (
    <div className={styles.container} style={containerStyles}>
      <div className={styles["title-and-buttons-container"]}>
        <h2
          className={styles.title}
          style={titleStyles}
          dangerouslySetInnerHTML={{ __html: titleText }}
        />
        <div className={styles["buttons-container"]}>
          <button
            className={styles["prev-button"]}
            type="button"
            onClick={() => handlePrevSlide()}
          >
            <SamplePrevArrow />
          </button>
          <button
            className={styles["next-button"]}
            type="button"
            onClick={() => handleNextSlide()}
          >
            <SampleNextArrow />
          </button>
        </div>
      </div>
      <div className={styles["catchall-list-container"]}>
        {!!renderList &&
          renderList.map((minList, indexList) => {
            const groupItemsStyles = {
              transform: `translateX(-${calculateDisplacement()}px)`
            };

            return (
              <div
                className={styles["small-list-container"]}
                key={indexList}
                style={groupItemsStyles}
              >
                {Array.isArray(minList) &&
                  (minList as any[]).map((item, index) => {
                    const {
                      imageAlt,
                      imageSrc,
                      itemHasLink,
                      itemLink,
                      linkText,
                      itemText,
                      openLinkInNewTab,
                      itemTitle,
                      itemHasTitle
                    } = item;

                    const itemStyles = {
                      textAlign: descriptionAlignment,
                      fontSize: isMobile
                        ? descriptionFontSizeMobile
                        : descriptionFontSize,
                      color: fontColor
                    };

                    return itemHasLink ? (
                      <a
                        key={index}
                        className={`${styles["catchall-item"]} ${styles["item-link"]}`}
                        style={itemStyles}
                        href={itemLink}
                        target={openLinkInNewTab ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                      >
                        <img
                          src={imageSrc}
                          alt={imageAlt}
                          className={styles["catchall-image"]}
                        />
                        {validateText(itemTitle) && itemHasTitle && (
                          <h3
                            className={styles["item-title"]}
                            style={itemTitleStyles}
                            dangerouslySetInnerHTML={{ __html: itemTitle }}
                          />
                        )}
                        <span
                          className={styles["description-container"]}
                          style={descriptionStyles}
                        >
                          <span
                            className={styles.itemTitle}
                            dangerouslySetInnerHTML={{
                              __html: `${itemText}${" "}`
                            }}
                          />
                          <a
                            className={styles["item-link-text"]}
                            style={learnMoreStyles}
                            dangerouslySetInnerHTML={{ __html: linkText }}
                            href={itemLink}
                            target={openLinkInNewTab ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                          />
                        </span>
                      </a>
                    ) : (
                      <div key={index} className={styles["catchall-item"]}>
                        <img
                          src={imageSrc}
                          alt={imageAlt}
                          className={styles["catchall-image"]}
                        />
                        {validateText(itemTitle) && itemHasTitle && (
                          <h3
                            className={styles["item-title"]}
                            style={itemTitleStyles}
                            dangerouslySetInnerHTML={{ __html: itemTitle }}
                          />
                        )}
                        <span
                          className={styles["description-container"]}
                          style={descriptionStyles}
                        >
                          <span
                            className={styles.itemTitle}
                            dangerouslySetInnerHTML={{ __html: itemText }}
                          />
                        </span>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CatchallSlide;
