import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import axios from 'axios';
import { API_URL } from '../App';
import { toast } from 'react-toastify';
import BlogCard from './common/BlogCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    let [blogs, setBlogs] = useState([]);

    const getBlogs=async()=>{
        try{
            let res=await axios.get(`${API_URL}`)
            if(res.status===200){
                setBlogs(res.data.filter(blog=>blog.status))
            }
        } catch(error){
            // toast.error("Internal Server Error")
        }
    }
    useEffect(()=>{
        getBlogs()
      },[])
    
  return <>
  <TopBar />
  <div className="previewWrapper">
    <Container fluid>
      <Row>
        {blogs.map(({ id, names, username, email, address, phone, website, company, image, status }, i) => {
          return (
            <Col lg={4} md={6} sm={12} key={i} style={{ width: "100%", marginTop:"20px"}}>
              <BlogCard
                key={i}
                id={id}
                names={names}
                username={username}
                email={email}
                address={address}
                phone={phone}
                website={website}
                company={company}
                image={image}
                status={status}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  </div>
</>
}

export default Home