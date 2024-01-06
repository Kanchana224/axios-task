import React,{useEffect,useState}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TopBar from './TopBar'
import BlogCard from './common/BlogCard';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate,useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit() {
  let {id}=useParams()
  let [names, setName] = useState('');
  let [image, setImage] = useState('');
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [address, setAddress] = useState('');
  let [phone, setPhone] = useState('');
  let [website, setWebsite] = useState('');
  let [company, setCompany] = useState('');
  let navigate = useNavigate()

const handleEdit=async()=>{
  try{
let data={names,username,email,address,phone,website,company,image,status:false}
let res=await axios.put(`${API_URL}/${id}`,data)
if(res.status===200){
  toast.success("Post Edited Successfully..👍🤩")
  navigate("/dashboard")
}
  }
  catch(error){

  }
}

  const getBlogById=async()=>{
    try{
let res=await axios.get(`${API_URL}/${id}`)
if(res.status===200){
  setName(res.data.names);
  setUsername(res.data.username);
  setEmail(res.data.email);
  setPhone(res.data.phone);
  setAddress(res.data.address);
  setCompany(res.data.company); 
  setWebsite(res.data.website);
  setImage(res.data.image);

}
    }
    catch(error){
      // toast.error("Internal Server Error")
    }
  }

  useEffect(()=>{
    getBlogById()
  },[])
  return <div className='container-fluid'>
  <TopBar/>
  <div className='homeWrapper'>
      <div className='formWrapper'>
      <Form className="d-flex flex-column align-items-center"style={{textAlign:"center",marginTop:"20px"}}>
        <Form.Group className="mb-3 w-50 mt-5">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px"}}>Name</Form.Label>
          <Form.Control value={names} type="text" placeholder="Name" onChange={(blogs)=>{setName(blogs.target.value)}} style={{textAlign:"center"}}/>
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px"}}>Username</Form.Label>
          <Form.Control value={username} type="text" placeholder="Username" onChange={(blogs)=>{setUsername(blogs.target.value)}} style={{textAlign:"center"}}/>
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px"}}>Email</Form.Label>
          <Form.Control as="textarea"value={email} placeholder="Email" onChange={(blogs)=>{setEmail(blogs.target.value)}} style={{textAlign:"center"}}/>
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px"}}>Address</Form.Label>
          <Form.Control as="textarea" value={address} placeholder="Address" onChange={(blogs)=>{setAddress(blogs.target.value)}} style={{textAlign:"center"}}/><br/>
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px"}}>Phone</Form.Label>
          <Form.Control as="textarea" value={phone} placeholder="Phone" onChange={(blogs)=>{setPhone(blogs.target.value)}} style={{textAlign:"center"}}/>
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px"}}>Website</Form.Label>
          <Form.Control as="textarea" value={website} placeholder="Website" onChange={(blogs)=>{setWebsite(blogs.target.value)}} style={{textAlign:"center"}}/>
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px"}}>Company</Form.Label>
          <Form.Control as="textarea" value={company} placeholder="Company" onChange={(blogs)=>{setCompany(blogs.target.value)}} style={{textAlign:"center"}}/><br/>
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label style={{fontFamily:"cursive", fontSize:"20px"}}>Image Url</Form.Label>
          <Form.Control as="textarea" value={image} placeholder="Paste Image Url" onChange={(blogs)=>{setImage(blogs.target.value)}} style={{textAlign:"center"}}/>
        </Form.Group>
        
        <Button variant="primary" onClick={()=>handleEdit()} style={{marginBottom:"20px"}}>
          Submit
        </Button>
      </Form>
      </div>
      <div className='previewWrapper'>
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

export default Edit