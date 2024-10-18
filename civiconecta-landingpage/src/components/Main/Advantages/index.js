import './Advantages.css';
import './AdvantagesMobile.css';
import { extendedCarouselElements, carruselElements } from './advantageData';
import { useState, useEffect, useRef } from 'react';
import { CarruselBox } from './CarruselBox';

const advantageTitle = '¿Cuáles son las ventajas de contar con CiviConecta?';

const Advantages = ({ imgArrow }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
    const [activeIndex, setActiveIndex] = useState(2); // Comenzar en el segundo elemento
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [startTouchX, setStartTouchX] = useState(null);
    const transitionTimeout = useRef(null);

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prevIndex) => prevIndex - 1);
    };

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prevIndex) => prevIndex + 1);
    };

    const handleTouchStart = (e) => {
        const touchX = e.touches[0].clientX;
        setStartTouchX(touchX);
    };

    const handleTouchMove = (e) => {
        if (!startTouchX) return;
        const touchX = e.touches[0].clientX;
        const touchDifference = startTouchX - touchX;

        if (touchDifference > 50) {
            nextSlide(); 
            setStartTouchX(null);
        } else if (touchDifference < -50) {
            prevSlide();
            setStartTouchX(null);
        }
    };

    const handleTouchEnd = () => {
        setStartTouchX(null);
    };

    const liPoints = (elements, activeIndex) =>
        elements.color.map((color, index) => (
            <li
                key={index}
                id={`element-${color}`}
                className={`point ${index === (activeIndex - 1 + elements.color.length) % elements.color.length ? 'point-selected' : ''}`}
            >
            </li>
        ));

    useEffect(() => {
        if (activeIndex === 0) {
            transitionTimeout.current = setTimeout(() => {
                setIsTransitioning(false);
                setActiveIndex(carruselElements.img.length);
            }, 500); 
        } else if (activeIndex === extendedCarouselElements.img.length - 1) {
            transitionTimeout.current = setTimeout(() => {
                setIsTransitioning(false);
                setActiveIndex(1); 
            }, 500);
        } else {
            transitionTimeout.current = setTimeout(() => {
                setIsTransitioning(false);
            }, 500);
        }

        return () => {
            if (transitionTimeout.current) {
                clearTimeout(transitionTimeout.current);
            }
        };
    }, [activeIndex]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 500);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <article className='advantages' id='advantajes-section' aria-labelledby="advantages-title">
            <h2 id="advantages-title">{advantageTitle}</h2>
            <div className='carrusel-container-element' role="region" aria-label="Carrusel de ventajas">
                <div
                    className='carrusel-arrow left-arrow'
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') prevSlide(); }}
                >
                    {imgArrow}
                </div>
                <div
                    className='carrusel-container'
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    aria-hidden="true"
                >
                    <div className='boxes-container'>
                        <div className='carrusel-boxes'
                            style={{
                                transform: `translateX(calc(-${activeIndex} * 100% / ${extendedCarouselElements.img.length} + 46% - ${isMobile ? '8vw' : '2vw'}))`,
                                transition: isTransitioning ? 'transform 0.5s ease' : 'none',
                            }}
                        >
                            <CarruselBox carruselElements={extendedCarouselElements} activeIndex={activeIndex} imgArrow={imgArrow} />
                        </div>
                    </div>
                </div>
                <div
                    className='carrusel-arrow right-arrow'
                    onClick={nextSlide}
                    aria-label="Next slide"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') nextSlide(); }}
                >
                    {imgArrow}
                </div>
            </div>
            <ul aria-label="Indicadores de navegación">
                {liPoints(carruselElements, activeIndex)}
            </ul>
        </article>
    );
}

export { Advantages };
