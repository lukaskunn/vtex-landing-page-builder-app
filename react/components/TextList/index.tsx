import React, { useEffect } from "react";

import { usePageContext } from "../ComponentRender/components/PageContext";
import validateObjects from "../../utils/ValidateObject";
import { TEXT_DEFAULT_PROPS } from "./schema";
import styles from "./Text.module.css";

const Text = props => {
  const { props: textProps } = props;
  const { isMobile } = usePageContext();
  const containerRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const {
    contentAlignment,
    disableAnimations,
    paragraph,
    paragraphList,
    singleContent
  } = validateObjects(textProps, TEXT_DEFAULT_PROPS);

  const {
    paragraphFontColor,
    paragraphFontSize,
    paragraphFontSizeMobile,
    textAlignment
  } = paragraph;

  const paragraphContainerStyles = {
    justifyContent: contentAlignment
  };

  const paragraphStyles = {
    color: paragraphFontColor,
    fontSize: isMobile ? paragraphFontSizeMobile : paragraphFontSize,
    textAlign: textAlignment,
    opacity: disableAnimations ? 1 : 0,
    transform: disableAnimations ? "translateY(0)" : "translateY(20px)"
  };

  const callbackFunction = entries => {
    const [entry] = entries;

    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const containerReference = containerRef.current;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerReference) observer.observe(containerReference);

    return () => {
      if (containerReference) observer.unobserve(containerReference);
    };
  }, [containerRef]);

  return (
    <div
      className={styles.container}
      style={paragraphContainerStyles}
      ref={containerRef}
    >
      {!!singleContent && (
        <span
          className={`${styles["paragraph-container"]} ${
            isVisible && !disableAnimations ? styles["enter-animation"] : ""
          }`}
          style={paragraphStyles}
          dangerouslySetInnerHTML={{ __html: singleContent }}
        />
      )}
      {!!paragraphList &&
        !!paragraphList.length &&
        paragraphList.map((paragraph, index) => {
          const { paragraphText } = paragraph;

          return (
            <p
              className={`${styles.paragraph} ${
                isVisible && !disableAnimations ? styles["enter-animation"] : ""
              }`}
              key={index}
              style={{
                ...paragraphStyles,
                transitionDelay: `${index * 0.1 + 0.2}s`
              }}
              dangerouslySetInnerHTML={{ __html: paragraphText }}
            />
          );
        })}
    </div>
  );
};

export default Text;
