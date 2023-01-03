import { Box, Typography } from "@mui/material";
import React from "react";

const Warning = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        top: { xs: 0, md: "-120%" },
        left: { xs: 0, md: "-120%" },
        zIndex: 10,
        backgroundColor: "#303030",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: " 0.5s",
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
  );
};

export default Warning;
