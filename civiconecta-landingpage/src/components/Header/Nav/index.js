import './Nav.css';

const Nav = ({ elements, logo, liElements }) => {
    return (
        <nav aria-label="Navegación principal"> {/* Atributo aria-label para la navegación */}
            <div className="logo-container">
                <img src={logo} alt="Logo CiviConecta" />
            </div>
            <div className="nav-elements">
                <ul role="menubar"> {/* Atributo role para el menú */}
                    {liElements(elements)}
                </ul>
            </div>
            <div className="button-container">
                <a href="https://plataforma.civiconecta.cl/login" aria-label="Ir a la página de ingreso">
                    <button type="button">Ingresar</button>
                </a>
            </div>
        </nav>
    );
};

export { Nav };
