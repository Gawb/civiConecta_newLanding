import './Header.css';
import { useState, useEffect, useRef } from 'react';
import logo from '../../logos/Logo---CiviConecta---Principal-No-Claim---1000x500.png';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';

const widthScreen = 498;

const Header = ({ elements, imgArrow }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= widthScreen);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [url, setUrl] = useState('');
    const menuRef = useRef(null);



    const handleClick = (anchor) => (event) => {
        event.preventDefault();
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        setUrl(`#${anchor}-section`)
      };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= widthScreen);
    };

    const toggleSubMenu = (e) => {
        setIsSubMenuOpen((prevState) => !prevState);
    };

    const handleMouseEnter = () => {
        setIsSubMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setIsSubMenuOpen(false);
    };


    useEffect(() => {
        const onMenu = menuRef.current;

        if (isMobile) {
            onMenu.addEventListener('click', toggleSubMenu);
        } else {
            onMenu.addEventListener('mouseenter', handleMouseEnter);
            onMenu.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (isMobile) {
                onMenu.removeEventListener('click', toggleSubMenu);
            } else {
                onMenu.removeEventListener('mouseenter', handleMouseEnter);
                onMenu.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [isMobile]);

    const liElements = (elements) =>
        elements.map((element, index) => (
            <li key={index} id={`element-${index}`}>
                {index === 1 ? (
                    <div ref={menuRef}>
                        <div className={`${isSubMenuOpen ? '' : 'sub-element'}`}>
                            {element} {imgArrow}
                        </div>
                        <ul className={`submenu ${isSubMenuOpen ? 'open-submenu' : ''}`}>
                            <li><a onClick={handleClick('about')} href={`#about-section`}>Nuestro Servicio</a></li>
                            <li><a onClick={handleClick('advantajes')} href={`#advantajes-section`}>Ventajas</a></li>
                        </ul>
                    </div>
                ) : (
                    <a onClick={handleClick(element)} href={`#${element}-section`}>{element}</a>

                )}
            </li>
        ));

    const sharedProps = {
        elements,
        logo,
        imgArrow,
        liElements,
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <>{isMobile ? <MobileNav {...sharedProps} /> : <Nav {...sharedProps} />}</>;
};

export { Header };
