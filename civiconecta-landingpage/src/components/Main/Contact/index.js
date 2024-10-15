import './Contact.css';
import './ContactMobile.css';
import handIcon from './icon/Hi Hand - Square - Civicon.svg';
import letter from './icon/Letter - Civicon.svg';
import telephone from './icon/Telephone - Civicon.svg';
import {contactData, formInfo, errorMessage} from './contactData';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
    name: Yup.string().required(errorMessage),
    school: Yup.string().required(errorMessage),
    email: Yup.string().email('Correo inválido').required(errorMessage),
    message: Yup.string().required(errorMessage),
});

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            school: '',
            email: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            // Aquí puedes manejar lo que ocurre al enviar el formulario
            console.log('Formulario enviado:', values);
        }
    });

    return (
        <article className='contact'>
            <section className='contact-container'>
                <img src={handIcon} alt="hand icon" />
                <h2>{contactData.tittle}</h2>
                <p>{contactData.message}</p>
                <div className='contact-info'>
                    <p><img src={letter} alt="email" />{contactData.mail}</p>
                    <p><img src={telephone} alt="phone" />{contactData.phone}</p>
                </div>
                <form className='form-section' onSubmit={formik.handleSubmit}>
                        <h3>{formInfo.tittle}</h3>
                        <input
                            name="name"
                            placeholder={formInfo.name}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                        <input
                            name="school"
                            placeholder={formInfo.school}
                            value={formik.values.school}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.school && formik.errors.school ? <div className="error">{formik.errors.school}</div> : null}
                        <input
                            name="email"
                            type="email"
                            placeholder={formInfo.mail}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                        <textarea
                            name="message"
                            placeholder={formInfo.message}
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.message && formik.errors.message ? <div className="error">{formik.errors.message}</div> : null}
                        <button type="submit">{formInfo.textButton}</button>
                    </form>
            </section>
        </article>
    );
}

export { Contact };
