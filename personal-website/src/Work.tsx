import React from "react";
import Navbar from "./Navbar";
import WorkCard from "./WorkCard";
import './ProjectsAndWork.css';

function Project() {
    return (
        <>
          <Navbar page = 'Work'/>
          <h1>PROJECT</h1>
          <div className='projWorkDiv'>
                <WorkCard name='Job Capyture'/>
                <WorkCard name='T.O.M'/>
                <div style={{alignSelf: 'center'}}>
                    <WorkCard name='T.O.M'/>
                </div>
          </div>
        </>
    )
}

export default Project