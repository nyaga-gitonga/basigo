import React,{useState} from "react"
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = ()=>{
    const [user,setUser] = useState({
        email:'',
        password:''
    })

    const baseURL="http://localhost:5000"

    const onChangeInput= e =>{
        const {name,value}= e.target;
        setUser({...user,[name]:value})
    }

    const loginSubmit = async e => {
        e.preventDefault()
        axios.post(`${baseURL}/user/login`, {...user})
             .then(res => {
                
                localStorage.setItem('firstLogin', true)
                window.location.href="/"
             })
             .catch(err => {
                alert(err.response.data.msg)
             });

       /* try {
           await axios.post(`${baseURL}/user/login`, {...user})
           localStorage.setItem('firstLogin', true)
           window.location.href="/"

        } catch(err) {
            alert(err.response.data.msg)
        }*/
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="logo.jpeg" />
                <h1>Sign In Form</h1>
              

                <Form>
  <Form.Group className="mb-3" controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" value={user.email} onChange={onChangeInput} />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" value={user.password} onChange={onChangeInput} />
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={loginSubmit}>
    Submit
  </Button>
</Form>
            </div>
            
        </div>
    )
        
    
}

export default Login