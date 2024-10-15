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
                setActiveIndex(carruselElements.img.length); // Saltar al penúltimo (sin transición)
            }, 500); // Esperar a que termine la transición
        } else if (activeIndex === extendedCarouselElements.img.length - 1) {
            transitionTimeout.current = setTimeout(() => {
                setIsTransitioning(false);
                setActiveIndex(1); // Saltar al segundo (sin transición)
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
        <article className='advantages'>
            <h2>{advantageTitle}</h2>
            <div className='carrusel-container-element'>
                <div className='carrusel-arrow left-arrow' onClick={prevSlide}>
                    {imgArrow}
                </div>
                <div className='carrusel-container'
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}>
                    <div className='boxes-container'>
                        {isMobile ?
                            <div className='carrusel-boxes'
                                style={{
                                    transform: `translateX(calc(-${activeIndex} * 100% / ${extendedCarouselElements.img.length} + 46% - 8vw))`,
                                    transition: isTransitioning ? 'transform 0.5s ease' : 'none',
                                }}
                            >
                                <CarruselBox carruselElements={extendedCarouselElements} activeIndex={activeIndex} imgArrow={imgArrow} />
                            </div>
                            :
                            <div className='carrusel-boxes'
                                style={{
                                    transform: `translateX(calc(-${activeIndex} * 100% / ${extendedCarouselElements.img.length} + 46% - 2vw))`,
                                    transition: isTransitioning ? 'transform 0.5s ease' : 'none',
                                }}
                            >
                                <CarruselBox carruselElements={extendedCarouselElements} activeIndex={activeIndex} imgArrow={imgArrow} />
                            </div>
                        }
                    </div>
                </div>
                <div className='carrusel-arrow right-arrow' onClick={nextSlide}>
                    {imgArrow}
                </div>
            </div>
            <ul>
                {liPoints(carruselElements, activeIndex)}
            </ul>
        </article>
    );
}

export { Advantages };
