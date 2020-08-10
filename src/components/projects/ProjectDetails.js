import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className = "container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                <span className="card-title">Project Details - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus itaque, rerum, voluptatibus in laborum consequatur ipsa, cupiditate accusantium ducimus quam cum quo magni aliquid consequuntur soluta esse nulla labore?</p>
                </div>
                <div className="card-action grey-text text-lighten-1">
                    <div>Posted by Num Num</div>
                    <div>Date: 20 July, 2013</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
