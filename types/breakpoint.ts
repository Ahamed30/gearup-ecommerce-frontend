import { ValueOf } from "./helper";

export type Size = "xs" | "sm" | "md" | "lg";

export const Breakpoint = {
  Small: "sm",
  Medium: "md",
  Large: "lg",
  XLarge: "xl",
} as const;

export type Breakpoint = ValueOf<typeof Breakpoint>;

export const BreakpointSize = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;

export type BreakpointSize = ValueOf<typeof BreakpointSize>;
