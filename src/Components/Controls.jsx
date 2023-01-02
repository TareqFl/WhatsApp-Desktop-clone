import React from "react";
import {
  ChatOutlined,
  PhoneOutlined,
  SettingsOutlined,
  TrackChangesOutlined,
} from "@mui/icons-material";
import { Avatar, Box, IconButton, Stack } from "@mui/material";
import MyMenu from "./MyMenu";
const Controls = () => {
  const [bgc, setBgc] = React.useState({
    chats: false,
    calls: false,
    status: false,
    settings: false,
    avatar: false,
  });

  const [showMenu, setShowMenu] = React.useState(false);
  const [page, setPage] = React.useState(false);
  const RepeatedButton = ({
    icon,
    name,
    chats,
    calls,
    status,
    settings,
    avatar,
    display,
    onClick,
  }) => {
    const [show, setShow] = React.useState(false);
    return (
      <Box sx={{ position: "relative" }} onClick={onClick}>
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
  const handleMenu = (page) => {
    setShowMenu(!showMenu);
    setPage(page);
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
        display: { xs: "none", sm: "flex" },
      }}
    >
      <MyMenu menu={showMenu} page={page} />
      <RepeatedButton
        name={bgc.chats}
        menu="none"
        chats={true}
        calls={false}
        status={false}
        settings={false}
        avatar={false}
        onClick={() => setShowMenu(false)}
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
        onClick={() => setShowMenu(false)}
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
        onClick={() => setShowMenu(false)}
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
          onClick={() => handleMenu(false)}
        />

        <RepeatedButton
          icon={
            <Avatar
              src="https://lh3.googleusercontent.com/ogw/AOh-ky25pSnQrZFk4WRSyYizIA70cIK6kyVI6VRWR0ZFpQ=s32-c-mo"
              sx={{ width: 24, height: 24 }}
            />
          }
          name={bgc.avatar}
          chats={false}
          calls={false}
          status={false}
          settings={false}
          avatar={true}
          display="none"
          onClick={() => handleMenu(true)}
        />
      </Stack>
    </Stack>
  );
};

export default Controls;
