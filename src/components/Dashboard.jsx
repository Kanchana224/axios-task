import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import axios from 'axios';
import { API_URL } from '../App';
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  let navigate = useNavigate();
  let [blogs, setBlogs] = useState([]);

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`${API_URL}/${id}`);
      if (res.status === 200) {
        toast.success('Data Deleted Successfully...!');
        getBlogs();
      }
    } catch (error) {
      // toast.error("Internal Server Error");
    }
  };
  const toggleBlog=async(blog)=>{
    try{
      blog.status=!blog.status
      let res=await axios.put(`${API_URL}/${blog.id}`,blog)  
    if(res.status===200){
        toast.success("Data status change..!")
        getBlogs()
    }
    } catch(error){

    }
  }
const getBlogs=async()=>{
    try{
        let res=await axios.get(`${API_URL}`)
        if(res.status===200){
            setBlogs(res.data)
        }
    } catch(error){
        // toast.error("Internal Server Error")
    }
}

  useEffect(()=>{
    getBlogs()
  })

//   const toggleBlog = async (blog) => {
//     try {
//       // Implement the logic to toggle the blog status (Assuming you have a backend API endpoint for updating the status)
//       await axios.put(`${API_URL}/${blog.id}`, { status: !blog.status });
//       getBlogs();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getBlogs = async () => {
//     try {
//       let response = await axios.get(API_URL);
//       setBlogs(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getBlogs();
//   }, []);

  return (
    <div className="container-fluid">
      <TopBar />
      <div>
        <Table striped bordered hover style={{marginTop:"20px"}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>phone</th>
              <th>website</th>
              <th>company</th>
              <th>image</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{blog.names}</td>
                <td>{blog.username}</td>
                <td>{blog.email}</td>
                <td>
                {blog.address}
                </td>

                <td>{blog.phone}</td>
                <td>{blog.website}</td>
                <td>{blog.company}</td>
                <td>
                  <img
                    src={blog.image}
                    alt={`Image for ${blog.name}`}
                    style={{ width: '50px', height: '50px' }}
                  />
                </td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      defaultChecked={blog.status}
                      onChange={() => toggleBlog(blog)}
                    ></input>
                     <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  <Button variant="info" onClick={() => navigate(`/edit/${blog.id}`)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(blog.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;
