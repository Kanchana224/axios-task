import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BlogCard({ names, username, email, address, phone, website, company, image, status }) {
  return (
    <Row className="justify-content-center">
      <Col md={8} lg={6} className="mt-4">
        <Card style={{ width: '100%', textAlign: 'center', border: '2px solid black', marginTop: '50px' }} className='Titlehead'>
          <Card.Title style={{ fontSize: '28px', fontWeight: 'bolder', height: 'auto', fontFamily: 'fantasy' }}>{names}</Card.Title>
          <Card.Subtitle className="mb-2" style={{ fontSize: '24px', fontWeight: 'bolder', height: 'auto', fontFamily: 'fantasy' }}>{username}</Card.Subtitle>
          <Card.Img variant="top" src={image} alt={names} style={{ width: '50%', height: '50%', objectFit: 'cover',margin:"auto",borderRadius:"70%"}} />
          <ListGroup className="list-group-flush" style={{ fontFamily: '-moz-initial', marginTop: '20px' }}>
            <ListGroup.Item style={{ fontSize: '20px', fontWeight: 'bolder', marginBottom: '10px', height: 'auto' }}>Email: {email}</ListGroup.Item>
            <ListGroup.Item style={{ fontSize: '20px', fontWeight: 'bolder', marginBottom: '10px', height: 'auto' }}>Address: {address}</ListGroup.Item>
            <ListGroup.Item style={{ fontSize: '20px', fontWeight: 'bolder', marginBottom: '10px', height: 'auto' }}>Phone: {phone}</ListGroup.Item>
            <ListGroup.Item style={{ fontSize: '20px', fontWeight: 'bolder', marginBottom: '10px', height: 'auto' }}>Website: {website}</ListGroup.Item>
            <ListGroup.Item style={{ fontSize: '20px', fontWeight: 'bolder', marginBottom: '10px', height: 'auto' }}>Company: {company}</ListGroup.Item>
            <ListGroup.Item style={{ fontSize: '20px', fontWeight: 'bolder', marginBottom: '10px', height: 'auto' }}>Status: {status ? 'Active' : 'Inactive'}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default BlogCard;
