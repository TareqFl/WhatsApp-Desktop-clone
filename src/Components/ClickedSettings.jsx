import { KeyboardArrowDown, PaletteOutlined } from "@mui/icons-material";
import {
  Box,
  Stack,
  Switch,
  Typography,
  styled,
  Paper,
  Divider,
} from "@mui/material";
import React from "react";

const ClickedSettings = () => {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 45,
    height: 21,
    padding: 0,
    border: "2px solid #C0c0c0",
    borderRadius: "24px",
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 10,
      height: 10,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));
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
          <AntSwitch />
          <Typography color="white" sx={{ fontSize: "0.9rem" }}>
            Off
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
