import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useFirebaseAuthentication } from '../../utils/firebase';


export default function Navbar({setIsSideBarOpen}) {
  const navList = [
    {name:"ANASAYFA",link:"/"},
    {name:"HAKKIMIZDA",link:"about"},
    {name:"HİZMETLERİMİZ",link:"services"},
    {name:"MEDYA",link:"media"},
    {name:"İLETİŞİM",link:"communication"},
    {name:"GÖRÜŞ VE ÖNERİ",link:"suggestionandopinion"}]

  const authUser = useFirebaseAuthentication();
  return (
    <Box sx={{ flexGrow: 1, margin:"0 px",width:"100%" }}>
      <AppBar className='nav-bar'  position="static" >
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
            {navList.map((item,index)=>{
              return(
                <Link key={index} href={item.link}  >
                  <Button key={index} color="inherit">{item.name} </Button>
                </Link>
              )
            })}
          {authUser ?(<Link href="/dashboard"  >
                  <Button  color="inherit">Dashboard </Button>
                </Link>):null }
        </Toolbar>
      </AppBar>
    </Box>
  );
}