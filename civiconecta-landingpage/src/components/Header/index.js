import { useState, useEffect } from 'react';
import logo from '../../logos/Logo---CiviConecta---Principal-No-Claim---1000x500.png';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 500);
    };

    const elements = ['Inicio', 'Sobre Civi', 'Profesionales', 'Testimonios', 'Contacto'];

    const liElements = (elements) => {
        return (elements.map((element, index) => (
            <li key={index} id={`element-${index}`}>
                {element}
                {index === 1 && (imgArrow)}
            </li>
        )));
    };
    const imgArrow = (<svg
                    className="icon-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 120 120"
                >
                <path
                    d="M83.9,67.6c1.5,1.5,1.5,3.8,0,5.3l-3.5,3.5c-1.5,1.5-3.8,1.5-5.3,0L60,61.4L44.9,76.4c-1.5,1.5-3.8,1.5-5.3,0
                    l-3.5-3.5c-1.5-1.5-1.5-3.8,0-5.3l21.2-21.2c1.5-1.5,3.8-1.5,5.3,0L83.9,67.6z"
                />
                </svg>)

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
            {isMobile ? <MobileNav {...sharedProps} /> : <Nav {...sharedProps}/>}
        </>
    );
};

export { Header };
