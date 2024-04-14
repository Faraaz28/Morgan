import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Footer from '../../components/Footer'
import Container from 'react-bootstrap/Container';
import image1 from '../../assets/services-1.jpg'
import image2 from '../../assets/portrait-2.jpg'
import image3 from '../../assets/portrait-3.jpg'
import image4 from '../../assets/portrait-4.jpg'
import image5 from '../../assets/portrait-5.jpg'

import "./Service.css"

function Service() {
  return (
    <div>

        
      <h1 className='about'></h1>
      <h1 className='text '> Service</h1>

      <Container fluid="md">
        <Row>
          <Col>

          <img className='images  pb-5' src={image1} height={350} />
           
          </Col>

          <Col className='pt-5 ps-5'>

          <h1 className='pt-5 fewword'>
              A Few Words About Us
            </h1 >
            <p className='pt-5 para'>
              There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character. I am always ready to meet all your wishes and preferences in your portrait, whether it's created as a personal painting or a piece of art for an official person. Contact me today to discuss your future portrait.
            </p>
            <Button className='btn mb-5' variant="outline-warning  ">Learn More</Button>{' '}
          </Col>
        </Row>
      </Container>


      <Container className='pb-5' fluid="md">
        <Row>
          <Col>

          <img className='image-service' src={image2} height={750} width={500} />
           
          </Col>

          <Col>

          <img className=' image-service' src={image3} height={290} width={590}/>
          <h3 className='text-service'>Oil on Canvas of a Little Girl</h3>
          <p className='ps-5 pt-4'>This portrait was created in 2015 for my brother's daughter, Emily Morgan.</p>



            {/* <Button className='btn mb-5' variant="outline-warning  ">Learn More</Button>{' '} */}
          </Col>
        </Row>
      </Container>



      <Container className='pt-5 pb-5' fluid="md">
        <Row>
          <Col>

          <img className=' image-service' src={image4} height={290} width={590}/>
          <h3 className='text-service'>Oil on Canvas of a Little Girl</h3>
          <p className='ps-5 pt-4'>This portrait was created in 2015 for my brother's daughter, Emily Morgan.</p>


           
          </Col>

          <Col>


          <img className='image-service' src={image5} height={750} width={500} />

          
          </Col>
        </Row>
      </Container>


          <Footer />
    </div>
  )
}

export default Service
