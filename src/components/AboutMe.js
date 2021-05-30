import React from 'react';
import ameer from '../img/ameer.jpg';

const AboutMe = () => {
    return(
        <div className="aboutMe">
            <div className="aboutLeft">
                <h1>Hey 👋 <br/><span>I'm Ameer.</span></h1>
                <p>I am a software developer, designer, and a student! I am currently studying Software Engineering at Sheridan College. My expertise is in Frontend Web Development. I have experience in HTML/CSS, JavaScript, Java, and Python. I also have experience in frameworks such as React, Angular, and jQuery.</p>
            </div>
            <div className="imgGradient">
                <img src={ameer} />
            </div>

        </div>
    )
}

export default AboutMe;