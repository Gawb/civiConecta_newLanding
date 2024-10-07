import './AboutCivi.css';
import './AboutCiviMobile.css';
import LogoCiviAbout from './Logo---CiviConecta---Horizontal---1000x174.png';
import { InfoBox } from './InfoBox';

const quoteIcon = (<svg className='quote-icon' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <title>CiviConecta - iconos</title>
    <path d="M31.7,29.15a5,5,0,0,0-4.93,5V58h0a5,5,0,0,0,4.93,4.92h4.15A7.72,7.72,0,0,1,35,65.19h0c-1.66,2.62-4.58,4.28-6.95,5.26h0a5,5,0,0,0-2.68,6.34L29.56,87.7a5,5,0,0,0,6.52,2.76h0A34.45,34.45,0,0,0,54,73.68c2.79-5.79,4.24-12.08,4.24-23.19V34.17a5,5,0,0,0-4.89-5H31.7Zm36.74,0a5,5,0,0,0-4.92,5V58h0a5,5,0,0,0,4.92,4.92H72.6a7.72,7.72,0,0,1-.87,2.26h0c-1.66,2.62-4.59,4.28-7,5.26h0a5,5,0,0,0-2.68,6.34L66.3,87.7a5,5,0,0,0,6.53,2.76h0A34.45,34.45,0,0,0,90.76,73.68C93.55,67.89,95,61.6,95,50.49V34.17a5,5,0,0,0-4.9-5h0s0,0,0,0H68.44ZM31.7,33.53H53.32a.53.53,0,0,1,.56.57h0v16.4c0,10.75-1.29,16.06-3.82,21.29v0c-3.12,6.55-8.4,11.47-15.69,14.64a.53.53,0,0,1-.73-.32h0l-4.23-10.9h0a.52.52,0,0,1,.29-.71h0c2.74-1.14,6.53-3.13,8.95-7a17.15,17.15,0,0,0,2-6.35h0a2.19,2.19,0,0,0-.45-1.83,2.16,2.16,0,0,0-1.69-.8H31.7a.53.53,0,0,1-.55-.56V34.13h0v0a.53.53,0,0,1,.55-.57Zm36.75,0H90.07a.52.52,0,0,1,.55.57h0v16.4c0,10.75-1.28,16.06-3.81,21.29v0c-3.12,6.55-8.4,11.47-15.69,14.64a.52.52,0,0,1-.73-.32h0l-4.22-10.9h0a.52.52,0,0,1,.29-.71h0c2.74-1.14,6.54-3.13,9-7a17.11,17.11,0,0,0,2-6.35,2.19,2.19,0,0,0-2.14-2.63H68.45A.52.52,0,0,1,67.9,58V34.1a.53.53,0,0,1,.55-.57Z" />
</svg>);

const AboutCivi = ({ imgArrow }) => {

    return (
        <article className='article-about'>
            <div className='about-title'>
                <h2>¿Qué es</h2>
                <h2><img src={LogoCiviAbout}/> ?</h2>
            </div>
            <div id="video-player" className="video-civi">
                <iframe src="https://www.youtube.com/embed/zDZRmXnZMjc"  allow="autoplay; fullscreen; picture-in-picture">
                </iframe>
            </div>
            <div className='about-message-content'>
                {quoteIcon}
                <p>
                Desarrollar habilidades socioemocionales en tus estudiantes los ayudará a entender y manejar sus emociones; establecer y alcanzar metas positivas; sentir y mostrar empatía por los demás; construir y mantener relaciones saludables; y tomar decisiones responsables, es decir, los prepara para la vida
                </p>
            </div>
            <InfoBox imgArrow={imgArrow}/>
        </article>
    )

}

export { AboutCivi };