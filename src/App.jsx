import { Box, CssBaseline, Typography } from "@mui/material";
import React from "react";
import Body from "./Components/Body";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Body />
      <Box
        sx={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          top: { xs: 0, sm: "-500%" },
          left: { xs: 0, sm: "-500%" },
          zIndex: 10,
          backgroundColor: "#303030",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: " 0.35s",
        }}
      >
        <Typography
          color="white"
          fontWeight="bold"
          sx={{ letterSpacing: { xs: "4px", sm: 0 }, transition: "all 3s" }}
        >
          Mobile view is not supported
        </Typography>
      </Box>
    </div>
  );
};

export default App;
