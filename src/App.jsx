import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes,Route, } from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddNewDoctor from "./components/AddNewDoctor";
import AddNewAdmin from "./components/AddNewAdmin";
import Doctors from "./components/Doctors";
import Messages from "./components/Messages";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { Context } from './main';
import axios from 'axios';


const App = () => {

  const {isAuthenticated,setIsAuthenticated,setAdmin} = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setAdmin(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        // setAdmin({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/doctor/addnew' element={<AddNewDoctor/>}/>
          <Route path='/admin/addnew' element={<AddNewAdmin/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
        </Routes>
        <ToastContainer position='top-center'/>
      </Router>
    
    </>
  )
}

export default App
