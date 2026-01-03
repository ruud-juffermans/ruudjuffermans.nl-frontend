import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const SectionHeading = ({ children }) => {
    return (
        <Typography
            component="h1"
            sx={{
                fontWeight: 800,
                mb: "20px",
                fontFamily: "Open Sans",
                fontSize: "36px",
            }}
        >
            {children}
        </Typography>
    );
};

const SectionText = ({ children }) => {
    return (
        <Typography
            component="p"
            sx={{
                lineHeight: 1.5,
                // fontWeight: 300,
                fontFamily: "Open Sans",
                fontSize: "18px",
            }}
        >
            {children}
        </Typography>
    );
};

const Section = ({ children, id }) => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Box
         id={id}
            sx={{
                width: "100%",
                padding: "60px 0px 80px",
            }}
        >
            {children}
        </Box>
    );
};

const SectionContainer = ({ children, backgroundColor }) => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Box
            sx={{
                alignItems: "center",
                width: "100vw",
                padding: "200px 20px 120px",
                backgroundColor: {backgroundColor}
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    margin: "auto",
                    flexDirection: "column",
                    maxWidth: "1400px",
                    gap: "80px"
                }}>

                {children}
            </Box>
        </Box>
    );
};

Section.Container = SectionContainer;
Section.Heading = SectionHeading;
Section.Text = SectionText;

export default Section