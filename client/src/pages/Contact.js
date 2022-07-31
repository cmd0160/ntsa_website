import emailjs from 'emailjs-com';


const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_7ykpuqm", "template_dn09d7v", e.target, "mCG88DAOqQCwIdyiA")
      .then((result) => {
          console.log(result.text);
          alert("Message Sent!")
        },(error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  }

  return (
    <div className="contact-con">
        <h1 className="contact-title p-2">Contact Us</h1>
        <p>Questions?<br></br> Fill out the following form to contact us. <br></br></p>
        <form className="" onSubmit={sendEmail}>
          <input
            type="text"
            className="text name"
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            className="text email"
            placeholder="Email Address"
            name="email"
          />
          <input
            type="text"
            className="text subject"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            type="text"
            className="text message"
            placeholder="Message"
            name="message"
          />
          <div>
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
    </div>
  );
};

export default Contact;
