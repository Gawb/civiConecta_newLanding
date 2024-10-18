import './Footer.css';
import './FooterMobile.css';
import LogoFooter from './CiviConecta - Blanco.svg';
import Linkedin from './icons/LinkedIn - Circle - Civicon.svg';
import Instagram from './icons/Instagram - Circle - Civicon.svg';
import FaceBook from './icons/Facebook - Circle - Civicon.svg';
import Whatsapp from './icons/WhatsApp - Circle - Civicon.svg';
import { useState } from 'react';

const currentYear = new Date().getFullYear();
const copyRigthInfo = {
    local: 'Santiago, Chile.',
    year: `® 2022 - ${currentYear}, CiviConecta SpA.`,
    message: 'Todos los derechos reservados.',
}

const urlsSocial = {
    wsp: 'https://wa.me/56931282897?text=CiviConecta',
    insta: 'https://www.instagram.com/civiconecta?igsh=MnUwdzlpaGViMXEz',
    fB: 'https://m.facebook.com/100082843482799/',
    in: 'https://www.linkedin.com/company/civiconecta/',
}

const Footer = ({ elements }) => {
    const [url, setUrl] = useState('');

    const handleClick = (anchor) => (event) => {
        event.preventDefault();
        const id = anchor === 'Sobre Civi' ? 'about-section' : `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setUrl(`#${anchor}-section`)
    };

    const liElements = (elements) => (
        elements.map((element, index) => (
            index === 0 ? null : (
                <li id={`${element.slice(0, 3)}-${index}`} key={index}>
                    <a 
                        onClick={handleClick(element)} 
                        href={`#${index === 1 ? 'about' : element}-section`}
                        aria-label={`Ir a la sección de ${index === 1 ? element + 'conecta' : element}`} // Atributo ARIA
                    >
                        {index === 1 ? element + 'conecta' : element}
                    </a>
                </li>
            )
        ))
    );

    return (
        <footer role="contentinfo"> {/* Atributo role para el footer */}
            <section className='footer-elements'>
                <div className='logo-footer-container' role="img" aria-label="Logo de CiviConecta">
                    <img src={LogoFooter} alt="Logo de CiviConecta" /> {/* Atributo alt agregado */}
                </div>
                <div className='element-container'>
                    <ul>
                        {liElements(elements)}
                    </ul>
                </div>
                <div className='social-container' aria-label="Redes sociales">
                    <a href={urlsSocial.wsp} aria-label="Ir a WhatsApp">
                        <img src={Whatsapp} alt="Icono de WhatsApp" />
                    </a>
                    <a href={urlsSocial.insta} aria-label="Ir a Instagram">
                        <img src={Instagram} alt="Icono de Instagram" />
                    </a>
                    <a href={urlsSocial.fB} aria-label="Ir a Facebook">
                        <img src={FaceBook} alt="Icono de Facebook" />
                    </a>
                    <a href={urlsSocial.in} aria-label="Ir a LinkedIn">
                        <img src={Linkedin} alt="Icono de LinkedIn" />
                    </a>
                </div>
            </section>
            <div className='copyrigth-container'>
                <p>{copyRigthInfo.local}</p>
                <p>{copyRigthInfo.year} {copyRigthInfo.message}</p>
            </div>
        </footer>
    )
};

export { Footer };
