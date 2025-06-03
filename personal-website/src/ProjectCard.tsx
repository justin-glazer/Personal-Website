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
            <div style ={{borderRadius: '1.25rem', backgroundColor: 'blue'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Typography>{name}</Typography>
                    <img src={map.get(name).img} alt={name} style={{justifyContent: 'center', width: '15rem', height: '15rem'}}></img>
                    <h2>{map.get(name).startDate} - {map.get(name).endDate}</h2>
                </Box>
                <div>
                    <h1>{map.get(name).description}</h1>
                </div>
            </div>
        </>
    )
}

export default ProjectCard