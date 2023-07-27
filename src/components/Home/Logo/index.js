import './index.scss';
import LogoS from '../../../assets/images/logo-s.png';

const Logo= ()=>{
    return(
        <div className="logo-container">
            <img src={LogoS} alt="R" className="solid-logo" />
        </div>
    )
}

export default Logo;