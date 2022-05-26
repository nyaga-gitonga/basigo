import React, {useContext,useState} from "react";
import { GlobalState } from "../GlobalState";
import axios from "axios";
import {Link} from 'react-router-dom'



const Header = () => {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    const baseURL="http://localhost:5000"

    const logoutUser = async () =>{
        await axios.get(`${baseURL}/user/logout`)
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/login";
    }

return (
    <div className="header">
        <div className="header__left">
            
        <input placeholder="Search Input" type="text" />
        </div>
        <div className="header__right">
        <Link to="/" onClick={logoutUser}>Logout</Link>
        </div>
    </div>
)
}
export default Header