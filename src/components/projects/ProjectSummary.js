import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card project-summary ">
            <div className="card-content grey-text text-darken-2">
                <span className="card-title">{project.id}-{project.title}</span>
                <p>{project.content}</p>
                <p>Project Content</p>
                <p className="grey-text">Something descriptive here</p>
            </div>
        </div>
    )
}

export default ProjectSummary