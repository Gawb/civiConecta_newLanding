import './Home.css';
import './homeMobile.css';
import heartEyes from './Heart Eyes - Square - Civicon.svg';

const homeInfo = {
    tittle: 'Programa de Orientación con planificaciones y actividades para trabajar con tus estudiantes.',
    message: 'Con este programa podrás desarrollar en tus estudiantes competencias socioemocionales que les permitan relacionarse de forma empática y respetuosa en la sociedad',
}

const Home = () => {
    return (
        <article className='article-home' id='Inicio-section' aria-labelledby="home-title">
            <section className='home-container'>
                <div className='home-info'>
                    <img src={heartEyes} alt='icono de ojos de corazón' aria-hidden="true" />
                    <h1 id="home-title">{homeInfo.tittle}</h1>
                    <p>{homeInfo.message}</p>
                </div>
                <div className='home-image-container' aria-label="Imagen relacionada con el programa">
                    <div className='home-image'>
                        {/* this section contains the image of the home */}
                    </div>
                </div>
            </section>
        </article>
    )
}

export { Home };
