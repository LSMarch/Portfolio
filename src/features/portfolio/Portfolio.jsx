import React from 'react'
import ProjectList from '../projects/ProjectList'

const Portfolio = () => {
    return (
        <main >
            <div className='card'>
                <div className='card-body '>
                    <div className=' d-flex  justify-content-evenly'>
                        <ProjectList />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Portfolio