import React from 'react';

const ProjectCard = ({ name, languages, showModal1, image }) => {
    console.log(image)
    return (
        <div className="projectCard">
            <div>
                <img src={image}/>
                <ul>
                    <li>{languages[0]}</li>
                    <li>{languages[1]}</li>
                    <li>{languages[2]}</li>
                </ul>
            </div>
            <div className="projectBottom">
                <h3>{name}</h3>
                <button onClick={showModal1}>🡢</button>
            </div>
        </div>
    )
}

export default ProjectCard;