import React from "react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import './ProjectsAndWork.css';
import { Typography } from "@mui/material";



function Project() {
    return (
        <>
          <Navbar page = 'Projects'/>
          <Typography sx={{textAlign: 'center'}}>Project Experience</Typography>
          <div className='projWorkDiv'>
                <ProjectCard name='Job Capyture'/>
                <ProjectCard name='T.O.M'/>
          </div>
        </>
    )
}

export default Project