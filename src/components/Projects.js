import React from 'react';
import ProjectCard from './ProjectCard';
import backgroundProjects from '../img/background-projects.png';
import Modal1 from './Modal1';

const Projects = () => {
    return (
        <>
            <div className="projects">
                <ProjectCard name="Shoppies" languages={['HTML5', 'CSS3', 'React']} />
                <ProjectCard name="Rumble" languages={['HTML5', 'CSS3', 'React']} />
                <ProjectCard name="Waves" languages={['HTML5', 'SCSS', 'React']} />
                <ProjectCard name="Capture" languages={['HTML5', 'CSS3', 'React']} />
            </div>
            <img className="backgroundProjects" src={backgroundProjects}/>
            <Modal1/>
        </>
    )
}

export default Projects;