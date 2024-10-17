import './Contact.css';
import './ContactMobile.css';
import './popup.css';
import handIcon from './icon/Hi Hand - Square - Civicon.svg';
import letter from './icon/Letter - Civicon.svg';
import telephone from './icon/Telephone - Civicon.svg';
import {contactData, formInfo, errorMessage} from './contactData';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';



const validationSchema = Yup.object({
    name: Yup.string().required(errorMessage),
    school: Yup.string().required(errorMessage),
    email: Yup.string().email('Correo inválido').required(errorMessage),
    message: Yup.string().required(errorMessage),
});

const Contact = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);



    const formik = useFormik({
        initialValues: {
            name: '',
            school: '',
            email: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, {resetForm}) => {
            console.log('Formulario enviado:', values);
            setPopupMessage('Enviando...');
            setShowPopup(true);
            setIsSubmitting(true);

            const formData = new FormData();
            formData.append('Nombre', values.name);
            formData.append('Institución', values.school);
            formData.append('Email', values.email);
            formData.append('Mensaje', values.message);

            fetch('https://formsubmit.co/47b4a80db01ff44acdb8263c88ff76c8', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                }
            })
            .then(response => {
                if (response.ok) {
                    setPopupMessage('Formulario enviado con éxito');
                    setShowPopup(true);
                    resetForm();
                } else {
                    setPopupMessage('Error al enviar el formulario');
                    setShowPopup(true);
                }
            })
            .catch(error => {
                setPopupMessage('Hubo un problema con el envío del formulario');
                setShowPopup(true);
                console.error('Error:', error);
            });
        }
    });

    return (
        <article className='contact' id='Contacto-section'>
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

                    {showPopup && (
                        <div className="popup">
                            <div>
                                {isSubmitting ?
                                <div className="spinner"></div>
                                : <p>{popupMessage}</p>}
                            </div>
                            {!isSubmitting && (
                            <button onClick={() => setShowPopup(false)}>Cerrar</button>
                            )}
                        </div>
                    )}
            </section>
        </article>
    );
}

export { Contact };
