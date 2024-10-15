import './Home.css';
import './homeMobile.css';
import heartEyes from './Heart Eyes - Square - Civicon.svg';

const homeTitle = 'Programa de Orientación con planificaciones y actividades para trabajar con tus estudiantes.';
const homeMessage = 'Con este programa podrás desarrollar en tus estudiantes competencias socioemocionales que les permitan relacionarse de forma empática y respetuosa en la sociedad';
const Home = () => {
    return (
        <article className='article-home'>
            <div>
                <img src={heartEyes} alt='heart eyes icon'/>
                <h1>{homeTitle}</h1>
                <p>{homeMessage}</p>
            </div>
            <div>
                <div></div>
            </div>
        </article>
    )
}

export { Home };