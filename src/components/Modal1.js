import React from 'react';

const Modal1 = () => {
    return (
        <div className="modal1">
            <div className="modal1Top">
                <img/>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="modal1Bottom">
                <div>
                    <h3>Shoppies</h3>
                    <p>&#8226;&nbsp;App which displays movie information from OMDB api<br/>&#8226;&nbsp;Ability to search, nominate and enominate titles in a list<br/>&#8226;&nbsp;Nominated titles can be further shared through a link</p>
                </div>
                <div className="modal1Buttons">
                    <a href="https://github.com/ameer-ahmad/TheShoppies" target="blank"><i className="fab fa-github"></i></a>
                    <a href="https://ameer-ahmad.github.io/TheShoppies" target="blank"><i className="fas fa-link"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Modal1;