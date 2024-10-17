import './AboutCivi.css';
import './AboutCiviMobile.css';
import LogoCiviAbout from './Logo---CiviConecta---Horizontal---1000x174.png';
import { message, videoCivi, quoteIcon } from './aboutInfo';
import { InfoBox } from './InfoBox';


const AboutCivi = ({ imgArrow }) => {

    return (
        <article className='article-about' id='about-section'>
            <div className='about-title' >
                <h2>¿Qué es</h2>
                <h2><img src={LogoCiviAbout}/> ?</h2>
            </div>
            <div id="video-player" className="video-civi">
                <iframe src={videoCivi}  allow="autoplay; fullscreen; picture-in-picture">
                </iframe>
            </div>
            <div className='about-message-content'>
                {quoteIcon}
                <p>
                    {message}
                </p>
            </div>
            <InfoBox imgArrow={imgArrow}/>
        </article>
    )

}

export { AboutCivi };