import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home.js";
import Login from "./pages/auth/Login.js";
import Register from "./pages/auth/Register.js";
import ForgotPssw from "./pages/auth/ForgotPssw.js";
import ResetPssw from "./pages/auth/ResetPssw.js";
import Sidebar from "./components/sideBar/Sidebar.js";
import Dashboard from "./pages/dashboard/Dashboard.js";
import Layout from "./components/layout/Layout.js"
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


axios.defaults.withCredentials = true;

function App() {
  return (
   <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgot" element={<ForgotPssw/>} />
      <Route path="/resetpassword/:resetToken" element={<ResetPssw/>} />

      <Route path="/dashboard" element={
        <Sidebar>
          <Layout>
            <Dashboard/>
          </Layout>
        </Sidebar>
      }/> 

    </Routes>
   
   </BrowserRouter>
  );
}

export default App;
