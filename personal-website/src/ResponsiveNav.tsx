import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


type type = {
    selected: string
}

type typeC = {
    onClose: () => void
}

function ResponsiveNav ({onClose}: typeC) {
    
    return (
        <>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <HighlightOffIcon onClick={onClose} sx={{cursor: 'pointer' }} />
                <Button component={Link} to="/" 
                        sx={{padding: '0 0.5rem 0 0.5rem', borderRadius: '1rem', color: 'black', fontSize: '30px', fontWeight: 'bold', 
                        '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                        }, }}>Home</Button>
                    <Button component={Link} to="/Projects" 
                        sx={{padding: '0 0.5rem 0 0.5rem', borderRadius: '1rem', marginLeft: '1.5rem', color: 'black', fontSize: '30px', fontWeight: 'bold', 
                        '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                        },
                        }}>Projects</Button>
                    <Button component={Link} to="/Work" 
                        sx={{padding: '0 0.5rem 0 0.5rem', borderRadius: '1rem', marginLeft: '1.5rem', color: 'black', fontSize: '30px', fontWeight: 'bold', 
                        '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                        },
                        }}>Work</Button>
            </Box>
        </>
    )
}

export default ResponsiveNav;