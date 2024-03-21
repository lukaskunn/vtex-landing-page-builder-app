import React from "react";

const CustomCSS = props => {
  const { props: customCSSProps } = props;
  const { css } = customCSSProps;

  return <style>{css}</style>;
};

export default CustomCSS;
