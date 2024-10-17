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
    local:'Santiago, Chile.',
    year: `® 2022 - ${currentYear}, CiviConecta SpA.`,
    message:'Todos los derechos reservados.',
}

const urlsSocial = {
    wsp:'https://wa.me/56931282897?text=CiviConecta',
    insta: 'https://m.facebook.com/100082843482799/',
    fB:'https://m.facebook.com/100082843482799/',
    in:'https://www.linkedin.com/company/civiconecta/',
}

const Footer = ({elements}) => {
    const [url, setUrl] = useState('');

    const handleClick = (anchor) => (event) => {
        event.preventDefault();
        const id = anchor === 'Sobre Civi' ? 'about-section':`${anchor}-section`;
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
                     <a onClick={handleClick(element)} href={`#${index=== 1? 'about':element}-section`}>{index === 1? element+'conecta':element}</a>
                </li>
            )
        ))
    );

    return (
        <footer>
            <section className='footer-elements'>
                <div className='logo-footer-container'>
                    <img src={LogoFooter} />
                </div>
                <div className='element-container'>
                    <ul>
                        {liElements(elements)}
                    </ul>
                </div>
                <div className='social-container'>
                    <a href={urlsSocial.wsp}><img src={Whatsapp}/></a>
                    <a href={urlsSocial.insta}><img src={Instagram}/></a>
                    <a href={urlsSocial.fB}><img src={FaceBook}/></a>
                    <a href={urlsSocial.in}><img src={Linkedin}/></a>
                </div>
            </section>
            <div className='copyrigth-container'>
                <p>{copyRigthInfo.local}</p>
                <p>{copyRigthInfo.year} {copyRigthInfo.message}</p>
            </div>
        </footer>
    )

};

export { Footer};

