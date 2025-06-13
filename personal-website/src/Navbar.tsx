import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Box, Typography, IconButton } from '@mui/material';
import { useMediaQuery } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import pic from './attachments/SPort_Square.png';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ResponsiveNav from './ResponsiveNav';

type type = {
    page: string
}

function Navbar({page}: type) {
    
    const home = page==='Home';
    const project = page==='Projects';
    const work = page==='Work'

    const theme = useTheme();
    const responsiveNav = useMediaQuery(theme.breakpoints.down('sm'));

    const [showResponsiveNav, setShowResponsiveNav] = useState(false);

    const openResponsiveNav = () => {
        setShowResponsiveNav(true);
    }

    const closeResponsiveNav = () => {
        setShowResponsiveNav(false);
    }

    
    return(
        <AppBar position="static" sx={{display: 'flex', flexDirection: 'row', justifyContent: responsiveNav? 'space-between' : 'flex-start', boxShadow: 'none', height: '125px', padding: '0' }}>
            <div>
                <a href='/'>
                    <img src={pic} alt='Justin' style={{marginLeft: responsiveNav? '2rem' : '4rem', marginTop: '1rem', borderRadius: '50rem', justifyContent: 'center', alignContent: 'center', height:'5.5rem', width: '5.5rem'}}></img>
                </a>
            </div>
            {responsiveNav ? (
                <div style={{display: 'flex', marginRight: '2rem'}}>
                    <IconButton onClick={openResponsiveNav}>
                        <MenuIcon/>
                    </IconButton> 
                    
                    {showResponsiveNav && (
                        <>
                            <ResponsiveNav
                            onClose={closeResponsiveNav} 
                            
                            />
                        </>)}
                </div>
                ) : (<div style={{marginLeft: '4rem', alignContent: 'center'}}>
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
                </div>)}  
        </AppBar> 
    )
}

export default Navbar