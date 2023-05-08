import React, {createContext,useState,useEffect} from 'react'
import UserAPI from './api/UserAPI'
import CustomerAPI from './api/CustomerAPI'
import axios from 'axios'

export const GlobalState=createContext()

export const DataProvider = ({children}) => {
    const [token,setToken] = useState(false)

    //const baseURL="http://localhost:5000"

    useEffect(() => {
       const firstLogin = localStorage.getItem('firstLogin')

       if(firstLogin){
           const refreshToken = async ()=> {
            //  const res=await axios.get(`${baseURL}/user/refresh_token`)

              axios.get('http://localhost:5000/user/refresh_token')
              .then(res => {
                setToken(res.data.accesstoken)
                setTimeout(()=> {
                    refreshToken()
                }, 10 * 60 * 1000)
              })
              .catch(err => {
                 console.log(err)
              });

           }
           refreshToken()
       }
    },[])

    const state = {
        token: [token,setToken],
        userAPI: UserAPI(token),
        customerAPI: CustomerAPI()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}