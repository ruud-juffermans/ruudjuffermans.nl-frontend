import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Card = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        p: { xs: "16px", sm: "32px" },
        borderRadius: "8px",
        border: "1px solid",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: theme.palette.grey[800],
        color: "#999",
        backgroundColor: theme.palette.grey[900],
        boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
        transition: "border-color 150ms linear, color 300ms linear",
        "&:hover": {
          borderColor: theme.palette.grey[600],
          color: "#fff !important"
        },
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.3,
          borderTopLeftRadius: "600px",
          background:
            "linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), transparent)",
        }}
      />
      {children}
    </Box>
  );
};

const CardTitle = ({ children }) => {
  return (
    <Typography
      component="h3"
      sx={{
        fontWeight: 400,
        fontSize: "16px",
        textTransform: "uppercase",
        mt: "10px",
        lineHeight: 1.6,
        textAlign: { xs: "left", sm: "center" },
      }}
    >
      {children}
    </Typography>
  );
};

const CardLabel = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        fontSize: "16px",
        border: "1px solid",
        borderColor: theme.palette.grey[700],
        position: "absolute",
        right: 6,
        top: -6,
        backgroundColor: theme.palette.grey[900],
        borderRadius: "5px",
        px: { xs: "4px", sm: "8px" },
        py: { xs: "4px", sm: "4px" },
        mb: { xs: "8px", sm: "16px" },
        fontWeight: 300,
      }}
    >
      {children}
    </Box>
  );
};

const CardKeyWords = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: "20px",
        color: "#902828",
        gap: { xs: "16px", sm: "32px" },
        flexWrap: "wrap",
      }}
    >
      {children}
    </Box>
  );
};

const CardActions = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "32px",
        alignItems: "flex-end",
        alignSelf: "flex-end",
      }}
    >
      {children}
    </Box>
  );
};

Card.Title = CardTitle;
Card.Label = CardLabel;
Card.KeyWords = CardKeyWords;
Card.Actions = CardActions;

export default Card;
