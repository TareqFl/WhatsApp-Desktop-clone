import { Box } from "@mui/material";
import React from "react";
import NoChats from "./NoChats";

const RightSide = () => {
  return (
    <Box flex={8}>
      <NoChats />
    </Box>
  );
};

export default RightSide;
