import './Footer.css';
import './FooterMobile.css';
import LogoFooter from './CiviConecta - Blanco.svg';
import Linkedin from './icons/LinkedIn - Circle - Civicon.svg';
import Instagram from './icons/Instagram - Circle - Civicon.svg';
import FaceBook from './icons/Facebook - Circle - Civicon.svg';
import Whatsapp from './icons/WhatsApp - Circle - Civicon.svg';

const currentYear = new Date().getFullYear();
const copyRigthInfo = {
    local:'Santiago, Chile.',
    year: `® 2022 - ${currentYear}, CiviConecta SpA.`,
    message:'Todos los derechos reservados.',
}

const Footer = ({elements}) => {


    const liElements = (elements) => (
        elements.map((element, index) => (
            index === 0 ? null : (
                <li id={`${element.slice(0, 3)}-${index}`} key={index}>
                    {index=== 1 ? element+'conecta': element}
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
                    <a><img src={Whatsapp}/></a>
                    <a><img src={Instagram}/></a>
                    <a><img src={FaceBook}/></a>
                    <a><img src={Linkedin}/></a>
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

