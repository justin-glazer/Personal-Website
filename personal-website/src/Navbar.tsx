import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Button } from '@mui/material';

type type = {
    page: string
}

function Navbar({page}: type) {
    return(
        <AppBar position="static" sx={{flexDirection: 'row', boxShadow: 'none', height: '100px', padding: '0' }}>
            <div>
                <h1>{page}</h1>
            </div>
            <div>
                <Button component={Link} to="/" sx={{ color: 'primary.light', fontSize: '20px', fontWeight: 'bold' }}>Home</Button>
                <Button component={Link} to="/About" sx={{ color: 'primary.light', fontSize: '20px', fontWeight: 'bold' }}>About</Button>
                <Button component={Link} to="/Projects" sx={{ color: 'primary.light', fontSize: '20px', fontWeight: 'bold' }}>Projects</Button>
                <Button component={Link} to="/Contact" sx={{ color: 'primary.light', fontSize: '20px', fontWeight: 'bold' }}>Contact</Button>
            </div>
        </AppBar> 
    )
}

export default Navbar