import React,{useContext,useState} from "react";
import Body from "../components/Body";
import Sidebar from "../components/Sidebar";
import Login from "./Login";
import {GlobalState} from '../GlobalState';


const Home= () => {
    const state= useContext(GlobalState)
    const [token]=state.token
    const [isLogged]=state.userAPI.isLogged

    return (
        <>
         {
            isLogged ?
            <div className="home">
            <div className="home__body">
            <Sidebar /> <Body /> 
            </div>
            </div>

            :<div className="home">
            <div className="home__body"><Sidebar /> <Body /></div></div>
            }  
        </>
            
             
            
           
          
       
    )
}

export default Home;