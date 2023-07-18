import { Breakpoint } from "@/types";
import { useBreakpoint } from "../useBreakPoint";

export function useIsBreakpoint(...breakpoints: Breakpoint[]): boolean {
  const breakpoint = useBreakpoint();

  if (!breakpoint) return false;

  return breakpoints.includes(breakpoint);
}
