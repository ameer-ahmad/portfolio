import React from 'react';
import ameer from '../img/ameer.jpg';

const AboutMe = () => {
    return(
        <div className="aboutMe">
            <div className="aboutLeft">
                <h1>Hey 👋 <br/><span>I'm Ameer.</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At convallis orci tellus diam sed morbi est. Cursus sed tellus tortor blandit lorem at. Quam odio orci, eros velit eget et tincidunt duis nunc. Pharetra, feugiat nunc sem nisl gravida nulla vitae dictum viverra. Porttitor est ipsum turpis enim accumsan, sociis cursus. Donec a, dictumst bibendum imperdiet dui.</p>
            </div>
            <div className="imgGradient">
                <img src={ameer} />
            </div>

        </div>
    )
}

export default AboutMe;