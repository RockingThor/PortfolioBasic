import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar= ()=>{
    return(
        <div className="nav-bar">
            <Link to='/' className="logo">
                <img src={LogoS} alt='logo'/>
                <img className='sub-logo' src={LogoSubtitle} alt='slobodan'/>
            </Link>
            <nav>
                <NavLink exact='true' activeClassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact='true' activeClassname="active" className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact='true' activeClassname="active" className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/rohitnandi/'
                        >
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/rohitnandi/'
                        >
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/rohitnandi/'
                        >
                            <FontAwesomeIcon icon={faTwitter} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;