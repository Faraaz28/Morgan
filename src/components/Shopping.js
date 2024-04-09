import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Button from '../../components/Button';


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';
import project5 from '../assets/project-5.jpg';
import project6 from '../assets/portrait-3.jpg';

export default function Shopping() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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


      <h2 className='text-center text-5xl'>My Paintings</h2>

      {paintings.map((item) => (

        <div >

          <Card style={{ width: '18rem' }}>

            <Card.Img variant="top" src={item.image} />

            <Card.Body>

              <Card.Title>{item.title}</Card.Title>

              <Card.Text>

                {item.description}

              </Card.Text>

              <Button variant="primary" onClick={handleShow}>
                Launch demo modal
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>

                <Modal.Header closeButton>

             

                  <Modal.Title>{item.title}</Modal.Title>

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



            </Card.Body>

          </Card>

        </div>

      ))}




    </>
  )
}