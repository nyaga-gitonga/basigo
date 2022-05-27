import React,{useContext,useState, useEffect} from "react"
import Header from "./Header"
import { GlobalState } from "../GlobalState"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from "axios"
import {useHistory, useParams} from 'react-router-dom'


const Body = ()=>{

    const baseURL='http://localhost:5000'

    const state=useContext(GlobalState)

    const param = useParams()

    const [token]=state.token
    const [leads]= state.customerAPI.leads
    const [isAdmin]= state.userAPI.isAdmin
    const [lead,setLead]=useState(false)
    const [callback,setCallback] = state.customerAPI.callback

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        if(param.id){
            leads.forEach(lead => {
                if(lead._id === param.id){
                    setLead(lead)
                } 
            })
        }
    },[param.id,leads])

   const handleChangeInput= async e=>{
         const {name,value} = e.target
         setLead({...lead,[name]:value})
   }

   const convertLead = async e=>{
       e.preventDefault()
       try{
         await axios.put(`${baseURL}/api/customer/${lead._id}`,{...lead},{
             headers: {Authorization:token}
         })
         localStorage.setItem('firstLogin', true)
       } catch(err){
           alert(err.response.data.msg)
       }
   }

    
    
    return (
        <div className="body">
            <Header  />
            
            <div className="body__info">
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Middle Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email</th>
      <th scope="col">Location</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
      {
          leads.map(lead=> {
              return <tr>
              <th scope="row">{lead._id}</th>
              <td>{lead.firstname}</td>
              <td>{lead.middlename}</td>
              <td>{lead.lastname}</td>
              <td>{lead.phonenumber}</td>
              <td>{lead.email}</td>
              <td>{lead.location}</td>
              <td>{<button onClick={handleShow}>Convert</button>}</td>
            </tr>
          })
      }
  
   
  </tbody>
</table>

            </div>

            <Modal show={show} onHide={handleClose}>
            <Form>            
        <Modal.Header closeButton>
          <Modal.Title>Convert Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
  <Form.Group className="mb-3" controlId="formBasicEarnings">
    <Form.Label>Annual Earnings</Form.Label>
    <Form.Control type="number" name="earnings" onChange="{handleChangeInput}" placeholder="Customer Annual Earnings" />
    
  </Form.Group>

 
   <Form.Group className="mb-3" controlId="formBasicPhoto">
    <Form.Label>Customer Photo</Form.Label>
    <Form.Control type="file" placeholder="Choose photo" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicProducts">
    <Form.Check type="checkbox" name="products" id="product1" label="Product 1" />
    <Form.Check type="checkbox" name="products" id="product2" label="Product 2" />
    <Form.Check type="checkbox" name="products" id="product3" label="Product 3" />
  </Form.Group>
  
  

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={convertLead}>
          Convert Lead
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
        </div>
    )
}

export default Body