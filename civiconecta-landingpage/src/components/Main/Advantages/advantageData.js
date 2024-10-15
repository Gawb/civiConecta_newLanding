import proTeam from './imgCarrusel/professionalTeam-LQ.jpeg';
import worldMap from './imgCarrusel/worldMap-LQ.jpg';
import teacher from './imgCarrusel/Teacher-LQ.jpg';
import smileFaces from './imgCarrusel/smileIconFace-LQ.jpg';
import ministerial from './imgCarrusel/ministerial-LQ.jpg';
import childrenHands from './imgCarrusel/people-2022-01-18-23-47-19---LQ.jpg';
import searching from './imgCarrusel/searching-for-the-right---LQ.jpg';
import archive from './imgCarrusel/archive-LQ.jpg';

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

export { extendedCarouselElements, carruselElements };