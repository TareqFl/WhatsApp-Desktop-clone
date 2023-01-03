import { Stack } from "@mui/material";
import React from "react";
import Chats from "./ChatHistory/ChatHistory";
import Controls from "./Controls/Controls";
import RightSide from "./RightSide/RightSide";
import Warning from "./Warnings/Warning";

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
      <Warning />
    </Stack>
  );
};

export default Body;
