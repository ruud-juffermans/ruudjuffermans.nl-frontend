import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import breakpoints from "./breakpoints";

const theme = createTheme({
  palette,
  breakpoints,
    typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default theme;