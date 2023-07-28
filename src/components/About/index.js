import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About =()=>{
    const [letterClass, setLetterClass]=useState('text-animate');
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    },[]);
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero recusandae saepe,
                     id nulla iste a rerum voluptates animi doloremque sapiente magnam aliquam quam
                      tempore nostrum modi impedit vitae ipsum repudiandae?
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero recusandae saepe,
                     id nulla iste a rerum voluptates animi doloremque sapiente magnam aliquam quam
                      tempore nostrum modi impedit vitae ipsum repudiandae?
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero recusandae saepe,
                     id nulla iste a rerum voluptates animi doloremque sapiente magnam aliquam quam
                      tempore nostrum modi impedit vitae ipsum repudiandae?
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faJava} color='#28A4D9'/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faJsSquare} color='#EC428'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About;