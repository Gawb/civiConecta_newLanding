import './Contact.css';
import './ContactMobile.css';
import './popup.css';
import handIcon from './icon/Hi Hand - Square - Civicon.svg';
import letter from './icon/Letter - Civicon.svg';
import telephone from './icon/Telephone - Civicon.svg';
import { contactData, formInfo, errorMessage } from './contactData';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useForm } from '@formspree/react';

const validationSchema = Yup.object({
  name: Yup.string().required(errorMessage),
  school: Yup.string().required(errorMessage),
  email: Yup.string().email('Correo inválido').required(errorMessage),
  message: Yup.string().required(errorMessage),
});

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [state, handleSubmit] = useForm("mnnqqyyv");

  const formik = useFormik({
    initialValues: {
      name: '',
      school: '',
      email: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setPopupMessage('Enviando...');
      setShowPopup(true);
      handleSubmit(values).then(() => {
        if (state.succeeded) {
          setPopupMessage('Formulario enviado con éxito');
          resetForm();
        } else {
          setPopupMessage('Error al enviar el formulario, por favor intenta de nuevo.');
        }
      });
    }
  });

  return (
    <article className='contact' id='Contacto-section' aria-labelledby="contact-title">
      <section className='contact-container'>
        <img src={handIcon} alt="icono de mano" aria-hidden="true" />
        <h2 id="contact-title">{contactData.tittle}</h2>
        <p>{contactData.message}</p>
        <div className='contact-info'>
          <p>
            <img src={letter} alt="icono de email" aria-hidden="true" />
            {contactData.mail}
          </p>
          <p>
            <img src={telephone} alt="icono de teléfono" aria-hidden="true" />
            {contactData.phone}
          </p>
        </div>
        <form className='form-section' onSubmit={formik.handleSubmit} aria-labelledby="form-title">
          <h3 id="form-title">{formInfo.tittle}</h3>

          <input
            name="name"
            placeholder={formInfo.name}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="name-error"
            aria-required="true"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error" id="name-error" role="alert">{formik.errors.name}</div>
          ) : null}

          <input
            name="school"
            placeholder={formInfo.school}
            value={formik.values.school}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="school-error"
            aria-required="true"
          />
          {formik.touched.school && formik.errors.school ? (
            <div className="error" id="school-error" role="alert">{formik.errors.school}</div>
          ) : null}

          <input
            name="email"
            type="email"
            placeholder={formInfo.mail}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="email-error"
            aria-required="true"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error" id="email-error" role="alert">{formik.errors.email}</div>
          ) : null}

          <textarea
            name="message"
            placeholder={formInfo.message}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="message-error"
            aria-required="true"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="error" id="message-error" role="alert">{formik.errors.message}</div>
          ) : null}

          <button type="submit" disabled={state.submitting}>
            {formInfo.textButton}
          </button>
        </form>

        {showPopup && (
          <div className="popup" role="dialog" aria-live="polite">
            <div>
              {state.submitting ? <div className="spinner" aria-hidden="true"></div> : <p>{popupMessage}</p>}
            </div>
            {!state.submitting && (
              <button onClick={() => setShowPopup(false)}>Cerrar</button>
            )}
          </div>
        )}
      </section>
    </article>
  );
}

export { Contact };
