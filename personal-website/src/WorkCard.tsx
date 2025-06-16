import React from "react";
import ryghtPic from './attachments/Ryght.png'
import popPic from './attachments/Pop.png'
import goldPic from './attachments/Gold.png'
import gawPic from './attachments/Gaw.png'
import ncsaPic from './attachments/NCSA.png'
import ltPic from './attachments/LT.png'
import cyclePic from './attachments/cycle.png'
import { Typography, Box } from "@mui/material";
import './ProjectsAndWork.css'


const map = new Map();
map.set('Ryght AI', {description: 'Jobs and such HI i AM TYPING today', img: ryghtPic, title: 'Cybersecurity & GenAI Research Intern', startDate: 'March 2025', endDate: 'May 2025'})
map.set('Pop Empanada', {description: 'Jobs and such HI i AM TYPING today', img: popPic, title: 'Cashier/Host', startDate: 'May 2024', endDate: 'August 2024'})
map.set("Goldberg's Original Bagels", {description: 'Jobs and such HI i AM TYPING today', img: goldPic, title: 'Cashier/Deli Clerk', startDate: 'April 2023', endDate: 'June 2024'})
map.set('Campgaw Mountain', {description: 'Jobs and such HI i AM TYPING today', img: gawPic, title: 'Youth Snowboard Instructor/Supervisor', startDate: 'December 2020', endDate: 'January 2024'})
map.set('Northern Counties Soccer Association', {description: 'Jobs and such HI i AM TYPING today', img: ncsaPic, title: 'Soccer Referee', startDate: 'September 2021', endDate: 'May 2023'})
map.set('Life Time Inc.', {description: 'Jobs and such HI i AM TYPING today', img: ltPic, title: 'Facility Operations Team Member', startDate: 'June 2021', endDate: 'September 2022'})
map.set('Cyclesport', {description: 'Jobs and such HI i AM TYPING today', img: cyclePic, title: 'Assistant/Bike Mechanic', startDate: 'June 2020', endDate: 'September 2021'})


type type = {
    name: string
}

function WorkCard({name}: type) {
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
                            lg: '1.15rem', }}}>{map.get(name).title}</Typography>
                        <Typography sx={{fontSize: {
                            xs: '0.9rem',
                            sm: '0.975rem',
                            lg: '1.15rem', }}}>{map.get(name).startDate} - {map.get(name).endDate}</Typography>
                    </div>
                    <div style={{width: '60%', display: 'flex', justifyContent: 'center'}}>
                        <Typography>{map.get(name).description}</Typography>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkCard