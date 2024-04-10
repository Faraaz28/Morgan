import './About.css'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Footer from '../../components/Footer'
import image from '../../assets/still-life-1.jpg'
import Container from 'react-bootstrap/Container';

function About() {
  return (
    <div>
      <h1 className='about'></h1>
      <h1 className='text '> About</h1>

      <Container fluid="md">
        <Row>
          <Col>
            <h1 className='pt-5 fewword'>
              A Few Words About Us
            </h1 >
            <p className='pt-5 para'>
              There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character. I am always ready to meet all your wishes and preferences in your portrait, whether it's created as a personal painting or a piece of art for an official person. Contact me today to discuss your future portrait.
            </p>
            <Button className='btn mb-5' variant="outline-warning  ">Learn More</Button>{' '}
          </Col>

          <Col>
            <img className='image ' src={image} height={550} />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  )
}

export default About
