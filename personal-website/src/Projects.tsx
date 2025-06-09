import React from "react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

function Project() {
    return (
        <>
          <Navbar page = 'Projects'/>
          <h1>PROJECT</h1>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '0 1rem 0 1rem'}}>
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