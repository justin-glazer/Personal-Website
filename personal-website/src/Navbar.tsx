import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Box, Typography } from '@mui/material';
import pic from './attachments/SPort_Square.png'

type type = {
    page: string
}

function Navbar({page}: type) {
    return(
        <AppBar position="static" sx={{flexDirection: 'row', boxShadow: 'none', height: '125px', padding: '0' }}>
            <div>
                <a href='/'>
                    <img src={pic} alt='Justin' style={{marginTop: '0.5rem', marginLeft: '1rem', borderRadius: '50rem', justifyContent: 'center', alignContent: 'center', height:'7rem', width: '7rem'}}></img>
                </a>
            </div>
            <div style={{marginLeft: '5rem'}}>
                <Button component={Link} to="/" sx={{ color: 'primary.light', fontSize: '30px', fontWeight: 'bold' }}>Home</Button>
                <Button component={Link} to="/Projects" sx={{ color: 'primary.light', fontSize: '30px', fontWeight: 'bold' }}>Projects</Button>
            </div>
        </AppBar> 
    )
}

export default Navbar