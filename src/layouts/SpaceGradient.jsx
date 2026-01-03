import React from 'react'
import gradient from "@assets/gradient.webp";
import { Box } from '@mui/material';

const SpaceGradient = ({gradientRef}) => {
  return (
    <Box
    ref={gradientRef}
    component="img"
    src={gradient}
    alt=""
    aria-hidden="true"
    sx={{
        position: "fixed",
        top: 0,
        left: -400,
        width: "150vw",
        maxWidth: "250vw",
        opacity: 0.5,
        pointerEvents: "none",
    }}
/>
  )
}

export default SpaceGradient