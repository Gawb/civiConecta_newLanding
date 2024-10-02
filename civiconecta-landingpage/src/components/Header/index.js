import './index.css';
import { useState, useEffect, useRef } from 'react';
import logo from '../../logos/Logo---CiviConecta---Principal-No-Claim---1000x500.png';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';

const widthScreen = 498;

const Header = ({ elements, imgArrow }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= widthScreen);
    const [isHovered, setIsHovered] = useState(false);
    const menuRef = useRef(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= widthScreen);
    };

    useEffect(() => {
        const handleMouseEnter = () => {
            setIsHovered(true);
        };
        const handleMouseLeave = () => {
            setIsHovered(false);
        };
        const onMenu = menuRef.current;

        onMenu.addEventListener('mouseenter', handleMouseEnter);
        onMenu.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            onMenu.removeEventListener('mouseenter', handleMouseEnter);
            onMenu.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const liElements = (elements) => (
        elements.map((element, index) => (
            <li key={index} id={`element-${index}`}>
                {index === 1 ? (
                    <div ref={menuRef}>
                        <div>
                            {element} {imgArrow}
                        </div>
                        {isHovered
                            ? <ul ref={menuRef}>
                                <li>Nuestro Servicio</li>
                                <li>Ventajas</li>
                            </ul>
                            : ''}
                    </div>
                ) : (
                    element
                )}
            </li>
        ))
    );

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

    return (
        <>
            {isMobile ? <MobileNav {...sharedProps} /> : <Nav {...sharedProps} />}
        </>
    );
};

export { Header };
