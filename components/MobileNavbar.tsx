import React from "react";
import Image from "next/image";
import alohaLogo from "../images/AlohaHeader.svg";
import stylesMobileHeader from "../styles/MobileNavbar.module.css";
import { Box, Button, List, ListItem, ListItemButton, ListItemText, Drawer } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

type Anchor = 'right';

export const MobileNavbar = () => {
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Surfing', 'Hula', 'Drafts'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return( <div className={stylesMobileHeader.mobileNavbarContainer}>
    <div className={stylesMobileHeader.logo}>
      <Image
        src={alohaLogo}
        alt="Picture of the logo"
      />
      </div>
      <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: 'black' }}/>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  </div>)
};

