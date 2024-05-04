import { useState, useCallback, useEffect } from "react";
import { Breakpoint, BreakpointSize } from "@/types";

interface Size {
  width?: number;
  height?: number;
}

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>();
  const [windowSize, setWindowSize] = useState<Size>();

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    if (windowSize?.width) {
      if (windowSize?.width < BreakpointSize[Breakpoint.Medium]) {
        setBreakpoint(Breakpoint.Small);
      } else if (windowSize?.width < BreakpointSize[Breakpoint.Large]) {
        setBreakpoint(Breakpoint.Medium);
      } else if (windowSize?.width < BreakpointSize[Breakpoint.XLarge]) {
        setBreakpoint(Breakpoint.Large);
      } else {
        setBreakpoint(Breakpoint.XLarge);
      }
    }
  }, [windowSize?.width]);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return breakpoint;
};
