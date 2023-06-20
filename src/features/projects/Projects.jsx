import React, { useEffect } from 'react'

const Project = ({ project }) => {


    return (
        <div>
            <p>{project.name}</p>
            <p>{project.description}</p>
        </div>

    )
}

export default Project