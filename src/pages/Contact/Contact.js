import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Contact.css"
import Footer from '../../components/Footer';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <>
      <div>
        <h1 className='about'></h1>
        <h1 className='text '>Contact</h1>

      </div>

      <Container fluid="md">
        <Row>
          <Col className='form pt-4'>

            <div className="login-form">
              <h2>Get in Touch</h2>
              <form action="#" method="post">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="tel" name="phone" placeholder="Your Mobile Number" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <Button className='btn mb-5' variant="outline-warning  ">Learn More</Button>{' '}
              </form>
            </div>
          </Col>

          <Col className='pb-5'>

            <div className='form  pt-5'>
              <h2>Our Address</h2>
              <p><i className=""></i>2130 Fulton Street, San Diego, USA</p>
              <p><i className=""></i>1-800-1234-567</p>
              <p><i className=""></i> info@demolink.org</p>
              <iframe height={400} width={600} className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15092.899608597789!2d72.8310554!3d18.9656724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdf5cadca43%3A0x2f248f63460fcd4f!2sHeuristic%20Academy!5e0!3m2!1sen!2sin!4v1712155173082!5m2!1sen!2sin" />
            </div>


          </Col>


        </Row>
      </Container>

      <Footer/>

    </>
  );
}

export default Contact;