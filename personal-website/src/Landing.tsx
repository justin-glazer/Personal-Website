import { AppBar } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';

function Landing(){
    return (
        <>
          <Navbar page='Home'/>
          <div style={{display: 'flex', flexDirection: 'column'}}> {/* App Content*/}
            <div> {/* Left Half*/}

            </div> {/* Left Half END*/}
            <div> {/* Right Half*/}

            </div> {/* Right Half END*/}
          </div> {/* App Content END*/}
          
        </>
    )
}

export default Landing;