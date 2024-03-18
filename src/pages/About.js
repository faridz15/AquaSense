import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import farhanImage from './images/fotofarhan.jpg';
import faridzImage from './images/fotofaridz.jpg';
import lilyImage from './images/fotolily.jpg';
import nabilImage from './images/fotonabil.jpg';

const About = () => {
  const teamMembers = [
    {
      name: 'Farhan Aditya Kusuma',
      role: '1101223222',
      instagram: 'https://www.instagram.com/frhnaditt/',
      image: farhanImage,
    },
    {
      name: 'Faridz Ramadhan Kampi',
      role: '1101220305',
      instagram: 'https://www.instagram.com/faridzkampi/',
      image: faridzImage,
    },
    {
      name: 'Aulia Ramadhani',
      role : '1101223209',
      instagram: 'https://www.instagram.com/lily.elui/',
      image: lilyImage,
    },
    {
      name: 'Abdillah Fathoni Nabil',
      role: '1101210477',
      instagram: 'https://www.instagram.com/abdillahfn_/',
      image: nabilImage,
    },
  ];

  return (
    <Container>
      <h1>About Us</h1>
      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={member.image} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.role}</Card.Text>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default About;
