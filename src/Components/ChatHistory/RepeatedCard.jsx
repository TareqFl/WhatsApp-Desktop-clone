import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

const RepeatedCard = ({ source, name, icon, icon2, condition, date }) => {
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
      <Avatar src={source} sx={{ width: 50, height: 50 }} />
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
            {name}
          </Typography>

          <Typography
            fontWeight="bold"
            sx={{ color: "white", fontSize: "0.7rem" }}
          >
            {date}
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
            {icon}

            {condition}
          </Stack>
          {icon2}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RepeatedCard;
