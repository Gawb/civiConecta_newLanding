import './NavMobile.css';
import './menu.css';
import logoW from '../../Footer/CiviConecta - Blanco.svg';
import { icons } from './iconsMobileNav';
import { useState, useRef, useEffect } from 'react';

const buttonText = 'Ingresar';
const scrollStartValue = 0;

const MobileNav = ({ elements, logo, liElements }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(false);
    const [scrollPosition, setScrollPosition] = useState(false);
    const [navChange, setNavChange] = useState('');

    const handleTouchStart = (event) => {
        const touchedElement = event.target;
        if (touchedElement.tagName === 'A') {
            setIsOpen(false);
        }
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        let scrollTop = document.documentElement.scrollTop;

        if (scrollTop > scrollStartValue) {
            setScrollPosition(true);
        } else {
            setScrollPosition(false);
        }
    };

    useEffect(() => {
        scrollPosition ? setNavChange('change') : setNavChange('');
    }, [scrollPosition]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.addEventListener('touchstart', handleTouchStart);
        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className={navChange} aria-label="Navegación móvil">
                <div
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="menu-items"
                    className='burger-icon-container'
                    aria-label="Abrir menú"
                >
                    {icons.burgerIcon}
                </div>
                <div className='logo-container'>
                    <img src={navChange === 'change' ? logoW : logo} alt='Logo CiviConecta' />
                </div>
                <div className="button-container">
                    <button onClick={() => window.location.href = 'https://plataforma.civiconecta.cl/login'} aria-label="Ir a la página de ingreso">
                        {buttonText}
                    </button>
                </div>
            </nav>

            <div ref={menuRef} className={`menu ${isOpen ? 'menu-open' : ''}`} role="menu" aria-hidden={!isOpen}>
                <div className='menu-barnav'>
                    <div
                        className='burger-icon-container_menu'
                        onClick={toggleMenu}
                        aria-label="Cerrar menú"
                    >
                        {icons.burgerIcon}
                    </div>
                    <div className='logo-container'>
                        {icons.imgLogo}
                    </div>
                    <div
                        className='close-icon-container'
                        onClick={toggleMenu}
                        aria-label="Cerrar menú"
                    >
                        {icons.closeIcon}
                    </div>
                </div>
                <div className='menu-elements-container'>
                    <ul role="menu" onTouchStart={handleTouchStart} id="menu-items">
                        {liElements(elements)}
                    </ul>
                    <button onClick={() => window.location.href = 'https://plataforma.civiconecta.cl/login'} aria-label="Ir a la página de ingreso">
                        {buttonText}
                    </button>
                </div>
            </div>
        </>
    );
}

export { MobileNav };
