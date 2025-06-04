import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Box, Typography } from '@mui/material';
import pic from './attachments/SPort_Square.png'

type type = {
    page: string
}

function Navbar({page}: type) {
    
    const home = page=='Home';
    const project = page=='Projects';
    const work = page=='Work'
    
    return(
        <AppBar position="static" sx={{flexDirection: 'row', boxShadow: 'none', height: '125px', padding: '0' }}>
            <div>
                <a href='/'>
                    <img src={pic} alt='Justin' style={{marginLeft: '4rem', marginTop: '1rem', borderRadius: '50rem', justifyContent: 'center', alignContent: 'center', height:'5.5rem', width: '5.5rem'}}></img>
                </a>
            </div>
            <div style={{marginLeft: '4rem', alignContent: 'center'}}>
                <Button component={Link} to="/" 
                    sx={{padding: '0 0.5rem 0 0.5rem', borderRadius: '1rem', color: home? 'yellow' : 'black', fontSize: '30px', fontWeight: 'bold', 
                    '&:hover': {
                      backgroundColor: 'white',
                      color: 'black',
                    }, }}>Home</Button>
                <Button component={Link} to="/Projects" 
                    sx={{padding: '0 0.5rem 0 0.5rem', borderRadius: '1rem', marginLeft: '1.5rem', color: project? 'yellow' : 'black', fontSize: '30px', fontWeight: 'bold', 
                    '&:hover': {
                      backgroundColor: 'white',
                      color: 'black',
                    },
                    }}>Projects</Button>
                <Button component={Link} to="/Work" 
                    sx={{padding: '0 0.5rem 0 0.5rem', borderRadius: '1rem', marginLeft: '1.5rem', color: work? 'yellow' : 'black', fontSize: '30px', fontWeight: 'bold', 
                    '&:hover': {
                      backgroundColor: 'white',
                      color: 'black',
                    },
                    }}>Work</Button>
            </div>
        </AppBar> 
    )
}

export default Navbar