import React from "react";
import { Typography, Box } from "@mui/material";
import './ProjectsAndWork.css'


const map = new Map();
map.set('Job Capyture', {description: 'Jobs and such HI i AM TYPING today', startDate: 'December 2024', endDate: 'January 2025', gh: 'https://github.com/heavens-potato/winter-project'})
map.set('T.O.M', {description: 'Tom Cat', startDate: 'May 2024', endDate: 'August 2024', gh: 'https://github.com/om-arya/T.O.M'})

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