import './index.css';
import './homeMobile.css';
import heartEyes from './Heart Eyes - Square - Civicon.svg';

const Home = () => {
    return (
        <article className='article-home'>
            <div>
                <img src={heartEyes} alt='heart eyes icon'/>
                <h1>Programa de Orientación con
                    planificaciones y actividades
                    para trabajar con tus estudiantes.</h1>
                <p>Con este programa podrás desarrollar en tus estudiantes competencias socioemocionales que les permitan relacionarse de forma empática y respetuosa en la sociedad</p>
            </div>
            <div>
                <div></div>
            </div>
        </article>
    )
}

export { Home };