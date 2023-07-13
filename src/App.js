import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import {useState} from 'react';
import PrivateRoute from './Components/PrivateRoute';
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col w-screen h-screen min-h-screen bg-richblack-900 app">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
      <Routes>
        <Route path='/' element={<Home setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/about' element={<About setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/contact' element={<Contact setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/dashboard' element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard/></PrivateRoute>}></Route>
      </Routes>
    </div>
  )
}

export default App;
