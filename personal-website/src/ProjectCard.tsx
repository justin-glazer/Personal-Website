import React from "react";
import jobPic from './attachments/job.png'
import tomPic from './attachments/tom.png'
import { Typography, Box } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';



const map = new Map();
map.set('Job Capyture', {description: 'Jobs and such HI i AM TYPING today', img: jobPic, startDate: 'December 2024', endDate: 'January 2025', gh: 'https://github.com/heavens-potato/winter-project'})
map.set('T.O.M', {description: 'Tom Cat', img: tomPic, startDate: 'May 2024', endDate: 'August 2024', gh: 'https://github.com/om-arya/T.O.M'})

type type = {
    name: string
}

function ProjectCard({name}: type) {
    return (
        <>
            <div style ={{margin: '1rem 4rem 1rem 4rem', flexDirection: 'column', borderRadius: '1.25rem', backgroundColor: 'gray'}}>
                <Typography align="center">{name}</Typography>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{flexDirection: 'column', justifyItems: 'center', width: '40%'}}>
                        <img src={map.get(name).img} alt={name} style={{width: '15rem', height: '15rem'}}></img>
                        <Typography>{map.get(name).startDate} - {map.get(name).endDate}</Typography>
                        <GitHubIcon 
                        sx={{alignContent: 'center', '&:hover': {
                            cursor: 'pointer'
                        },}}
                        onClick={()=> window.open(map.get(name).gh, "_blank")}>GitHub!</GitHubIcon>
                    </div>
                    <div style={{width: '60%', display: 'flex', justifyContent: 'center'}}>
                        <Typography>{map.get(name).description}</Typography>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard