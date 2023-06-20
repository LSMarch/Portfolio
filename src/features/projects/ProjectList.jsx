import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProjects, selectProjectData } from './projectsSlice'
import Project from './Projects'

const ProjectList = () => {
    const dispatch = useDispatch()
    const projects = useSelector(selectProjectData)
    const status = useSelector(state => state.projects.status)
    let content

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProjects())
        }
    }, [status, dispatch])

    if (status === 'loading') {
        content = <h3>Loading...</h3>
    } else if (status === 'succeeded') {
        content = projects.map(project => (
            <div className='d-flex justify-content-center'>
                <div className='card w-75 m-2'>
                    <div className='card-body'>
                        <Project project={project} key={project.id} />
                    </div>
                </div>
            </div>

        ))
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default ProjectList