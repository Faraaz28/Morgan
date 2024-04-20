import "./Shopping.css";
import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';
import project5 from '../assets/project-5.jpg';
import project6 from '../assets/portrait-3.jpg';
import Container from 'react-bootstrap/Container';

export default function Shopping() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (display) => {
    setSelectedPost(display);
    setShow(true);
  };

  const [selectedPost, setSelectedPost] = useState(null);


  const paintings = [
    {
      "image": project1,
      "title": "Sea Storm",
      "description": "This painting is one of my latest works on sea."
    },
    {
      "image": project2,
      "title": "Ruins of Ancient Fortress",
      "description": "When I have been to Scotland, I made this painting."
    },
    {
      "image": project3,
      "title": "Two Lovers",
      "description": "This work was finished in two days for my customer."
    },
    {
      "image": project4,
      "title": "Watercolor Portrait",
      "description": "Jane Williams, my friend and colleague, asked..."
    },
    {
      "image": project5,
      "title": "Birches in Autumn",
      "description": "I love painting autumn trees and this work is a..."
    },
    {
      "image": project6,
      "title": "Green Landscape",
      "description": "Another abstract work, which appeared at my..."
    }
  ];

  return (
    <>
      <Container className="">
        <Row className="card-item">
          <h1 className='text-center painting mt-5'>My Paintings</h1>
          {paintings.map((display) => (
            <Col className='pt-3 ' lg={4}>
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={display.image} height={'320rem'} />
                <Card.Body>
                  <Card.Title variant="warning">{display.title}</Card.Title>
                  <Card.Text>
                    {display.description}
                  </Card.Text>
                  <Button variant="outline-warning" onClick={handleShow}>
                    View Demo
                  </Button>


                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedPost ? display.title : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedPost ? display.image : ''} className="card-img" alt="Selected Post" />
                    <p>{selectedPost ? display.description : ''}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal> */}
                </Card.Body>
              </Card>
            </Col>
          ))
          }
        </Row></Container>
    </>
  )
}