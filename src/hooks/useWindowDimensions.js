import React from "react";

import _ from "lodash";

const mobileBreakpoint = 480;
const tabletBreakpoint = 767;

function useWindowDimensions() {
  function getDimensions() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth <= mobileBreakpoint,
      isTablet:
        window.innerWidth > mobileBreakpoint &&
        window.innerWidth <= tabletBreakpoint,
      isDesktop: window.innerWidth > tabletBreakpoint,
    };
  }

  const [dimensions, setDimensions] = React.useState(getDimensions());

  React.useEffect(() => {
    const onResize = _.throttle(() => {
      setDimensions(getDimensions);
    }, 100);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  return dimensions;
}

export default useWindowDimensions;
