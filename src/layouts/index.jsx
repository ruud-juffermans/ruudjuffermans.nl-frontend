import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useParallax } from "@hooks/useParallax";
import Stars from "./Stars";
import SpaceGradient from "./SpaceGradient";
import Header from "./Header";

const Layout = () => {
    const starsRef = useParallax(0.05);
    const gradientRef = useParallax(-0.05);

    return (
        <Box
            sx={{
                backgroundColor: "#202021",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Box
                aria-hidden="true"
                sx={{
                    position: "relative",
                    minHeight: "100vh",
                    background:
                        "linear-gradient(-5deg, rgba(14, 14, 14, 0.3), rgba(15, 15, 15, 0.1), rgba(19, 19, 19, 0.1))",
                }}
            >
                <Stars starsRef={starsRef} opacity={0.5} />
                <SpaceGradient gradientRef={gradientRef} opacity={0.5} />

                {/* Content */}
                <Box sx={{ position: "relative", zIndex: 2 }}>
                    <Header />
                    <Outlet />
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;
