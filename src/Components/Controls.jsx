import React from "react";
import {
  ChatOutlined,
  PhoneOutlined,
  SettingsOutlined,
  TrackChangesOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton, Stack } from "@mui/material";
const Controls = () => {
  return (
    <Stack
      display="flex"
      direction="column"
      sx={{ pt: 5, pb: 5, pl: 0.5, pr: 0.5, height: "100%" }}
    >
      <IconButton
        sx={{
          position: "relative",
          borderRadius: 1,
          "&:hover": {
            backgroundColor: "#404040",
          },
          "&::after": {
            content: `""`,
            display: "block",
            position: "absolute",
            left: 0,
            bottom: 10,
            height: "16px",
            width: "3px",
            borderRadius: "25%",
            backgroundColor: "#25D366",
          },
        }}
      >
        <ChatOutlined
          fontSize="small"
          sx={{
            position: "relative",
            color: "white",
            display: "block",
          }}
        />
      </IconButton>

      <IconButton
        sx={{
          position: "relative",
          borderRadius: 1,
          "&:hover": {
            backgroundColor: "#404040",
          },
          "&::after": {
            content: `""`,
            display: "block",
            position: "absolute",
            left: 0,
            bottom: 10,
            height: "16px",
            width: "3px",
            borderRadius: "25%",
            backgroundColor: "#25D366",
          },
        }}
      >
        <PhoneOutlined
          fontSize="small"
          sx={{
            position: "relative",
            color: "white",
            display: "block",
          }}
        />
      </IconButton>

      <IconButton
        sx={{
          position: "relative",
          borderRadius: 1,
          "&:hover": {
            backgroundColor: "#404040",
          },
          "&::after": {
            content: `""`,
            display: "block",
            position: "absolute",
            left: 0,
            bottom: 10,
            height: "16px",
            width: "3px",
            borderRadius: "25%",
            backgroundColor: "#25D366",
          },
        }}
      >
        <TrackChangesOutlined
          fontSize="small"
          sx={{
            position: "relative",
            color: "white",
            display: "block",
          }}
        />
      </IconButton>
      <Stack
        display="flex"
        direction="column"
        justifyContent="end"
        sx={{ height: "100%", width: "100%" }}
      >
        <IconButton
          sx={{
            position: "relative",
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "#404040",
            },
            "&::after": {
              content: `""`,
              display: "block",
              position: "absolute",
              left: 0,
              bottom: 10,
              height: "16px",
              width: "3px",
              borderRadius: "25%",
              backgroundColor: "#25D366",
            },
          }}
        >
          <SettingsOutlined
            fontSize="small"
            sx={{
              position: "relative",
              color: "white",
              display: "block",
            }}
          />
        </IconButton>

        <IconButton
          sx={{
            position: "relative",
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "#404040",
            },
            "&::after": {
              content: `""`,
              display: "block",
              position: "absolute",
              left: 0,
              bottom: 10,
              height: "16px",
              width: "3px",
              borderRadius: "25%",
              backgroundColor: "#25D366",
            },
          }}
        >
          <Avatar
            src="https://lh3.googleusercontent.com/ogw/AOh-ky25pSnQrZFk4WRSyYizIA70cIK6kyVI6VRWR0ZFpQ=s32-c-mo"
            sx={{ width: 24, height: 24 }}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Controls;
