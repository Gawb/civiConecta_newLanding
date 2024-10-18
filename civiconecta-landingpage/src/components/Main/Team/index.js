import './Team.css';
import './TeamMobile.css';
import { Member } from './Member';
import { memberDetails } from './Member/memberInfo';
import { useState, useEffect, useRef } from 'react';

const teamTitle = '¿Quiénes forman parte de nuestro equipo?';
const teamMessage = 'Hola, al igual que tú, trabajamos en las aulas chilenas y con nuestra experiencia queremos ayudarte a desarrollar todo el potencial de tus estudiantes. ¡Te invitamos a conocernos!';

const Team = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [startTouchX, setStartTouchX] = useState(null);
    const transitionTimeout = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);

    const totalSlides = memberDetails.photo.length;

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
        elements.color.map((color, index) => (
            <li
                key={index}
                id={`element-${color}`}
                className={`point ${index === (activeIndex - 1) ? 'point-selected' : ''}`}
                style={{
                    backgroundColor: index === (activeIndex - 1) ? `var(${color})` : 'lightgray'
                }}
                role="button"
                aria-label={`Deslizar a ${index + 1} de ${totalSlides}`}
                tabIndex={0} // Permitir que el elemento sea enfocado por teclado
                onClick={() => setActiveIndex(index + 1)} // Permitir navegación mediante clic
                onKeyDown={(e) => e.key === 'Enter' && setActiveIndex(index + 1)} // Permitir navegación mediante teclado
            ></li>
        ));

    return (
        <article className='team-section' id='Profesionales-section' aria-labelledby="team-title">
            <section className='team-info'>
                <h2 id="team-title">{teamTitle}</h2>
                <p>{teamMessage}</p>
            </section>
            <section className='team-members'
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                aria-label="Miembros del equipo"
                aria-live="polite"
            >
                {isMobile ? (
                    <div className='team-members_slide'
                        style={{
                            transform: `translateX(calc(-${activeIndex * 78}vw + 90vw))`,
                            transition: isTransitioning ? 'transform 0.5s ease' : 'none',
                        }}
                    >
                        <Member memberDetails={memberDetails} />
                    </div>
                ) : (
                    <div className='team-members_slide'>
                        <Member memberDetails={memberDetails} />
                    </div>
                )}
            </section>
            <ul className='team-point-section' style={{ display: `${isMobile ? 'flex' : 'none'}` }}>
                {liPoints(memberDetails, activeIndex)}
            </ul>
        </article>
    );
};

export { Team };
