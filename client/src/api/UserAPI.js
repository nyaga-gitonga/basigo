import {useState,useEffect} from 'react'
import axios from 'axios'

function UserAPI(token){
    const [isLogged,setIsLogged]= useState(false)
    const [isAdmin,setIsAdmin]= useState(false)

    const baseURL="http://localhost:5000"

    useEffect(()=>{
        if(token){
            const getUser= async () =>{
                try{
                 const res= await axios.get(`${baseURL}/user/infor`,{
                     headers:{Authorization: token}
                 })
                setIsLogged(true)
                res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)

                } catch(err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
        }
    },[token])

    return {
        isLogged: [isLogged,setIsLogged],
        isAdmin:[isAdmin,setIsAdmin],
        
    }
}

export default UserAPI