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
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
          opacity: { xs: 1, sm: 0 },
          backgroundColor: "#303030",
          transition: "opacity 0.35s",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
