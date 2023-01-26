import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';


export default function Navbar({setIsSideBarOpen}) {
  return (
    <Box sx={{ flexGrow: 1, margin:"0 px" }}>
      <AppBar position="static">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>setIsSideBarOpen(true)}
          >
            <MenuIcon />
            </IconButton>
           <Link href="/#" >
            <Button color="inherit">Test1</Button>
           </Link>
            <Button color="inherit">Test2</Button>
            <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}