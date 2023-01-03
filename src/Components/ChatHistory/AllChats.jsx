import { DoneAll, PushPin } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { Scrollbar } from "smooth-scrollbar-react";
import RepeatedCard from "./RepeatedCard";
// import { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";

const AllChats = () => {
  const imgSrc =
    "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

  const chts = 15;
  let chtsArray = [];
  for (let i = 0; i < chts; i++) {
    chtsArray.push(<RepeatedCard />);
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
          return (
            <RepeatedCard
              key={idx}
              source={imgSrc}
              name={"Notes and Other matter"}
              icon={<DoneAll fontSize="small" color="primary" />}
              condition={
                <Typography sx={{ color: "white", fontSize: "small" }}>
                  previous chat
                </Typography>
              }
              icon2={
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
              }
              date={"6:11 PM"}
            />
          );
        })}
      </Scrollbar>
    </Stack>
  );
};

export default AllChats;
