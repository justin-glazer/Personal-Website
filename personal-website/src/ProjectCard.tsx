import React from "react";

const map = new Map();
map.set('Job Capyture', {description: 'Jobs and such', startDate: 'December 2024', endDate: 'January 2025', gh: 'https://github.com/heavens-potato/winter-project'})
map.set('T.O.M', {description: 'Tom Cat', startDate: 'May 2024', endDate: 'August 2024', gh: 'https://github.com/om-arya/T.O.M'})

type type = {
    name: string
}

function ProjectCard({name}: type) {
    return (
        <>
            <div style ={{borderRadius: '1.25rem', backgroundColor: 'red'}}>
                <div>
                    <h1>{name}</h1>
                    {/* Logo */}
                    <h2>{map.get(name).startDate} - {map.get(name).endDate}</h2>
                </div>
                <div>
                    <h1>{map.get(name).description}</h1>
                </div>
            </div>
        </>
    )
}

export default ProjectCard