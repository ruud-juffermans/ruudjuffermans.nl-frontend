import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import gradient from "@assets/gradient.webp";
import Footer from "./Footer";
import { useParallax } from "@hooks/useParallax";

const Layout = () => {
  const starsRef = useParallax(0.9);
  const gradientRef = useParallax(0.8);

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
        {/* Stars (SVG parallax) */}
        <Box
          ref={starsRef}
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1680 730"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            opacity: 0.5,
            height: "100vh",
            pointerEvents: "none",
            willChange: "transform",
          }}
        >
<circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.873077 0.487583 -0.78755 0.61625 429.154 175.316)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.994947 -0.100399 0.322552 0.946552 263.797 71.2188)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.994947 -0.100399 0.322552 0.946552 440 282.121)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.994947 -0.100399 0.322552 0.946552 410.404 338.926)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.994947 -0.100399 0.322552 0.946552 576 145.121)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.061383 -0.998114 0.99741 0.07192 961.715 604.32)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 544.891 280.938)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 1245.01 314.668)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 989.111 172.809)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 974.557 162.211)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(0.322553 0.946552 -0.994947 0.100399 861.078 260.352)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.322553 -0.946552 0.994947 -0.100399 814.387 514.258)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.322553 -0.946552 0.994947 -0.100399 995.66 552.828)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.322553 -0.946552 0.994947 -0.100399 1154.39 545.258)"
          fill="white"
        ></circle>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 280.908 307.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 601.275 539.539)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 250.141 326.566)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1553.78 554.305)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 322.141 513.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1504.14 366.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1140.55 485.527)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 108.141 433.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1285.14 263.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1372.09 492.215)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 630.725 434.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 696.141 281.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1343.31 263.105)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 320.141 360.363)"
          fill="white"
        ></ellipse>
        <ellipse
          cx="0.6"
          cy="0.6"
          rx="0.6"
          ry="0.6"
          transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1086.54 295.914)"
          fill="white"
        ></ellipse>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 1308.95 468.746)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 1327.66 447.223)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 1469.98 192.406)"
          fill="white"
        ></circle>
        <circle
          cx="0.6"
          cy="0.6"
          r="0.6"
          transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 586.887 448.488)"
          fill="white"
        ></circle>
        </Box>

        <Box
          ref={gradientRef}
          component="img"
          src={gradient}
          alt=""
          aria-hidden="true"
          sx={{
            position: "absolute",
            top: 0,
            width: "200vw",
            zIndex: 100,
            maxWidth: "100vw",
            opacity: 0.3,
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Outlet />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
