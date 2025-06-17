import React from "react";
import Navbar from "./Navbar";
import WorkCard from "./WorkCard";
import './ProjectsAndWork.css';
import { Typography } from "@mui/material";

function Project() {
    return (
        <>
          <Navbar page = 'Work'/>
          <Typography sx={{textAlign: 'center'}}>Work Experience</Typography>
          <div className='projWorkDiv'>
                <WorkCard name='Ryght AI'/>
                <WorkCard name='Pop Empanada'/>
                <WorkCard name="Goldberg's Original Bagels"/>
                <WorkCard name='Campgaw Mountain'/>
                <WorkCard name='Northern Counties Soccer Association'/>
                <WorkCard name='Life Time Inc.'/>
                <WorkCard name='Cyclesport'/>
          </div>
        </>
    )
}

export default Project