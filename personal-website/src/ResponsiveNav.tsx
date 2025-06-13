import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useTheme } from '@mui/material/styles';

type type = {
    selected: string
}

type typeC = {
    onClose: () => void
}

function ResponsiveNav ({onClose}: typeC) {
    const theme = useTheme();

    return (
        <div style={{position: 'absolute', width: '40%', zIndex: '50', height: '100%', right: '0', backgroundColor: theme.palette.primary.main}}>
            <Box sx={{display: 'flex', flexDirection: 'column', backgroundColor: theme.palette.primary.main}}>
                <HighlightOffIcon onClick={onClose} sx={{borderRadius: '1rem', color: 'black', position: 'absolute', top: '1rem', right: '1rem', cursor: 'pointer', 
                        '&:hover': {
                        backgroundColor: 'white',
                        },}} />
                <Button component={Link} to="/" 
                        sx={{border: '3px solid black', margin: '3rem 1rem 0.5rem 1rem', padding: '0 0.5rem 0 0.5rem', borderRadius: '1rem', color: 'black', fontSize: '30px', fontWeight: 'bold', 
                        '&:hover': {
                        backgroundColor: 'white',
                        }, }}>Home</Button>
                    <Button component={Link} to="/Projects" 
                        sx={{border: '3px solid black', margin: '0.5rem 1rem 0.5rem 1rem', padding: '0 0.5rem 0 0.5rem', borderRadius: '1rem', color: 'black', fontSize: '30px', fontWeight: 'bold', 
                        '&:hover': {
                        backgroundColor: 'white',
                        },
                        }}>Projects</Button>
                    <Button component={Link} to="/Work" 
                        sx={{border: '3px solid black', margin: '0.5rem 1rem 0 1rem', padding: '0 0.5rem 0 0.5rem', borderRadius: '1rem', color: 'black', fontSize: '30px', fontWeight: 'bold', 
                        '&:hover': {
                        backgroundColor: 'white',
                        },
                        }}>Work</Button>
            </Box>
        </div>
    )
}

export default ResponsiveNav;