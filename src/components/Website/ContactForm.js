const ContactForm = (props) => {
  return (
    <div id="contactForm" className="boxDialog">
      <div id="mobileDialog">
        <a href="#close" title="Close" class="close">
          <strong>X</strong>
        </a>
        <form className="formFormat" action="/send" method="POST">
          <h2>Get in touch!</h2>
          <p>
            <h5>Please use the form below to contact me.</h5>
          </p>
          <p>
            <h5>
              I will endeavour to get back in touch with you as soon as I can
              within 48 hours.
            </h5>
          </p>
          <input type="text" name="name" placeholder="name" required />
          <br />
          <input type="email" name="email" placeholder="email" required />
          <br />
          <textarea
            rows="4"
            name="comments"
            placeholder="submit your query here..."
            required
          ></textarea>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
