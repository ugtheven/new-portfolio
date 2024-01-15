import { ValidationError, useForm } from "@formspree/react";
import "./ContactForm.scss";
import { BsFillSendCheckFill, BsFillSendFill } from "react-icons/bs";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mbjnlkyp");

  return (
    <div className="form" id="contact-form">
      <span className="title">FORMULAIRE DE CONTACT</span>
      {state.succeeded ? (
        <div>
          <BsFillSendCheckFill />
          <p className="success-message">
            Le formulaire a été envoyé avec succès !
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Votre nom / Nom de votre entreprise</label>
          <input id="name" type="name" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email">Votre addresse mail</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Votre message</label>
          <textarea id="message" name="message" rows={4} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            className="submit-button"
            disabled={state.submitting}
          >
            <BsFillSendFill className="submit-icon" />
            <span>Envoyer</span>
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
