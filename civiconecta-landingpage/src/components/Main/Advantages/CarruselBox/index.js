import './CarruselBox.css';
import './CarruselBoxMobile.css';

const CarruselBox = ({ carruselElements, imgArrow, activeIndex }) => {

    const createBox = (carruselElements, activeIndex) =>
        carruselElements.img.map((img, index) => (
            <div
                key={index}
                className={`carruselBox ${index === activeIndex ? 'active' : index === activeIndex - 1 || index === activeIndex + 1 ? 'adjacent' : ''}`}
                style={{
                    border: `0.2vw solid var(${carruselElements.color[index]})`,
                }}
                aria-hidden={index !== activeIndex} // Solo el índice activo es accesible
            >
                <div className='box-img'
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: `cover`
                    }}
                    role="img"
                    aria-label={carruselElements.tittle[index]} // Añadir un aria-label para el título
                >
                    <div style={{
                        backgroundColor: `var(${index === activeIndex ? 'transparent' : carruselElements.colorCurtain[index]})`,
                        opacity: `${index === activeIndex ? 0 : 1}`,
                        width: `100%`,
                        height: `100%`,
                        transition: `0.3s`
                    }}></div>
                </div>
                <div className='box-content'>
                    <div
                        className='box-arrow'
                        style={{ backgroundColor: `var(${carruselElements.color[index]})` }}
                    >
                        {imgArrow}
                    </div>
                    <h3>{carruselElements.tittle[index]}</h3>
                </div>
                <p
                    className={`description ${index === activeIndex ? 'active' : index === activeIndex - 1 || index === activeIndex + 1 ? 'adjacent' : ''}`}
                >{carruselElements.description[index]}</p>
            </div>
        ));

    return createBox(carruselElements, activeIndex);
}

export { CarruselBox };
