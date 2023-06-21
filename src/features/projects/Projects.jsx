import React, { useEffect } from 'react'

const Project = ({ project }) => {


    return (
        <div>
            <p className='text-center'>{project.name}</p>
            <p>{project.description}</p>
        </div>

    )
}

export default Project