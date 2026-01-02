import { ThemeProvider } from "@mui/material/styles";
import theme from "@theme";
import Router from "@router";
import GlobalStyles from "./theme/GlobalStyles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
};

export default App;