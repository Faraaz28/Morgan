import bgimg from '../../assets/brand-inverse.png'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import homeimg from '../../assets/home.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import project1 from '../../assets/project-1.jpg'
import project2 from '../../assets/portrait-4.jpg'
import project3 from '../../assets/project-3.jpg'
import project4 from '../../assets/project-4.jpg'
import project5 from '../../assets/project-5.jpg'
import project6 from '../../assets/project-6.jpg'
import house from '../../assets/house.png'
import leaf from '../../assets/leaf.png'
import user from '../../assets/user.png'
import apple from '../../assets/apple-logo.png'
import React from 'react'
import "./Home.css"

function ContainerFluidExample() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='bgimg'>
        <div>
          <img className='background' src={bgimg} alt="" />
        </div>
      </div>
      <div>
        <Container>
          <Row>
            <Col className='mt-5'>
              <h1>A Few Words About Me</h1>
              <p className=' home-para mt-5'>
                My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you.
              </p>
              <Button className='btn' variant="outline-warning">Start</Button>{' '}

            </Col>
            <Col>
              <img className='home-img' src={homeimg} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <section>
        <h1 className='tital' >My Paintings</h1>
        <Container>
          <Row>
            <Col className='mt-5'>
              <div className='cards'>
                <Card style={{ width: '21rem' }}>
                  <Card.Img src={project1} />
                  <Card.Body>
                    <Card.Title className='card-tital pb-3'>Sea Storm</Card.Title>
                    <Card.Text>
                      This paintings is one of my latest works on sea ..
                    </Card.Text>

                    <Button variant="outline-warning" onClick={handleShow}>
                      View Detail
                    </Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                      <Modal.Header closeButton>
                        <Modal.Title className='card-tital pb-3'>Sea Storm</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>  <Card.Img src={project1} /> This paintings is one of my latest works on sea .. This paintings is one of my latest works on sea .. This paintings is one of my latest works on sea .. This paintings is one of my latest works on sea .. This paintings is one of my latest works on sea ..</Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-warning" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <h5 className='price'>$200</h5>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className='mt-5'>
              <div className='cards'>
                <Card style={{ width: '21rem' }}>
                  <Card.Img src={project2} />
                  <Card.Body>
                    <Card.Title className='card-tital pb-3'>Watercolor Portrait</Card.Title>
                    <Card.Text>
                      When I have been to Scotland, I made this painting...
                    </Card.Text>

                    <Button variant="outline-warning" onClick={handleShow}>
                      View Detail
                    </Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                      <Modal.Header closeButton>
                        <Modal.Title className='card-tital pb-3'>Watercolor Portrait</Modal.Title>
                      </Modal.Header>
                      <Modal.Body> <Card.Img src={project2} /> When I have been to Scotland, I made this painting...When I have been to Scotland, I made this painting...When I have been to Scotland, I made this painting...</Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-warning" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <h5 className='price'>$200</h5>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className='mt-5'>
              <div className='cards'>
                <Card style={{ width: '21rem' }}>
                  <Card.Img className='card-img' src={project3} />
                  <Card.Body>
                    <Card.Title className='card-tital pb-3'>Two Lovers</Card.Title>
                    <Card.Text>
                      This work was finished in two days for my custo...
                    </Card.Text>

                    <Button variant="outline-warning" onClick={handleShow}>
                      View Detail
                    </Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                      <Modal.Header closeButton>
                        <Modal.Title className='card-tital pb-3'>Sea Storm</Modal.Title>
                      </Modal.Header>
                      <Modal.Body> <Card.Img src={project3} /> This work was finished in two days for my customer This work was finished in two days for my customer This work was finished in two days for my customer This work was finished in two days for my customer. This work was finished in two days for my customer.</Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-warning" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <h5 className='price'>$200</h5>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col className='mt-5'>
              <div className='cards'>
                <Card style={{ width: '21rem' }}>
                  <Card.Img src={project4} />
                  <Card.Body>
                    <Card.Title className='card-tital pb-3'>Birches in Autumn</Card.Title>
                    <Card.Text>
                      This paintings is one of my latest works on sea ..
                    </Card.Text>

                    <Button variant="outline-warning" onClick={handleShow}>
                      View Detail
                    </Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                      <Modal.Header closeButton>
                        <Modal.Title className='card-tital pb-3'>Birches in Autumn</Modal.Title>
                      </Modal.Header>
                      <Modal.Body> <Card.Img src={project4} /> This work was finished in two days for my customer This work was finished in two days for my customer This work was finished in two days for my customer This work was finished in two days for my customer. This work was finished in two days for my customer.</Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-warning" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <h5 className='price'>$200</h5>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className='mt-5'>
              <div className='cards'>
                <Card style={{ width: '21rem' }}>
                  <Card.Img src={project5} />
                  <Card.Body>
                    <Card.Title className='card-tital pb-3'>Ruins of Ancient Fortress</Card.Title>
                    <Card.Text>
                      When I have been to Scotland, I made this painting...
                    </Card.Text>

                    <Button variant="outline-warning" onClick={handleShow}>
                      View Detail
                    </Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                      <Modal.Header closeButton>
                        <Modal.Title className='card-tital pb-3'>Birches in Autumn</Modal.Title>
                      </Modal.Header>
                      <Modal.Body> <Card.Img src={project5} /> This work was finished in two days for my customer This work was finished in two days for my customer This work was finished in two days for my customer This work was finished in two days for my customer. This work was finished in two days for my customer.</Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-warning" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <h5 className='price'>$200</h5>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className='mt-5'>
              <div className='cards'>
                <Card style={{ width: '21rem' }}>
                  <Card.Img className='card-img' src={project6} />
                  <Card.Body>
                    <Card.Title className='card-tital pb-3'>Green Landscape</Card.Title>
                    <Card.Text>
                      This work was finished in two days for my customer...
                    </Card.Text>

                    <Button variant="outline-warning" onClick={handleShow}>
                      View Detail
                    </Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                      <Modal.Header closeButton>
                        <Modal.Title className='card-tital pb-3'>Green Landscape</Modal.Title>
                      </Modal.Header>
                      <Modal.Body> <Card.Img src={project6} /> This work was finished in two days for my customer This work was finished in two days for my customer This work was finished in two days for my customer This work was finished in two days for my customer. This work was finished in two days for my customer.</Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-warning" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <h5 className='price'>$200</h5>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <h1 className='tital' >Service</h1>
      <Container>
        <Row>
          <p className='tital' >If you are looking for custom paintings, which will decorate your home or office, consider booking one or several of my services listed below. They will add more colors and emotions to your daily life.</p>
        </Row>
      </Container>


      <Container>
        <Row>
          <Col className='div'>
            <div1 >
              <img className='div-one' src={user} alt="" />
              <h3 className='div-text'>Portrait</h3>

            </div1>
          </Col>

          <Col className='div ms-5'>
            <div2 >
              <img className='div-one' src={leaf} alt="" />
              <h3 className='div-text2'>Landscape</h3>

            </div2>
          </Col>

          <Col className='div ms-5'>
            <div3>
              <img className='div-one' src={apple} alt="" />
              <h3 className='div-text3'>Still Life</h3>

            </div3>
          </Col>

          <Col className='div ms-5'>
            <div4>
              <img className='div-one' src={house} alt="" />
              <h3 className='div-text4'>Urban</h3>
            </div4>
          </Col>

        </Row>
      </Container>
    </>

  );
}

export default ContainerFluidExample;