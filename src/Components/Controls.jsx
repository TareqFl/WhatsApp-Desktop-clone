import React from "react";
import {
  Chat,
  ChatOutlined,
  Computer,
  ErrorOutline,
  Key,
  KeyboardAltOutlined,
  Notifications,
  PersonOutline,
  PhoneOutlined,
  SettingsOutlined,
  Storage,
  TrackChangesOutlined,
} from "@mui/icons-material";
import { Avatar, Box, IconButton, Paper, Stack } from "@mui/material";
import MyButton from "./MyButton";
import ClickedSettings from "./ClickedSettings";
const Controls = () => {
  const [mySettings, setMySettings] = React.useState(false);
  const [myAvatar, setMyAvatar] = React.useState(false);
  const [bgc, setBgc] = React.useState({
    chats: false,
    calls: false,
    status: false,
    settings: false,
    avatar: false,
  });
  const RepeatedButton = ({
    icon,
    name,
    chats,
    calls,
    status,
    settings,
    avatar,
    display,
    menu,
    content1,
    content2,
    onClick,
  }) => {
    const [show, setShow] = React.useState(false);
    return (
      <Box sx={{ position: "relative" }} onClick={onClick}>
        <Paper
          elevation={4}
          sx={{
            display: menu,
            borderRadius: "8px",
            position: "absolute",
            top: -510,
            left: 40,
            height: "548px",
            width: "488px",
            backgroundColor: "#202020",
            zIndex: 4,
            overflow: "hidden",
          }}
        >
          <Stack
            display="flex"
            direction="row"
            id="menu"
            sx={{ height: "100%" }}
          >
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
                  <Storage
                    sx={{ ml: 0.5, color: "white", fontSize: "1.1rem" }}
                  />
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

            {content2}
          </Stack>
        </Paper>
        <IconButton
          sx={{
            position: "relative",
            borderRadius: 1,
            overflowY: "hidden",
            backgroundColor: name && "#404040",
            "&:hover": {
              backgroundColor: "#404040",
            },
            "&::after": {
              content: `""`,
              display: "block",
              position: "absolute",
              left: 0,
              bottom: show ? 10 : -20,
              height: "16px",
              width: "3px",
              borderRadius: "25%",
              backgroundColor: "#25D366",
              transition: "all 0.35s",
            },
          }}
          onClick={() => {
            setBgc({
              chats: chats,
              calls: calls,
              status: status,
              settings: settings,
              avatar: avatar,
            });
          }}
          onMouseLeave={() => setShow(false)}
          onMouseEnter={() => setShow(true)}
        >
          <Box
            sx={{
              display: display,
              position: "absolute",
              width: "10px",
              height: "10px",
              backgroundColor: "#25D366",
              border: "1px solid black",
              borderRadius: "50%",
              top: 5,
              right: 7,
              zIndex: 1,
            }}
          ></Box>
          {icon}
        </IconButton>
      </Box>
    );
  };

  const handleSettings = () => {
    setMyAvatar(false);
    setMySettings(!mySettings);
  };
  const handleAvatar = () => {
    setMySettings(false);
    setMyAvatar(!myAvatar);
  };
  return (
    <Stack
      display="flex"
      direction="column"
      spacing={0.5}
      sx={{
        pt: 5,
        pb: 5,
        pl: 0.5,
        pr: 0.5,
        height: "100%",
        position: "relative",
      }}
    >
      <RepeatedButton
        name={bgc.chats}
        menu="none"
        chats={true}
        calls={false}
        status={false}
        settings={false}
        avatar={false}
        icon={
          <ChatOutlined
            fontSize="small"
            sx={{
              position: "relative",
              color: "white",
              display: "block",
            }}
          />
        }
      />
      <RepeatedButton
        name={bgc.calls}
        menu="none"
        chats={false}
        calls={true}
        satus={false}
        settings={false}
        avatar={false}
        display="none"
        icon={
          <PhoneOutlined
            fontSize="small"
            sx={{
              position: "relative",
              color: "white",
              display: "block",
            }}
          />
        }
      />

      <RepeatedButton
        name={bgc.status}
        menu="none"
        chats={false}
        calls={false}
        status={true}
        settings={false}
        avatar={false}
        icon={
          <TrackChangesOutlined
            fontSize="small"
            sx={{
              position: "relative",
              color: "white",
              display: "block",
            }}
          />
        }
      />

      <Stack
        display="flex"
        direction="column"
        justifyContent="end"
        spacing={1}
        sx={{ height: "100%", width: "100%" }}
      >
        <RepeatedButton
          icon={
            <SettingsOutlined
              fontSize="small"
              sx={{
                position: "relative",
                color: "white",
                display: "block",
              }}
            />
          }
          name={bgc.settings}
          chats={false}
          calls={false}
          status={false}
          settings={true}
          avatar={false}
          display="none"
          menu={!mySettings && "none"}
          onClick={() => handleSettings()}
          content2={<ClickedSettings />}
        />

        <RepeatedButton
          icon={
            <Avatar
              src="https://lh3.googleusercontent.com/ogw/AOh-ky25pSnQrZFk4WRSyYizIA70cIK6kyVI6VRWR0ZFpQ=s32-c-mo"
              sx={{ width: 24, height: 24 }}
            />
          }
          name={bgc.avatar}
          menu={!myAvatar && "none"}
          chats={false}
          calls={false}
          status={false}
          settings={false}
          avatar={true}
          display="none"
          content2={<ClickedSettings />}
          onClick={() => handleAvatar()}
        />
      </Stack>
    </Stack>
  );
};

export default Controls;
