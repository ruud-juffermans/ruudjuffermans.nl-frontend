import { Box, Typography, useTheme } from "@mui/material";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        userSelect: "none",
        height: { xs: "40vh", lg: "80vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red",
      }}
    >
      <Box
        sx={{
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          component="h1"
          sx={{
            display: "flex",

            flexDirection: "column",
            mt: "100px",
            fontSize: { xs: "40px", lg: "100px" },
            [theme.breakpoints.between("sm", "lg")]: {
              fontSize: "60px",
            },
          }}
        >
                            <Box
            component="span"
            sx={{
              background: `linear-gradient(${theme.palette.primary.main}, #164ccb)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 800,
            }}
          >
            Hello. I'm Ruud.
          </Box>
          <Box
            component="span"
            sx={{
              background: `linear-gradient(${theme.palette.primary.main}, #902828)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: 3
            }}
          >
            Cryptocurrency Specialist.
          </Box>
        </Typography>

        <Typography
          component="p"
          sx={{
            maxWidth: { xs: "450px", lg: "950px" },
            [theme.breakpoints.between("sm", "lg")]: { maxWidth: "700px" },
            lineHeight: 1.6,
            fontWeight: 100,
            opacity: 0.4,
            mt: "100px",
            fontSize: { xs: "20px", lg: "28px" },
            [theme.breakpoints.between("sm", "lg")]: { fontSize: "16px" },
          }}
        >
          I'm passionate about designing and managing data architectures that
          are scalable, efficient, and that meet the organization's analytical
          needs.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
