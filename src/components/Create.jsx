import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TopBar from './TopBar'
import BlogCard from './common/BlogCard';
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Create() {
  let [names, setName] = useState('');
  let [image, setImage] = useState('');
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [address, setAddress] = useState('');
  let [phone, setPhone] = useState('');
  let [website, setWebsite] = useState('');
  let [company, setCompany] = useState('');
  let navigate = useNavigate()

const handleCreate=async()=>{
try{
let data={names,username,email,address,phone,website,company,image,status:true}
let res=await axios.post(API_URL,data)
if(res.status===201){
  toast.success("Post created successfully..❤😎")
navigate("/dashboard")
}

}
catch(error){


}

  }

  return<div className='container-fluid'>
  <TopBar/>
  <div className='homeWrapper'>
      <div className='formWrapper'>
      <Form className="d-flex flex-column align-items-center"style={{textAlign:"center",marginTop:"20px"}}>
        <Form.Group className="mb-3 w-50 mt-5">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px",color:"white"}}>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" onChange={(blogs)=>{setName(blogs.target.value)}} style={{textAlign:"center"}}/>
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px",color:"white"}}>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" onChange={(blogs)=>{setUsername(blogs.target.value)}} style={{textAlign:"center"}}/>
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px",color:"white"}}>Email</Form.Label>
          <Form.Control as="textarea" placeholder="Email" onChange={(blogs)=>{setEmail(blogs.target.value)}} style={{textAlign:"center"}}/>
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px",color:"white"}}>Address</Form.Label>
          <Form.Control as="textarea" placeholder="Address" onChange={(blogs)=>{setAddress(blogs.target.value)}} style={{textAlign:"center"}}/><br/>
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px",color:"white"}}>Phone</Form.Label>
          <Form.Control as="textarea" placeholder="Phone" onChange={(blogs)=>{setPhone(blogs.target.value)}} style={{textAlign:"center"}}/>
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px",color:"white"}}>Website</Form.Label>
          <Form.Control as="textarea" placeholder="Website" onChange={(blogs)=>{setWebsite(blogs.target.value)}} style={{textAlign:"center"}}/>
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px",color:"white"}}>Company</Form.Label>
          <Form.Control as="textarea" placeholder="Company" onChange={(blogs)=>{setCompany(blogs.target.value)}} style={{textAlign:"center"}}/><br/>
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px",color:"white"}}>Image Url</Form.Label>
          <Form.Control as="textarea" placeholder="Paste Image Url" onChange={(blogs)=>{setImage(blogs.target.value)}} style={{textAlign:"center"}}/>
        </Form.Group>
        
        <Button variant="primary" onClick={()=>handleCreate()} style={{marginBottom:"20px"}}>
          Submit
        </Button>
      </Form>
      </div>
      <div className='previewWrapper' style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h2 style={{textAlign:"center"}}>Preview</h2>
        <BlogCard 
        names={names}
        username={username}
        email={email}
        address={address}
        phone={phone}
        website={website}
        company={company}
        image={image}/>
        </div>
  </div>
  </div>
}

export default Create