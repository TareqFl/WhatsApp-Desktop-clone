import { DoneAll, PushPin } from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { Scrollbar } from "smooth-scrollbar-react";
// import { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import "./styles.css";

const AllChats = () => {
  const imgSrc =
    "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  const RepeatedChats = () => {
    return (
      <Stack
        dsplay="flex"
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={1}
        sx={{
          p: 1,
          "&:hover": { cursor: "pointer", backgroundColor: "#505050" },
          borderRadius: "4px",
        }}
      >
        <Avatar src={imgSrc} sx={{ width: 50, height: 50 }} />
        <Stack display="flex" direction="column" flex={1}>
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              fontWeight="bold"
              sx={{ color: "white", fontSize: "0.9rem" }}
            >
              Notes and other matter
            </Typography>

            <Typography
              fontWeight="bold"
              sx={{ color: "white", fontSize: "0.7rem" }}
            >
              6:11 PM
            </Typography>
          </Stack>
          {/* End Of Top Side */}
          {/* Bottom Side */}
          <Stack
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
          >
            <Stack display="flex" direction="row" spacing={0.5}>
              <DoneAll fontSize="small" color="primary" />
              <Typography sx={{ color: "white", fontSize: "small" }}>
                previous chat
              </Typography>
            </Stack>
            <PushPin
              sx={{
                color: "white",
                fontSize: "0.9rem",
                transform: "rotate(45deg)",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    );
  };

  const chts = 15;
  let chtsArray = [];
  for (let i = 0; i < chts; i++) {
    chtsArray.push(<RepeatedChats />);
  }
  return (
    <Stack
      display="flex"
      direction="column"
      spacing={1}
      sx={{
        pl: 1,
        pr: 1,
        overflowY: "auto",
      }}
    >
      <Scrollbar
        plugins={{
          overscroll: {
            effect: "bounce",
          },
        }}
      >
        {chtsArray.map((cht, idx) => {
          return <RepeatedChats key={idx} />;
        })}
      </Scrollbar>
    </Stack>
  );
};

export default AllChats;
