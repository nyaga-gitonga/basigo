import React, {useContext,useState} from "react";
import { GlobalState } from "../GlobalState";
import axios from "axios";
import {Link} from 'react-router-dom'
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    const baseURL='localhost:5000'

    const logoutUser = async () =>{
        await axios.get(`${baseURL}/user/logout`)
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/login";
    }
return (
    <div className="sidebar">
         <img
             className="sidebar__logo"
             src="logo.jpeg"
             alt="BasiGo"
             />
             <SidebarOption  title="Home" />
             <SidebarOption title="Leads" />
             <SidebarOption  title="Customers" />
     <br />
      <strong className="sidebar__title">Account</strong>
             <hr/>
             
         <div className="sidebarOption">
        <Link to="/" onClick={logoutUser}><p>Logout</p></Link> 
        
        </div>

        </div>
)
}
export default Sidebar