import React, { useState } from 'react'
import Navbar from '../Navbar';
import SideBar from '../SideBar';
const Layout = ({children}) => {

    const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
    console.log("isSideBarOpen",isSideBarOpen)
    //   const handleToogleSideBar = () => {
    //     setIsSideBarOpen(!isSideBarOpen);
    //   }
return(
    <div>
        <Navbar setIsSideBarOpen={setIsSideBarOpen} />
        <SideBar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>
        {children}
    </div>
    
  )
}

export default Layout