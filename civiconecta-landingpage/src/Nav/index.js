import './index.css';
import logo from '../logos/Logo---CiviConecta---Principal-No-Claim---1000x500.png';
import PropTypes from 'prop-types';

function Nav() {
    const elements = ['Inicio', 'Sobre Civi', 'Profesionales', 'Testimonios', 'Contacto'];

    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="Logo CiviConecta" />
            </div>
            <div className="nav-elements">
                <ul>
                    {elements.map((element, index) => (
                        <li key={index} id={`element-${index}`}>{element}</li>
                    ))}
                </ul>
            </div>
            <div className="button-container">
                <button>Ingresar</button>
            </div>
        </nav>
    );
}

Nav.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.string),
};

export { Nav };
