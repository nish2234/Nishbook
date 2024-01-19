import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Input,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import styled from "@emotion/styled";
import profile from "./images/profile.png";
import Emoji from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function Add(props) {
  const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const [open, setopen] = useState(false);
  const handleopen = () => {
    setopen(true);
  };

  const handleclose = () => {
    setopen(false);
    console.log(open);
  };

  const handleclick = ()=>{
 
    handleclose();
  }
  return (
    <>
      <Tooltip title="Add post" placement="right">
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: 15, left: 15 }}
          onClick={handleopen}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={handleclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={330} height={300} bgcolor={"background.default"} color={"text.primary"} borderRadius={8} p={2}>
          <Typography variant="h6" fontWeight={400}>
            Create a new post
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ marginTop: "10px" }}
            alignItems="center"
          >
            <Avatar alt="Remy Sharp" src={profile} />
            <Typography variant="p" fontWeight={200}>
              Nishant Singh
            </Typography>
          </Stack>
          <TextField
            id="standard-multiline-flexible"
            sx={{ width: "100%", marginTop: "20px" }}
            multiline
            rows={3}
            placeholder="What do you want to write..."
            variant="standard"
          />
          <Stack direction="row" spacing={1} sx={{ marginTop: "10px" }}>
            <Emoji color="primary" />
            <ImageIcon color="secondary" />
            <AudioFileIcon color="warning" />
            <AutoFixHighIcon color="success" />
          </Stack>

          <ButtonGroup variant="contained" sx={{ marginTop: "30px" }} fullWidth={true} aria-label="outlined button group">
            <Button onClick={handleclick} >POST</Button>
            <Button sx={{width:"100px"}}><CalendarMonthIcon/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
