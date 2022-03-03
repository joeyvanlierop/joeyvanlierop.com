import { createStitches } from "@stitches/react";
import {
  gray,
  slate,
  mauve,
  slateDark,
  grayDark,
  mauveDark,
} from "@radix-ui/colors";

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    fonts: {
      inter: "Inter, sans-serif",
    },
  },
});

export const lightTheme = createTheme("light-theme", {
  colors: {
    ...gray,
    ...slate,
    loContrast: "white",
    hiContrast: "$slate12",
  },
  shadows: {
    ...gray,
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    ...grayDark,
    ...slateDark,
    loContrast: mauveDark.mauve1,
    hiContrast: "$slate12",
  },
  shadows: {
    ...grayDark,
  },
});

export const globalStyles = globalCss({
  body: {
    fontFamily: "$inter",
    backgroundColor: "$loContrast",
    color: "$hiContrast",
    // transition: "all 250ms",
  },
  // "*::before, *::after": {
  //   transition: "all 250ms",
  // },

  h4: {
    fontSize: "16px",
    fontWeight: "normal",
  },
});
