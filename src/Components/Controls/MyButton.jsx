import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const MyButton = ({ icon, text, color }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: "100%",
        backgroundColor: color,
        position: "relative",
        p: 0.2,
        "&:hover": {
          backgroundColor: "#404040",
          cursor: "default",
        },
      }}
    >
      <Stack
        display="flex"
        direction="row"
        justifyContent="start"
        alignItems="center"
        spacing={2}
        sx={{ p: 0.5 }}
      >
        {icon}
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="white" sx={{ fontSize: "0.9rem" }}>
            {text}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default MyButton;
