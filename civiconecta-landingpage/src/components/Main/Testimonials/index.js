import './Testimonials.css';
import { School } from './School';
import { schoolData } from './School/schoolInfo/schoolData';

const title = '¿Qué opinan los usuarios de Civi?';

const Testimonials = ({imgArrow}) => {
return (
    <article className='testimonials'>
        <h2>{title}</h2>
        <div className='testimonials_carrusel'>
            <div className='testimonial_carruse_arrow left'>
            {imgArrow}
            </div>
            <div className='testimonials_carrusel-container'>
                <div className='testimonials-boxes'>
                    <School schoolData={schoolData}/>
                </div>
            </div>
            <div className='testimonial_carruse_arrow rigth'>
            {imgArrow}
            </div>
        </div>
    </article>
)

}

export { Testimonials };