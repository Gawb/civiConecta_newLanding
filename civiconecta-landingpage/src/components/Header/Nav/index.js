import './Nav.css';


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
                </div>
                <div className="button-container">
                        <button onClick={() => window.location.href = 'https://plataforma.civiconecta.cl/login'}>Ingresar</button>
                </div>
            </nav>
    );
}



export { Nav };

