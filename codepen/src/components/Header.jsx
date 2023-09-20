import React from 'react'
import { AppBar,Toolbar} from '@mui/material'




function Header() {
    
    return (
        <>
        <AppBar sx={{ bgcolor: "white" , height : "9vh", position:"static"}}>
            <Toolbar>
                <img src='https://assets.codepen.io/t-1/codepen-logo.svg' style={{width:150}}  alt='logo'></img>
            </Toolbar>
        </AppBar>
        </>
  )
}

export default Header