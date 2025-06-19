import React from "react";
import jobPic from './attachments/job.png'
import tomPic from './attachments/tom.png'
import { Typography, Box } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './ProjectsAndWork.css'
import { Launch } from "@mui/icons-material";



const map = new Map();
const string: String = 'Job Capyture simplifies and streamlines your career search with an organized and customizable way to manage applications. We aim to solve the chaos of tracking various opportunities across spreadsheets, emails, and scattered documents by offering a centralized, intuitive platform that visualizes both jobs and progress in a clear and coherent manner. Designed for career seekers at all levels, Job Capyture is a valuable asset that allows candidates to maintain confidence and clarity during the often overwhelming job application journey.';

map.set('Job Capyture', {description: string, img: jobPic, startDate: 'December 2024', endDate: 'January 2025', gh: 'https://github.com/heavens-potato/winter-project', url: 'https://job-capyture.vercel.app/'})
map.set('T.O.M', {description: 'Tom Cat', img: tomPic, startDate: 'May 2024', endDate: 'August 2024', gh: 'https://github.com/om-arya/T.O.M', url: 'https://tom-tfqal7zj2a-uk.a.run.app/'})

type type = {
    name: string
}

function ProjectCard({name}: type) {
    return (
        <>
            <div style ={{flexDirection: 'column', borderRadius: '1.25rem', backgroundColor: 'gray', padding: '0.5rem 0.5rem 0.5rem 0.5rem'}}>
                <Typography align="center" sx={{fontSize: {
                    xs: '1.5rem',
                    sm: '1.75rem',
                    md: '2rem',
                    lg: '2.3rem', }}}>{name}</Typography>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{flexDirection: 'column', justifyItems: 'center', width: '40%'}}>
                        <img className='projWorkImg' src={map.get(name).img} alt={name}></img>
                        <Typography sx={{fontSize: {
                            xs: '0.9rem',
                            sm: '0.975rem',
                            lg: '1.15rem', }}}>{map.get(name).startDate} - {map.get(name).endDate}</Typography>
                        <div style={{display: 'flex', flexDirection: 'row', gap: '0.5rem'}}>
                            <GitHubIcon 
                            sx={{alignContent: 'center', '&:hover': {
                                cursor: 'pointer'
                            },}}
                            onClick={()=> window.open(map.get(name).gh, "_blank")}>GitHub!</GitHubIcon>
                            <LaunchIcon 
                            sx={{alignContent: 'center', '&:hover': {
                                cursor: 'pointer'
                            },}}
                            onClick={()=> window.open(map.get(name).url, "_blank")}>GitHub!</LaunchIcon>
                        </div>
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