import './Advantages.css';
import './AdvantagesMobile.css';
import proTeam from './imgCarrusel/professionalTeam-LQ.jpeg';
import worldMap from './imgCarrusel/worldMap-LQ.jpg';
import teacher from './imgCarrusel/Teacher-LQ.jpg';
import smileFaces from './imgCarrusel/smileIconFace-LQ.jpg';
import ministerial from './imgCarrusel/ministerial-LQ.jpg';
import childrenHands from './imgCarrusel/people-2022-01-18-23-47-19---LQ.jpg';
import searching from './imgCarrusel/searching-for-the-right---LQ.jpg';
import archive from './imgCarrusel/archive-LQ.jpg';
import { useState, useEffect, useRef } from 'react';
import { CarruselBox } from './CarruselBox';

const carruselElements = {
    color: ['--pinkCivi', '--yellowCivi', '--blueCivi', '--greenCivi', '--yellowCivi', '--greenCivi', '--pinkCivi', '--blueCivi'],
    colorCurtain: ['--pinkCiviOpaCurtain', '--yellowCiviOpaCurtain', '--BlueCiviOpaCurtain', '--greenCivyOpaCurtain', '--yellowCiviOpaCurtain', '--greenCivyOpaCurtain', '--pinkCiviOpaCurtain', '--BlueCiviOpaCurtain',],
    img: [worldMap, proTeam, teacher, smileFaces, ministerial, childrenHands, searching, archive],
    tittle: [
        'Actividades contextualizadas',
        'Creado por profesionales de la educación',
        'Creado para docentes',
        'Enfocado en la formación socioemocional',
        'Programa alineado con las indicaciones ministeriales',
        'Rol social',
        'Participación familiar',
        'Programa personalizado',
    ],
    description: [
        'Tendrás recursos pedagógicos que captarán la atención de tus estudiantes, ya que se ajustan a su realidad e intereses.',
        'Te ofrecemos material creado por profesionales de la educación que entienden tus necesidades, pues llevan más de 10 años en las aulas.',
        'Aliviamos tu trabajo administrativo al entregarte planificaciones y actividades listas para implementar.',
        'Encontrarás diversas actividades que abarcan habilidades sociales, emocionales y afectivas para tus estudiantes.',
        'Al implementar nuestras clases estarás cumpliendo con las indicaciones que te entrega el programa de Orientación ministerial.',
        'Si tu establecimiento compra el programa, permitirá que una institución educativa pública vulnerable lo reciba gratuitamente.',
        'Te proponemos actividades con las que tus estudiantes podrán compartir la reflexión del aula en el contexto familiar.',
        'Accederás a un Plan de Orientación anual que, gracias a un sistema de encuestas, se ajusta a las necesidades de tu curso.',
    ],
};

const Advantages = ({ imgArrow }) => {
    const [activeIndex, setActiveIndex] = useState(2); // Comenzar en el segundo elemento
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [startTouchX, setStartTouchX] = useState(null);
    const transitionTimeout = useRef(null);

    // Crear el carrusel extendido con elementos extra para un bucle infinito
    const extendedCarouselElements = {
        color: [
            carruselElements.color[carruselElements.color.length - 1],
            ...carruselElements.color,
            carruselElements.color[0],
        ],
        colorCurtain: [
            carruselElements.colorCurtain[carruselElements.colorCurtain.length - 1],
            ...carruselElements.colorCurtain,
            carruselElements.colorCurtain[0],
        ],
        img: [
            carruselElements.img[carruselElements.img.length - 1],
            ...carruselElements.img,
            carruselElements.img[0],
        ],
        tittle: [
            carruselElements.tittle[carruselElements.tittle.length - 1],
            ...carruselElements.tittle,
            carruselElements.tittle[0],
        ],
        description: [
            carruselElements.description[carruselElements.description.length - 1],
            ...carruselElements.description,
            carruselElements.description[0],
        ],
    };

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

        // Si el toque se mueve más de un cierto umbral (ej. 50px), realiza el desplazamiento
        if (touchDifference > 50) {
            nextSlide(); // Mover a la derecha
            setStartTouchX(null); // Reiniciar el toque
        } else if (touchDifference < -50) {
            prevSlide(); // Mover a la izquierda
            setStartTouchX(null); // Reiniciar el toque
        }
    };
    const handleTouchEnd = () => {
        setStartTouchX(null); // Limpiar el estado cuando el toque termina
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
            }, 0); // Esperar a que termine la transición
        } else if (activeIndex === extendedCarouselElements.img.length - 1) {
            transitionTimeout.current = setTimeout(() => {
                setIsTransitioning(false);
                setActiveIndex(1); // Saltar al segundo (sin transición)
            }, 0);
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

    return (
        <article className='advantages'>
            <h2>¿Cuáles son las ventajas de contar con CiviConecta?</h2>
            <div className='carrusel-container-element'>
                <div className='carrusel-arrow left-arrow' onClick={prevSlide}>
                    {imgArrow}
                </div>
                <div className='carrusel-container'
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}>
                    <div className='boxes-container'>
                        <div className='carrusel-boxes'
                            style={{
                                transform: `translateX(calc(-${activeIndex} * 100% / ${extendedCarouselElements.img.length} + 46% - 36px))`,
                                transition: isTransitioning ? 'transform 0.5s ease' : 'none',
                            }}
                        >
                            <CarruselBox carruselElements={extendedCarouselElements} activeIndex={activeIndex} imgArrow={imgArrow} />
                        </div>
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
