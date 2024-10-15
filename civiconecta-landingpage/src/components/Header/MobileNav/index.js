import './NavMobile.css';
import './menu.css';
import { icons } from './iconsMobileNav';
import { useState, useRef, useEffect } from 'react';

const buttonText = 'Ingresar';

const MobileNav = ({ elements, logo, liElements }) => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(false);

    const handleClickOutside = (event) =>{
        if(menuRef.current && !menuRef.current.contains(event.target)){
            setIsOpen(false);
        }
    }
    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    };

    useEffect(() =>{
        document.addEventListener('touchstart', handleClickOutside);
        return () =>{
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav>
                <div
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="menu-items"
                    className='burger-icon-container'>
                    {icons.burgerIcon}
                </div>
                <div className='logo-container'>
                    <img src={logo} alt='Logo civiconecta' />
                </div>
                <div className="button-container">
                    <button>{buttonText}</button>
                </div>
            </nav>

            <div ref={menuRef} className={`menu ${isOpen ? 'menu-open' : ''}`}>
                <div className='menu-barnav'>
                    <div className='burger-icon-container_menu' onClick={toggleMenu}>
                        {icons.burgerIcon}
                    </div>
                    <div className='logo-container'>
                        {icons.imgLogo}
                    </div>
                    <div className='close-icon-container' onClick={toggleMenu}>
                        {icons.closeIcon}
                    </div>
                </div>
                <div className='menu-elements-container'>
                    <ul>
                        {liElements(elements)}
                    </ul>
                    <button>{buttonText}</button>
                </div>
            </div>
        </>
    )
}

export { MobileNav };