import { createGlobalTheme } from '@vanilla-extract/css';


const theme = createGlobalTheme(':root', {
  white: "#FFFFFF",
  grey50: "#F9FAFB",
  grey100: "#F3F4F6",
  grey200: "#E5E7EB",
  grey300: "#D1D5DC",
  grey400: "#99A1AF",
  grey500: "#6A7282",
  grey600: "#4A5565",
  grey700: "#030712",

  purpleLight: "#F3EFFE",
  purpleLightHover: "#EEE7FE",
  purpleLightActive: "#DBCCFC",
  purpleNormal: "#8B5CF6",
  purpleNormalHover: "#7D53DD",
  purpleNormalActive: "#6F4AC5",
  purpleDark: "#6845B9",
  purpleDarkHover: "#533794",
  purpleDarkActive: "#3F296F",
  purpleDarker: "#312056",
});

export default theme;