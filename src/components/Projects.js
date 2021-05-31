import React from 'react';
import ProjectCard from './ProjectCard';
import backgroundProjects from '../img/background-projects.png';
import Modal1 from './Modal1';
import shoppies from '../img/shoppies.png';
import rumble from '../img/rumble.png';
import waves from '../img/waves.png';
import capture from '../img/capture.png';

const Projects = () => {

    const showModal1 = () => {
        const modal = document.querySelector('.modal');
        const workPage = document.querySelector('.work');
        const footer = document.querySelector('footer');
        const nav = document.querySelector('header');
        modal.style.display = "block";
        workPage.classList.add('blur');
        footer.classList.add('blur');
        nav.classList.add('blur');
    }

    return (
        <>
            <div className="projects">
                <ProjectCard showModal1={showModal1} name="Shoppies" languages={['HTML5', 'CSS3', 'React']} image={shoppies} />
                <ProjectCard name="Rumble" languages={['HTML5', 'CSS3', 'React']} image={rumble}/>
                <ProjectCard name="Waves" languages={['HTML5', 'SCSS', 'React']} image={waves} />
                <ProjectCard name="Capture" languages={['HTML5', 'CSS3', 'React']} image={capture} />
            </div>
            <img className="backgroundProjects" src={backgroundProjects}/>
            <Modal1/>
        </>
    )
}

export default Projects;