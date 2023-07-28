import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact =()=>{
    const [letterClass, setLetterClass]=useState('text-animate');
    const refForm= useRef();
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    });
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'service_p85z4lt',
            'template_1bhtggq',
            refForm.current,
            process.env.REACT_APP_EMAIL_JS_PUBLIC
        ).then(
            ()=>{
                alert('Message sent successfully!');
                window.location.reload(false);
            },
            ()=>{
                alert("Failed to send message, please try again");
            }
        )
    }
    return(<>
        <div className=" container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t', ' ','m','e']}
                        idx={15} 
                    />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, odio soluta magni alias 
                    dicta sit exercitationem atque eius vel, nemo enim ad eaque dignissimos. 
                    Esse hic nobis qui eius aspernatur?
                </p>
                <div className="contact-form">
                    <form  ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input type="text" placeholder='subject' name='Subject' required />
                            </li>
                            <li>
                                <textarea name="message" placeholder='Message' required></textarea>
                            </li>\<li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
    </>);
};

export default Contact;