import './AboutCivi.css';
import './AboutCiviMobile.css';
import fakeImage from './fakeImageVideo.png';
import LogoCiviAbout from './Logo---CiviConecta---Horizontal---1000x174.png';
import { message, videoCivi, quoteIcon } from './aboutInfo';
import { InfoBox } from './InfoBox';
import { useState } from 'react';

const AboutCivi = ({ imgArrow }) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    return (
        <article className='article-about' id='about-section' role="article" aria-labelledby="about-title">
            <div className='about-title' id="about-title">
                <h2>¿Qué es</h2>
                <h2><img src={LogoCiviAbout} alt="Logo CiviConecta" />?</h2>
            </div>
            <div id="video-player" className="video-civi" aria-live="polite" aria-label="Video sobre CiviConecta">
                {!isVideoLoaded ? (
                    <div
                        className="video-placeholder"
                        onClick={handleVideoLoad}
                        style={{ cursor: 'pointer' }}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => e.key === 'Enter' && handleVideoLoad()} 
                        aria-label="Cargar video sobre CiviConecta"
                    >
                        <img src={fakeImage} alt="Vista previa del video" />
                    </div>
                ) : (
                    <iframe
                        src={`${videoCivi}?autoplay=1`}
                        allow="autoplay; fullscreen; picture-in-picture" 
                        title="Video CiviConecta"
                        frameBorder="0"
                        allowFullScreen
                        aria-label="Video de CiviConecta"
                    ></iframe>
                )}
            </div>
            <div className='about-message-content' aria-label="Mensaje sobre CiviConecta">
                {quoteIcon}
                <p>{message}</p>
            </div>
            <InfoBox imgArrow={imgArrow} />
        </article>
    );
};

export { AboutCivi };
