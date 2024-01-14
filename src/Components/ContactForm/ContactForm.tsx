import { ValidationError, useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mbjnlkyp");


  return (
    <div className="form">
      <span className="title">FORMULAIRE DE CONTACT</span>
      {state.succeeded ? (
        <p className="success-message">
          Le formulaire a été envoyé avec succès !
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Nom</label>
          <input id="name" type="name" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
