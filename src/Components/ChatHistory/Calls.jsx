import {
  PhoneMissedOutlined,
  PhoneOutlined,
  VideocamOutlined,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";
import RepeatedCard from "./RepeatedCard";

const Calls = () => {
  const imgSrc = [
    "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1441123694162-e54a981ceba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    "https://images.unsplash.com/photo-1533101585792-27f81a845550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ];

  let nms = ["Bro", "❤️", "Adam", "Grandpa ❤️"];
  let icns = [
    <VideocamOutlined sx={{ fontSize: "1.1rem", color: "darkgray" }} />,
    <PhoneOutlined sx={{ fontSize: "1.1rem", color: "darkgray" }} />,
    <PhoneMissedOutlined sx={{ fontSize: "1.1rem", color: "#FF99A4" }} />,
    <PhoneMissedOutlined sx={{ fontSize: "1.1rem", color: "#FF99A4" }} />,
  ];
  let cndtn = ["Outgoing", "Incoming", "Missed", "Missed"];
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
      {imgSrc.map((cht, idx) => {
        return (
          <RepeatedCard
            key={idx}
            source={imgSrc[idx]}
            name={nms[idx]}
            icon={icns[idx]}
            icon2={<></>}
            condition={
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  color: idx === 0 || idx === 1 ? "darkgray" : "#FF99A4",
                }}
              >
                {cndtn[idx]}
              </Typography>
            }
            date={"6:11 PM"}
          />
        );
      })}
    </Stack>
  );
};

export default Calls;
