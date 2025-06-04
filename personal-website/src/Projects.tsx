import React from "react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

function Project() {
    return (
        <>
          <Navbar page = 'Projects'/>
          <h1>PROJECT</h1>
          <div>
            <ProjectCard name='Job Capyture'/>
            <ProjectCard name='T.O.M'/>
          </div>
        </>
    )
}

export default Project