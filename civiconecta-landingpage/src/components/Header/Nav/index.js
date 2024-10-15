import './Nav.css';
import PropTypes from 'prop-types';

const Nav = ({ elements, logo, liElements }) => {

    return (
            <nav>
                <div className="logo-container">
                    <img src={logo} alt="Logo CiviConecta" />
                </div>
                <div className="nav-elements">
                    <ul>
                        {liElements(elements)}
                    </ul>
                    <div className="button-container">
                        <button>Ingresar</button>
                    </div>
                </div>
            </nav>
    );
}

Nav.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.string),
};

export { Nav };
