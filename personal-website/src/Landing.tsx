import { AppBar, Typography } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';

function Landing(){
    return (
        <>
          <Navbar page='Home'/>
          <div style={{display: 'flex', flexDirection: 'row', margin: '0 1rem 0 1rem'}}> {/* App Content*/}
            <div style={{display: 'flex', flexDirection: 'column', width: '60%'}}> {/* Left Half*/}
              <div style={{backgroundColor: 'gray'}}> {/* About Me */}
                <Typography sx={{textAlign: 'center'}}>About Me</Typography>
                <Typography>ABOUT ME HERE</Typography>
              </div>
            </div> {/* Left Half END*/}
            <div style={{width: '40%'}}> {/* Right Half*/}
              <Typography>Hey~</Typography>
            </div> {/* Right Half END*/}
          </div> {/* App Content END*/}
          
        </>
    )
}

export default Landing;