import { Stack } from "@mui/material";
import React from "react";
import Chats from "./ChatHistory";
import Controls from "./Controls";
import RightSide from "./RightSide";

const Body = () => {
  return (
    <Stack
      display="flex"
      direction="row"
      justifyContent="start"
      sx={{
        backgroundColor: "#282828",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Controls />
      <Chats />
      <RightSide />
    </Stack>
  );
};

export default Body;
