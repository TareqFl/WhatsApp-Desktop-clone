import {
  MoreHoriz,
  NoteAltOutlined,
  SearchOutlined,
  WhatsApp,
} from "@mui/icons-material";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import AllChats from "./AllChats";

const Chats = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        backgroundColor: "#202020",
        maxWidth: "465px",
        minWidth: "350px",
        height: "100vh",
      }}
    >
      <Stack
        display="flex"
        direction="column"
        spacing={2}
        sx={{ height: "100%" }}
      >
        <Stack
          display="flex"
          direction="row"
          spacing={0.5}
          justifyContent="start"
          alignItems="center"
          sx={{ pl: 1, pr: 1, mt: 1 }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&::after": {
                content: `""`,
                display: "block",
                backgroundColor: "#25D366",
                position: "absolute",
                width: 20,
                height: 20,
                borderRadius: "50%",
                zIndex: 0,
              },
            }}
          >
            <WhatsApp
              sx={{
                color: "white",
                position: "relative",
                zIndex: 2,
              }}
            />
          </Box>
          <Typography fontSize="0.7rem" color="white">
            WhatsApp
          </Typography>
        </Stack>

        {/* Make New Chat and settings */}
        <Stack
          display="flex"
          direction="row"
          alignItems="center"
          sx={{ pl: 3, pr: 3 }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" color="white" fontWeight="bold">
              Chats
            </Typography>
          </Box>

          <IconButton
            sx={{
              borderRadius: "4px",
              width: "56px",
              "&:hover": {
                backgroundColor: "#303030",
              },
            }}
          >
            <NoteAltOutlined fontSize="small" sx={{ color: "white" }} />
          </IconButton>

          <IconButton
            sx={{
              borderRadius: "4px",
              width: "56px",
              "&:hover": {
                backgroundColor: "#303030",
              },
            }}
          >
            <MoreHoriz fontSize="small" sx={{ color: "white" }} />
          </IconButton>
        </Stack>

        {/* Search Bar */}
        <Box
          sx={{
            pl: 3,
            pr: 3,
            input: {
              width: "100%",
              backgroundColor: "#202020",
              border: "none",
              outline: "none",
              display: "block",
              borderRadius: "2px",
              color: "white",
              p: 1,
            },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#202020",
              border: "1px solid #303030",
              borderBottom: "2px solid #00A884",
              position: "relative",
            }}
          >
            <SearchOutlined
              sx={{
                color: "#909090",
                fontSize: "1rem",
                transform: "rotate(90deg)",
                position: "absolute",
                right: 7,
                top: 7,
              }}
            />
            <input placeholder="Search or start a new chat" />
          </Paper>
        </Box>
        {/* End Of Search Bar */}

        <AllChats />
      </Stack>
    </Paper>
  );
};

export default Chats;
