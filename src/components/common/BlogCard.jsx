import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BlogCard({ names, username, email, address, phone, website, company, image, status }) {
  return (
    <Row>
      <Col className="d-flex justify-content-center align-items-center">
        <Card style={{ width: '50%', textAlign: 'center', border: '2px solid black', height: '90%', marginTop: '120px' }} className='Titlehead'>
          <Card.Title style={{ fontSize: '28px', fontWeight: 'bolder', height: '40px', fontWeight: 'bolder', fontFamily: 'fantasy' }}>{names}</Card.Title>
          <Card.Subtitle className="mb-2" style={{ fontSize: '24px', fontWeight: 'bolder', height: '40px', fontWeight: 'bolder', fontFamily: 'fantasy' }}>{username}</Card.Subtitle>
          <Card.Img variant="top" src={image} alt={names} style={{ width: '100%', height: '50%' }} />
          <ListGroup className="list-group-flush" style={{ height: '50px', fontFamily: '-moz-initial', marginTop: '-20px' }}>
            <ListGroup.Item style={{ fontSize: '20px', fontWeight: 'bolder', height: '40px', fontWeight: 'bolder', marginBottom: '0', height:"80px"}}>Email: {email}</ListGroup.Item>
            <ListGroup.Item style={{ fontSize: '20px', fontWeight: 'bolder', height: '40px', fontWeight: 'bolder', marginBottom: '0',height:"80px"}}>Address:{address}</ListGroup.Item>
            <ListGroup.Item style={{ fontSize: '20px', fontWeight: 'bolder', height: '40px', fontWeight: 'bolder', marginBottom: '0',height:"80px"}}>Phone: {phone}</ListGroup.Item>
            <ListGroup.Item style={{ fontSize: '20px', fontWeight: 'bolder', height: '40px', fontWeight: 'bolder', marginBottom: '0',height:"80px" }}>Website: {website}</ListGroup.Item>
            <ListGroup.Item style={{ fontSize: '20px', fontWeight: 'bolder', height: '40px', fontWeight: 'bolder', marginBottom: '0',height:"80px" }}>Company:{company}</ListGroup.Item>
            <ListGroup.Item style={{ fontSize: '20px', fontWeight: 'bolder', height: '40px', fontWeight: 'bolder', marginBottom: '0',height:"80px" }}>Status: {status ? 'Active' : 'Inactive'}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default BlogCard;
