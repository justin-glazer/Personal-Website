import { AppBar } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';

function Landing(){
    return (
        <>
          <Navbar page='Home'/>
          <h1>Justin's Personal Website</h1>
        </>
    )
}

export default Landing;