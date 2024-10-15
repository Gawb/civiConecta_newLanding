import './Testimonials.css';
import './TestimonialsMobile.css';
import { School } from './School';
import { schoolData } from './School/schoolInfo/schoolData';
import { useState, useEffect, useRef } from 'react';

const title = '¿Qué opinan los usuarios de Civi?';

const Testimonials = ({imgArrow}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [startTouchX, setStartTouchX] = useState(null);
    const transitionTimeout = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);

    const totalSlides = schoolData.logo.length;

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prevIndex) => prevIndex === 1 ? totalSlides : prevIndex - 1);
    };

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prevIndex) => prevIndex === totalSlides ? 1 : prevIndex + 1);
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

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 500);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (transitionTimeout.current) {
            clearTimeout(transitionTimeout.current);
        }
        transitionTimeout.current = setTimeout(() => {
            setIsTransitioning(false);
        }, 500);

        return () => clearTimeout(transitionTimeout.current);
    }, [activeIndex]);

    const liPoints = (elements, activeIndex) =>
        elements.logo.map((logo, index) => (
            <li
                key={index}
                id={`review-${logo}`}
                className={`point ${index === (activeIndex - 1) ? 'point-selected' : ''}`}
            ></li>
        ));


return (
    <article className='testimonials'>
        <h2>{title}</h2>
        <div className='testimonials_carrusel'>
            <div className='testimonial_carruse_arrow left'>
            {imgArrow}
            </div>
            <div className='testimonials_carrusel-container'
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
            {isMobile?
                <div className='testimonials-boxes'
                style={{
                    transform: `translateX(calc(-${activeIndex * 78}vw + 85vw))`,
                    transition: isTransitioning ? 'transform 0.5s ease' : 'none',
                }}
                >
                    <School schoolData={schoolData}/>
                </div>
            :
                <div className='testimonials-boxes'>
                    <School schoolData={schoolData}/>
                </div>
            }
            </div>
            <div className='testimonial_carruse_arrow rigth'>
            {imgArrow}
            </div>
        </div>
        <ul className='team-point-section' style={{ display: `${isMobile ? 'flex' : 'none'}` }}>
            {liPoints(schoolData, activeIndex)}
        </ul>
    </article>
)

}

export { Testimonials };