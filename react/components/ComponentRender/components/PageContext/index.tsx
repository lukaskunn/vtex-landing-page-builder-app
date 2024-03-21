//@ts-nocheck
import React, { useState, useEffect, useContext } from "react";

interface PageContextProps {
  screenWidth: number;
  device: string;
  isMobile: boolean;
}

export const PageContext = React.createContext<PageContextProps>({
  screenWidth: 0,
  device: "desktop",
  isMobile: false
});

export const usePageContext = () => useContext(PageContext);

interface PageContextProviderProps {
  children: React.ReactNode;
  key?: string;
}

export const PageContextProvider: React.FC<PageContextProviderProps> = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [device, setDevice] = useState("desktop");
  const [isMobile, setIsMobile] = useState(false);
  const MOBILE_MAX_WIDTH = 767;
  const TABLET_MAX_WIDTH = 1024;
  const SMALL_DESKTOP_MAX_WIDTH = 1366;
  const DESKTOP_MAX_WIDTH = 2200;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= MOBILE_MAX_WIDTH) {
        setDevice("mobile");
        setIsMobile(true);
      } else if (width <= TABLET_MAX_WIDTH) {
        setDevice("tablet");
        setIsMobile(true);
      } else if (width <= SMALL_DESKTOP_MAX_WIDTH) {
        setDevice("smallDesktop");
        setIsMobile(false);
      } else if (width <= DESKTOP_MAX_WIDTH) {
        setDevice("desktop");
        setIsMobile(false);
      } else {
        setDevice("ultraWide");
        setIsMobile(false);
      }

      setScreenWidth(width);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageContext.Provider value={{ screenWidth, device, isMobile }}>
      {children}
    </PageContext.Provider>
  );
};
