import { KeyboardArrowDown, PaletteOutlined } from "@mui/icons-material";
import { Box, Stack, Typography, Paper, Divider } from "@mui/material";
import React from "react";

const ClickedSettings = () => {
  const [mySwitch, setSwitch] = React.useState(false);

  const MySwitch = () => {
    return (
      <Paper
        elevation={0}
        sx={{
          width: 43,
          height: 19,
          borderRadius: 18,
          backgroundColor: mySwitch ? "#00A884" : "#303030",
          position: "relative",
          display: "flex",
          alignItems: "center",
          border: !mySwitch && "2px solid #898989",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: mySwitch ? "#029174" : "#393939",
          },
        }}
        onClick={() => setSwitch(!mySwitch)}
      >
        <Box
          sx={{
            width: 10,
            height: 10,
            backgroundColor: mySwitch ? "black" : "white",
            borderRadius: 50,
            position: "absolute",
            left: mySwitch ? "30px" : "4px",
            transition: "left 0.35s",
          }}
        ></Box>
      </Paper>
    );
  };

  return (
    <Stack
      display="flex"
      direction="column"
      spacing={2}
      sx={{ flexGrow: 1, backgroundColor: "#303030", pt: 3, pl: 2, pr: 2 }}
    >
      <Typography color="white" sx={{ fontSize: "1.2rem" }}>
        General
      </Typography>

      <Stack display="flex" direction="column" spacing={1}>
        <Typography color="white" sx={{ fontSize: "1.1rem" }}>
          Login
        </Typography>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ color: "#808080", fontSize: "0.9rem" }}>
              Start WhatsApp at login
            </Typography>
          </Box>
          <MySwitch />
          <Typography color="white" sx={{ fontSize: "0.9rem", color: "white" }}>
            {mySwitch ? "On" : "Off"}
          </Typography>
        </Stack>
      </Stack>

      <Stack display="flex" direction="column" spacing={0.5}>
        <Typography color="white" sx={{ fontSize: "1.1rem" }}>
          Theme
        </Typography>
        <Typography sx={{ color: "#808080", fontSize: "0.8rem" }}>
          App color theme
        </Typography>

        <Paper
          elevation={1}
          sx={{
            backgroundColor: "#393939",
            p: 1,
            width: 220,
            "&:hover": {
              backgroundColor: "#404040",
            },
          }}
        >
          <Stack display="flex" direction="row" alignItems="center" spacing={1}>
            <PaletteOutlined
              sx={{
                color: "white",
                fontSize: "1.3rem",
                transform: "rotate(90deg)",
              }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography color="white" sx={{ fontSize: "0.8rem" }}>
                System default
              </Typography>
            </Box>
            <KeyboardArrowDown sx={{ color: "#c0c0c0", fontSize: "1.1rem" }} />
          </Stack>
        </Paper>
      </Stack>

      <Stack display="flex" direction="column" spacing={1}>
        <Typography color="white" sx={{ fontSize: "1rem" }}>
          Typing
        </Typography>
        <Typography sx={{ color: "darkgray", fontSize: "0.83rem" }}>
          Change typing settings for{" "}
          <span style={{ fontWeight: "bold", color: "#b0b0b0" }}>
            autocorrect
          </span>{" "}
          and{" "}
          <span style={{ fontWeight: "bold", color: "#b0b0b0" }}>
            misspelt highlight
          </span>{" "}
          from{" "}
          <span style={{ textDecoration: "underline", color: "#00A884" }}>
            Window Settings
          </span>
          .
        </Typography>
      </Stack>

      <Divider sx={{ backgroundColor: "#505050" }} />
      <Stack display="flex" direction="column" spacing={1}>
        <Paper
          elevation={1}
          sx={{
            backgroundColor: "#393939",
            p: 1,
            width: 70,
            "&:hover": {
              backgroundColor: "#404040",
            },
          }}
        >
          <Typography
            textAlign="center"
            color="white"
            sx={{ fontSize: "0.8rem" }}
          >
            Log out
          </Typography>
        </Paper>
        <Typography sx={{ color: "#999999", fontSize: "0.88rem" }}>
          Your chat history will be cleared when you log out
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ClickedSettings;
