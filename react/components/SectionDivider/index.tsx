import React, { useEffect } from "react";

import validateObjects from "../../utils/ValidateObject";
import { SECTION_DIVIDER_DEFAULT_PROPS } from "./schema";

function SectionDivider(props) {
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef(null);
  const { props: sectionDividerProps } = props;
  const {
    sectionId,
    componentIsFullWidth,
    disableAnimations,
    dividerHeight,
    dividerColor
  } = validateObjects(sectionDividerProps, SECTION_DIVIDER_DEFAULT_PROPS);

  const containerStyle = {
    width: "100%",
    maxWidth: componentIsFullWidth ? "none" : "1380px"
  };

  const sectionDividerStyle = {
    width:
      isVisible || disableAnimations
        ? componentIsFullWidth
          ? "100vw"
          : "100%"
        : "0%",
    height: dividerHeight ? dividerHeight : "1px",
    backgroundColor: dividerColor,
    margin: "20px 0",
    transition: ".8s all cubic-bezier(0, 0, 0, 1)"
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
    <div id={sectionId} style={containerStyle} ref={containerRef}>
      <div style={sectionDividerStyle} />
    </div>
  );
}

export default SectionDivider;
