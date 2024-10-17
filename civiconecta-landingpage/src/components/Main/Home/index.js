import './Home.css';
import './homeMobile.css';
import heartEyes from './Heart Eyes - Square - Civicon.svg';

const homeInfo = {
    tittle: 'Programa de Orientación con planificaciones y actividades para trabajar con tus estudiantes.',
    message: 'Con este programa podrás desarrollar en tus estudiantes competencias socioemocionales que les permitan relacionarse de forma empática y respetuosa en la sociedad',
}

const Home = () => {
    return (
        <article className='article-home' id='Inicio-section'>
            <section className='home-container'>
                <div className='home-info'>
                    <img src={heartEyes} alt='heart eyes icon'/>
                    <h1>{homeInfo.tittle}</h1>
                    <p>{homeInfo.message}</p>
                </div>
                <div className='home-image-container'>
                    <div className='home-image'>
                        {/* this section contains the image */}
                    </div>
                </div>
            </section>
        </article>
    )
}

export { Home };