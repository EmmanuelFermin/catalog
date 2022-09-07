import { createTheme } from "@mui/material/styles";
import FielderLightOtf from "../assets/fonts/Fielder/Fielder-Light.otf";
import FielderOtf from "../assets/fonts/Fielder/Fielder-Regular.otf";
import FielderMediumOtf from "../assets/fonts/Fielder/Fielder-Medium.otf";

export const theme = createTheme({
  palette: {
    primary: {
      contrastText: "#0F0F0F",
      main: "#F4F4F4",
    },
    secondary: {
      contrastText: "#0F0F0F",
      main: "#FFF84E",
    },
    text: {
      primary: "#000000",
      secondary: "#797777",
    },
  },
  typography: {
    fontFamily: "Fielder, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Fielder';
        font-style: normal;
        font-display: swap;
        font-weight: 300;
        src: local('FielderLightOtf'), local('FielderOtf-Light'), url(${FielderLightOtf}) format('opentype');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      @font-face {
        font-family: 'Fielder';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('FielderOtf'), local('FielderOtf-Regular'), url(${FielderOtf}) format('opentype');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      @font-face {
        font-family: 'Fielder';
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: local('FielderMediumOtf'), local('FielderOtf-Medium'), url(${FielderMediumOtf}) format('opentype');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
    `,
    },
  },
});
