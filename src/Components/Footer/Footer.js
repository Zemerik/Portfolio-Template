import "./Footer.scss";
import Lottie from "lottie-react";
import deca from "./deca.json";

const Footer = () => {
  const openEmailClient = () => {
    const recipientEmail = "zemeriky@gmail.com";
    const subject = "Inbox"; // You can customize the subject if needed
    const body = ""; // You can customize the body if needed

    const emailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      recipientEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(emailUrl);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="flex-row">
        <div className="flex-col">
          <h1 className="footer-col-heading">Get in Touch</h1>
          <p>
            If you have any questions or inquiries, feel free to reach out to
            me.
          </p>
          <br />
          <p></p>
        </div>
        <div className="flex-col">
          <h1 className="footer-col-heading">Follow me</h1>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={openEmailClient} rel="noopener noreferrer">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/zemerik/"
            className="font-class"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Zemerik"
            className="font-class"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <div className="circle" onClick={scrollToTop}>
            <div className="arrow-icon"></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <Lottie className="lottie" animationData={deca} />
        <p>Made wtih 💖 by <a href = "https://github.com/Zemerik">Hemang Yadav</a></p>
      </div>
    </footer>
  );
};

export default Footer;
