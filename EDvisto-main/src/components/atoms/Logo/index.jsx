import './Logo.css';
import logoImg from '../../../assets/images/logo.png';

const index = () => {
    return (
        <div className="logo">
            <img className="logo-img" src={logoImg} alt="Logo de EdVisto" />
        </div>
    )
}

export default index
