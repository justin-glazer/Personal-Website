import React from "react";
import jobPic from './attachments/job.png'
import tomPic from './attachments/tom.png'
import { Typography, Box } from "@mui/material";


const map = new Map();
map.set('Job Capyture', {description: 'Jobs and such', img: jobPic, startDate: 'December 2024', endDate: 'January 2025', gh: 'https://github.com/heavens-potato/winter-project'})
map.set('T.O.M', {description: 'Tom Cat', img: tomPic, startDate: 'May 2024', endDate: 'August 2024', gh: 'https://github.com/om-arya/T.O.M'})

type type = {
    name: string
}

function ProjectCard({name}: type) {
    return (
        <>
            <div style ={{margin: '1rem 1rem 1rem 1rem', flexDirection: 'column', borderRadius: '1.25rem', backgroundColor: 'gray'}}>
                <Typography align="center">{name}</Typography>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
                        <img src={map.get(name).img} alt={name} style={{justifyContent: 'center', alignContent: 'center', width: '15rem', height: '15rem'}}></img>
                        <Typography>{map.get(name).startDate} - {map.get(name).endDate}</Typography>
                    </div>
                    <div>
                        <Typography>{map.get(name).description}</Typography>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard