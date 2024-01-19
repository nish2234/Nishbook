import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import pf1 from './images/pf1.jpeg';
import pf2 from './images/pf2.jpeg';
import pf3 from './images/pf3.jpeg';
import pf4 from './images/pf4.jpeg';
import pf5 from './images/pf5.jpeg';
import pf6 from './images/pf6.jpeg';
import pf7 from './images/pf7.jpeg';

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight="100">
          Online friends
        </Typography>
        <AvatarGroup max={7} sx={{width:"20vw" , marginTop:"10px"}}>
          <Avatar alt="Remy Sharp" src={pf1} />
          <Avatar alt="Travis Howard" src={pf2} />
          <Avatar alt="Cindy Baker" src={pf3} />
          <Avatar alt="Agnes Walker" src={pf4} />
          <Avatar alt="Trevor Henderson" src={pf5}/>
          <Avatar alt="Trevor Henderson" src={pf6} />
          <Avatar alt="Trevor Henderson" src={pf7} />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight="100" sx={{marginTop:"10px"}}>
          Latest Photos
        </Typography>
        <ImageList sx = {{overflowY:"hidden" , width : "26vw" , marginTop:"10px"}} cols={3} rowHeight={164} gap = {8}>
          
            <ImageListItem >
              <img
                src="https://source.unsplash.com/random"
                alt="Hello"
              
              />
            </ImageListItem>
            <ImageListItem >
              <img
                src="https://source.unsplash.com/user/wsanter"
                alt="Hello"
                
              />
            </ImageListItem>
            <ImageListItem >
              <img
                src="https://source.unsplash.com/random/?city,night"
                alt="Hello"
                
              />
            </ImageListItem>
    
        </ImageList>
        <Typography variant="h6" fontWeight="100" sx={{marginTop:"10px"}} >
          Latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop:"10px"  }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={pf7} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={pf3} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={pf2}/>
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
