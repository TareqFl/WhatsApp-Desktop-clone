import React from "react";
import {
  Chat,
  Computer,
  ErrorOutline,
  Key,
  KeyboardAltOutlined,
  Notifications,
  PersonOutline,
  Storage,
} from "@mui/icons-material";
import MyButton from "./MyButton";
import { Box, Paper, Stack } from "@mui/material";
import ClickedSettings from "./ClickedSettings";
const MyMenu = ({ menu, page }) => {
  return (
    <Box
      sx={{
        opacity: menu ? 1 : 0,
        position: "absolute",
        bottom: page ? 40 : 85,
        left: 40,
        height: "548px",
        width: "488px",
        overflow: "hidden",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          borderRadius: "8px",
          position: "absolute",
          bottom: menu ? 0 : -900,
          left: 0,
          height: menu ? "548px" : "0px",
          width: "488px",
          backgroundColor: "#202020",
          zIndex: 4,
          overflow: "hidden",
          transition: "all 0.3s",
        }}
      >
        <Stack display="flex" direction="row" id="menu" sx={{ height: "100%" }}>
          <Stack
            display="flex"
            direction="column"
            spacing={1}
            sx={{ width: "160px", backgroundColor: "#292929", p: 1 }}
          >
            <MyButton
              color="#292929"
              icon={
                <Computer
                  sx={{ ml: 0.5, color: "white", fontSize: "1.1rem" }}
                />
              }
              text={"General"}
            />
            <MyButton
              color="#292929"
              icon={
                <Key sx={{ ml: 0.5, color: "white", fontSize: "1.1rem" }} />
              }
              text={"Account"}
            />
            <MyButton
              color="#292929"
              icon={
                <Chat sx={{ ml: 0.5, color: "white", fontSize: "1.1rem" }} />
              }
              text={"Chats"}
            />
            <MyButton
              color="#292929"
              icon={
                <Notifications
                  sx={{ ml: 0.5, color: "white", fontSize: "1.1rem" }}
                />
              }
              text={"Notifications"}
            />
            <MyButton
              color="#292929"
              icon={
                <Storage sx={{ ml: 0.5, color: "white", fontSize: "1.1rem" }} />
              }
              text={"Storage"}
            />
            <MyButton
              color="#292929"
              icon={
                <KeyboardAltOutlined
                  sx={{ ml: 0.5, color: "white", fontSize: "1.1rem" }}
                />
              }
              text={"Shortcuts"}
            />
            <MyButton
              color="#292929"
              icon={
                <ErrorOutline
                  sx={{ ml: 0.5, color: "white", fontSize: "1.1rem" }}
                />
              }
              text={"Help"}
            />
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
              }}
            >
              <MyButton
                color="#292929"
                icon={
                  <PersonOutline
                    sx={{ ml: 0.5, color: "white", fontSize: "1.1rem" }}
                  />
                }
                text={"Profile"}
              />
            </Box>
          </Stack>
          <ClickedSettings />
        </Stack>
      </Paper>
    </Box>
  );
};

export default MyMenu;
