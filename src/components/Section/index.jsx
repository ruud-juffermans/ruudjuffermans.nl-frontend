import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const SectionHeading = ({ children }) => {
    return (
        <Typography
            component="h1"
            sx={{
                fontWeight: 500,
                mb: "5px",
                fontSize: "28px",
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
                fontSize: "16px",
            }}
        >
            {children}
        </Typography>
    );
};

const Section = ({ children }) => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Box
            sx={{
                width: "100%",
            }}
        >
            {children}
        </Box>
    );
};

const SectionContainer = ({ children }) => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Box
            sx={{
                alignItems: "center",
                width: "100vw",
                padding: "20px"
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