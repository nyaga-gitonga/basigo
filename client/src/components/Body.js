import React,{useContext,useState} from "react"
import Header from "./Header"
import { GlobalState } from "../GlobalState"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Body = ()=>{

    const state=useContext(GlobalState)


    const [leads]= state.customerAPI.leads
    const [isAdmin]= state.userAPI.isAdmin

    const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

    
    
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
        <Modal.Header closeButton>
          <Modal.Title>Convert Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEarnings">
    <Form.Label>Annual Earnings</Form.Label>
    <Form.Control type="number" placeholder="Customer Annual Earnings" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhoto">
    <Form.Label>Customer Photo</Form.Label>
    <Form.Control type="file" placeholder="Choose photo" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicProducts">
    <Form.Check type="checkbox" label="Product 1" />
    <Form.Check type="checkbox" label="Product 2" />
    <Form.Check type="checkbox" label="Product 3" />
  </Form.Group>
  
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Convert Lead
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Body