import { LockOutlined, WhatsApp } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";

const NoChats = () => {
  return (
    <Stack
      display="flex"
      direction="column"
      sx={{ height: "100%", width: "100%" }}
    >
      <Stack
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <WhatsApp sx={{ color: "#505050", fontSize: "5rem" }} />
        <Typography variant="h6" sx={{ color: "white" }}>
          WhatsApp for Windows
        </Typography>
        <Typography sx={{ color: "darkgray", fontSize: "0.8rem" }}>
          Send and receive messages without keeping your phone online.
        </Typography>
        <Typography sx={{ color: "darkgray", fontSize: "0.8rem" }}>
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </Typography>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ width: "100%", p: 7 }}
      >
        <LockOutlined sx={{ color: "gray", fontSize: "0.8rem" }} />
        <Typography sx={{ color: "gray", fontSize: "0.8rem" }}>
          End-to-end encrypted
        </Typography>
      </Stack>
    </Stack>
  );
};

export default NoChats;
