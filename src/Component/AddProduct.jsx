import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Card,Form} from 'react-bootstrap';
import { useState } from 'react';
import ProductService from '../service/ProductService';
function AddProduct() {
  
  const [product,setProduct]=useState({
    name:"",
    description:"",
    price:0.0,
    status:""
  });
  
  const [msg,setMsg]=useState();

  const handleChange=(e)=>{
    const value=e.target.value;
    setProduct({...product,[e.target.name]:value});
  }

  const ProductRegsiter=(e)=>{
    e.preventDefault();
    console.log(product);
    ProductService.saveProduct(product).then((res)=>{
        setMsg("Product Added");
        setProduct({
          name:"",
          description:"",
          price:0.0,
          status:""
        });
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
    <div className='container d-flex justify-content-center '>
    <Card className='mt-5 p-3' style={{width:"500px"}}>
    <h2 className='text-center m-1'>Add Product</h2>
    {msg && 
    <div class="alert alert-primary" role="alert">
      {msg}
    </div>
    }
    <Card.Body>
    <Form onSubmit={(e)=>ProductRegsiter(e)}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Enter Product Name</Form.Label>
      <input type="text"
      className='form-control' 
      name="name"
      onChange={(e)=>handleChange(e)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Enter Description</Form.Label>
      <input type="text"
      className='form-control' 
      name="description"
      onChange={(e)=>handleChange(e)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Price</Form.Label>
      <input type="text"
      className='form-control' 
      name="price"
      onChange={(e)=>handleChange(e)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Enter Status</Form.Label>
      <input type="text"
      className='form-control' 
      name="status"
      onChange={(e)=>handleChange(e)}
      />
    </Form.Group>
    <button className='btn btn-primary col-12 p-2'>Submit</button>
    </Form>
    </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default AddProduct