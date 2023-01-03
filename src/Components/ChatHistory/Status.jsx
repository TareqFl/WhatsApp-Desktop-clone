import { Stack, Typography } from "@mui/material";
import React from "react";
import RepeatedCard from "./RepeatedCard";

const Status = () => {
  let cardArray = [];
  let i;
  for (i = 0; i < 4; i++) {
    cardArray.push("haha");
  }
  const imgSrc = [
    "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1441123694162-e54a981ceba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    "https://images.unsplash.com/photo-1533101585792-27f81a845550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ];

  let nms = ["Bro", "❤️", "Adam", "Grandpa ❤️"];
  return (
    <Stack display="flex" direction="column" spacing={2} sx={{ pl: 2, pr: 2 }}>
      <RepeatedCard
        source="https://lh3.googleusercontent.com/ogw/AOh-ky25pSnQrZFk4WRSyYizIA70cIK6kyVI6VRWR0ZFpQ=s32-c-mo"
        name="My status"
        condition={
          <Typography sx={{ color: "darkgray", fontSize: "0.9rem" }}>
            No updates
          </Typography>
        }
      />
      <Typography sx={{ color: "darkgray", fontSize: "0.8rem", pl: 1 }}>
        Recent updates
      </Typography>

      {cardArray.map((crd, idx) => {
        return (
          <RepeatedCard
            key={idx}
            source={imgSrc[idx]}
            name={nms[idx]}
            condition={
              <Typography sx={{ color: "darkgray", fontSize: "0.9rem" }}>
                Yesterday, 11:27pm
              </Typography>
            }
          />
        );
      })}
    </Stack>
  );
};

export default Status;
