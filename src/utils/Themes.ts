export const darkTheme = {
  bg: "#090917",
  bgLight: "#1C1E27",
  primary: "#854CE6",
  text_primary: "#F2F3F4",
  text_secondary: "#b1b2b3",
  card: "#171721",
  card_light: "#191924",
  button: "#854CE6",
  white: "#FFFFFF",
  black: "#000000",
};

export const lightTheme = {
  bg: "#FFFFFF",
  bgLight: "#f0f0f0",
  primary: "#be1adb",
  text_primary: "#111111",
  text_secondary: "#48494a",
  card: "#FFFFFF",
  button: "#5c5b5b",
};

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bg: string;
    primary: string;
    card_light: string;
    text_primary: string;
    text_secondary: string;
    bgLight: string;
    card: string;
    button: string;
    white: string;
    black: string;
  }
}
