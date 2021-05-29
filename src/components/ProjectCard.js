import React from 'react';

const ProjectCard = ({ name, languages }) => {
    return (
        <div className="projectCard">
            <div>
                <img/>
                <ul>
                    <li>{languages[0]}</li>
                    <li>{languages[1]}</li>
                    <li>{languages[2]}</li>
                </ul>
            </div>
            <div className="projectBottom">
                <h3>{name}</h3>
                <button>🡢</button>
            </div>
        </div>
    )
}

export default ProjectCard;