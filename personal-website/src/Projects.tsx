import React from "react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import './Projects.css';


function Project() {
    return (
        <>
          <Navbar page = 'Projects'/>
          <h1>PROJECT</h1>
          <div className='projectDiv'>
                <ProjectCard name='Job Capyture'/>
                <ProjectCard name='T.O.M'/>
                <div style={{alignSelf: 'center'}}>
                    <ProjectCard name='T.O.M'/>
                </div>
          </div>
        </>
    )
}

export default Project