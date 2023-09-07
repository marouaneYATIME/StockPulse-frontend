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
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./services/authService.js";
import { SET_LOGIN } from "./redux/features/auth/authSlice.js";
import { useEffect } from "react";
import AddProduct from "./pages/addProduct/AddProduct.js";
import ProductDetail from "./components/product/productDetail/ProductDetail.js";
import EditProduct from "./pages/editProduct/EditProduct.js";

axios.defaults.withCredentials = true;

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
   <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgot" element={<ForgotPssw/>} />
      <Route path="/resetpassword/:resetToken" element={<ResetPssw/>} />

      <Route 
        path="/dashboard" 
        element={
          <Sidebar>
            <Layout>
              <Dashboard/>
            </Layout>
          </Sidebar>
        }
      /> 
      <Route 
        path="/add-product" 
        element={
          <Sidebar>
            <Layout>
              <AddProduct/>
            </Layout>
          </Sidebar>
        }
      />
      <Route 
        path="/product-detail/:id" 
        element={
          <Sidebar>
            <Layout>
              <ProductDetail/>
            </Layout>
          </Sidebar>
        }
      />
      <Route 
        path="/edit-product/:id" 
        element={
          <Sidebar>
            <Layout>
              <EditProduct/>
            </Layout>
          </Sidebar>
        }
      />

    </Routes>
   
   </BrowserRouter>
  );
}

export default App;
