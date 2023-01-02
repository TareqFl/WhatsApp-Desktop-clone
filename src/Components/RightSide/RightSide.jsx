import { Box } from "@mui/material";
import React from "react";
import NoChats from "./NoChats";

const RightSide = () => {
  return (
    <Box sx={{ flexGrow: 8, display: { xs: "none", sm: "block" } }}>
      <NoChats />
    </Box>
  );
};

export default RightSide;
