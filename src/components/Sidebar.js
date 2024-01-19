import { Box, List, ListItem, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import PagesIcon from '@mui/icons-material/Pages';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Sidebar(props) {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      
    >
      <Box position="fixed">
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeIcon/>
          </ListItemIcon>
          <ListItemText component="a" href="#" primary="Homepage"/>
         
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PagesIcon/>
          </ListItemIcon>
          <ListItemText component="a" href="#" primary="Pages" />
         
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupIcon/>
          </ListItemIcon>
          <ListItemText component="a" href="#" primary="Groups" />
         
        </ListItem>
        
        <ListItem>
          <ListItemIcon>
            <StorefrontIcon/>
          </ListItemIcon>
          <ListItemText component="a" href="#" primary="Marketplace" />
         
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Diversity1Icon/>
          </ListItemIcon>
          <ListItemText component="a" href="#" primary="Friends" />
         
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SettingsIcon/>
          </ListItemIcon>
          <ListItemText component="a" href="#" primary="Settings" />
         
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AccountBoxIcon/>
          </ListItemIcon>
          <ListItemText component="a" href="#" primary="Profile" />
         
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DarkModeIcon/>
          </ListItemIcon>

          <Switch
            edge="end"
            onChange={e=>props.setMode(props.mode === "light" ? "dark" : "light")}
         
            inputProps={{
              "aria-labelledby": "switch-list-label-wifi",
            }}
          />
         
        </ListItem>
      </List>
      </Box>
      
    </Box>
  );
}

export default Sidebar;
