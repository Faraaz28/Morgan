import "./Home.css";
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import user from '../../assets/user.png';
import leaf from '../../assets/leaf.png';
import house from '../../assets/house.png';
import homeimg from '../../assets/home.jpg';
import Button from 'react-bootstrap/Button';
import apple from '../../assets/apple-logo.png'
import Shopping from "../../components/Shopping"
import Container from 'react-bootstrap/Container';
import bgimg from '../../assets/brand-inverse.png';
import Footer from "../../components/Footer";

function ContainerFluidExample() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='bgimg'>
        
          <img className='background' src={bgimg} alt="back-img" />
      </div>

      <div>
        <Container>
          <Row>
            <Col className='mt-5 ms-4'>
              <h1>A Few Words About Me</h1>
              <p className=' home-para mt-4'>
                My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you.
              </p>
              <Button className='btn' variant="outline-warning">Learn More</Button>{' '}

            </Col>
            <Col>
              <img className='home-img' src={homeimg} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      < Shopping />


      

      <h1 className='tital' >Service</h1>
      <Container>
        <Row>
          <p className='tital' >If you are looking for custom paintings, which will decorate your home or office, consider booking one or several of my services listed below. They will add more colors and emotions to your daily life.</p>
        </Row>
      </Container>

      <Container className="pt-5">
        <Row>
          <Col className=' box'>
        
              <img className='div-one img' src={user} alt="" />
              <h3 className='div-text1'>Portrait</h3>

           
          </Col>

          <Col className='box ms-5'>
        
              <img className='img' src={leaf} alt="" />
              <h3 className='div-text2'>Landscape</h3>

          </Col>

          <Col className='box ms-5'>
            
              <img className='img' src={apple} alt="" />
              <h3 className='div-text3'>Still Life</h3>

          </Col>

          <Col className='box ms-5'>
            
              <img className='img' src={house} alt="" />
              <h3 className='div-text4'>Urban</h3>
        
          </Col>
        </Row>
      </Container>
      <Button className='btn mb-5 mt-5' variant="outline-warning  footer-button">View All Service</Button>{' '}

      <Footer />

    </>

  );
}

export default ContainerFluidExample;