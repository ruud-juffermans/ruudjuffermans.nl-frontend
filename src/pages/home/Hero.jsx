import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
            fontWeight: 900,
            mt: "100px",
            fontSize: { xs: "40px", lg: "120px" },
            [theme.breakpoints.between("sm", "lg")]: {
              fontSize: "60px",
            },
          }}
        >
          <Box
            component="span"
            sx={{
              background: `linear-gradient(${theme.palette.primary.main}, #999)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
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
              lineHeight: 1
            }}
          >
            Cryptocurrency Specialist.
          </Box>
        </Typography>

        <Typography
          component="p"
          sx={{
            maxWidth: { xs: "450px", lg: "750px" },
            [theme.breakpoints.between("sm", "lg")]: { maxWidth: "700px" },
            lineHeight: 1.6,
            fontWeight: 100,
            opacity: 0.4,
            mt: "100px",
            fontSize: { xs: "16px", lg: "20px" },
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
