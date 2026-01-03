import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useMemo } from "react";



const Stars = ({ starsRef, opacity = 0.5 }) => {
    const theme = useTheme();

    const STARS = useMemo(() => {
        const count = 30;
        const phi = 0.61803398875; // golden ratio conjugate
      
        return Array.from({ length: count }, (_, i) => {
          const x = ((i * phi) % 1) * 100;          // 0..100
          const y = ((i * (phi * 1.7)) % 1) * 100;  // different stride
      
          return {
            x: `${x}%`,
            yBase: y,                       // number
            yVw: (i % 2 === 0 ? 1 : -1) * (0.8 + (i % 6) * 0.35), // wider vertical spread
            r: 0.8 + (i % 6) * 0.9,        // reasonable star sizes
            depth: 0.25 + (i % 5) * 0.12,
          };
        });
      }, []);
      const twinkle = useMemo(() => {
        const count = STARS.length;
        return Array.from({ length: count }, (_, i) => ({
          duration: 2.2 + (i % 5) * 0.1,
          delay: (i % 7) * 0.35,
          min: 0.15 + (i % 4) * 0.005,
          max: 0.8 + (i % 3) * 0.008,
        }));
      }, [STARS.length]);

    const starSx = {
        transformOrigin: "center",
        animation: "twinkle var(--d) ease-in-out var(--dl) infinite alternate"
    };

    const starVars = (i) => ({
        "--d": `${twinkle[i].duration}s`,
        "--dl": `${twinkle[i].delay}s`,
        "--min": String(twinkle[i].min),
        "--max": String(twinkle[i].max),
    });

    return (
        <Box
            ref={starsRef}
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1680 730"
            sx={{
                position: "fixed",
                inset: 0,
                maxWidth: "2000px",
                margin: "auto",
                // width: "100%",
                height: "200vh",
                overflow: "unset",
                opacity,
                preserveAspectRatio: "unset",
                pointerEvents: "none",
                willChange: "transform",
                "@keyframes twinkle": {
                    "0%": { opacity: "var(--min)", filter: "blur(0px)" },
                    "100%": { opacity: "var(--max)", filter: "blur(0.6px)" },
                },
            }}
        >
{STARS.map((star, i) => (
  <Box
    key={i}
    component="circle"
    cx={star.x}
    cy={`clamp(0%, calc(${star.yBase}% + ${star.yVw}vw), 100%)`}
    r={star.r}
    sx={starSx}
    style={starVars(i)}
    fill="white"
  />
))}
           
        </Box>
    );
};

export default Stars;
