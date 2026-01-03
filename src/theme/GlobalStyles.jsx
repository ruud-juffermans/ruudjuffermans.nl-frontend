import { CssBaseline, GlobalStyles as MuiGlobalStyles } from "@mui/material";

const GlobalStyles = () => {
  return (
    <>
      <CssBaseline />
      <MuiGlobalStyles
        styles={(theme) => ({
          html: {
            scrollBehavior: "smooth",
          },
        })}
      />
    </>
  );
};

export default GlobalStyles;
