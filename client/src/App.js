import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from "./views/Home"
import Login from "./views/Login"
import Body from "./components/Body"
import {DataProvider} from './GlobalState'

function App() {
  return (
    <DataProvider>
    <Router>
    <div className="App">
     <Routes>
      <Route path="/" element={<Body/>} />
      <Route login="/login" element={<Login/>} />
     </Routes>
     </div>
    </Router>
    </DataProvider>
    
   
  );
}

export default App;
