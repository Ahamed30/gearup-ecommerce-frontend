import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { createElement } from "react";
import classNames from "classnames";
import { openSans, rubik } from "@/styles";

const fontRubik = rubik?.className;
const fontOpenSans = openSans?.className;

export const TypographyVariant = {
  headline: `${fontRubik}`,
  paragraph: `${fontOpenSans}`,
  // TODO: Need to Pick fonts for below
  "paragraph-small": "paragraph-small",
  disclaimer: "disclaimer",
  quotes: "quotes",
} as const;

export type TypographyVariant = keyof typeof TypographyVariant;

export type TypographyProps<T extends HTMLElement = any> = HTMLAttributes<T> & {
  /**
   * The html element or component to render
   */
  as?: ElementType<T>;
  /**
   * The text to render
   */
  children: ReactNode;
  /**
   * The visual variant to display
   */
  variant?: TypographyVariant;
  /**
   * Color of the text
   */
  color?: string;
};

export const Typography = ({
  as = "p",
  children,
  className,
  variant = "paragraph",
  color = "#232321",
  ...props
}: TypographyProps) => {
  return createElement(
    as,
    {
      className: classNames(TypographyVariant[variant], className),
      style: { color: color },
      ...props,
    },
    children
  );
};
