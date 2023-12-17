import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Card} from 'react-bootstrap';
import ProductService from '../service/ProductService';
import { Link } from 'react-router-dom';
function Home() {

  const[productList,setProductList]=useState([]);
  const [msg,setMsg]=useState();

  useEffect(()=>{
    init();
  },[])

 const init=()=>{
  ProductService.getAllProduct().then((res)=>{
    setProductList(res.data);
    console.log(res.data);
  }).catch((err)=>{
      console.log(err);
  })
 }
 const deleteProduct=(id)=>{
    ProductService.deleteProduct(id).then((res)=>{
      setMsg("Product Deleted..!")
      init();
  }).catch((err)=>{
    console.log(err);
  })
 }
  return (
    <div className='container d-flex justify-content-center '>
    <Card className='mt-5 p-3' style={{width:"1000px"}}>
    <h2 className='text-center m-1'>All Products</h2>
    <Card.Body>
    {msg && 
      <div class="alert alert-primary" role="alert">
        {msg}
      </div>
      }
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Sr no</th>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    {
     
      productList.map((p,num)=>{

        return(
          <tr>
          <td>{num+1}</td>
          <td>{p.name}</td>
          <td>{p.description}</td>
          <td>{p.price}</td>
          <td>{p.status}</td>
          <td>
            <button onClick={()=>deleteProduct(p.id)} className="btn btn-sm btn-danger ms-1">Delete</button>
            <Link to={`/editProduct/`+p.id} className='btn btn-success btn-sm m-1'>Edit</Link>
            </td>
        </tr>
  

        )
       
      })

    }
    </tbody>
</table>
</Card.Body>
    </Card>
    </div>
  )
}

export default Home