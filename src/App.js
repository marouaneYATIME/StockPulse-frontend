import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home.js";
import Login from "./pages/auth/Login.js";
import Register from "./pages/auth/Register.js";
import ForgotPssw from "./pages/auth/ForgotPssw.js";
import ResetPssw from "./pages/auth/ResetPssw.js";


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgot" element={<ForgotPssw/>} />
      <Route path="/resetpassword/:resetToken" element={<ResetPssw/>} />

    </Routes>
   
   </BrowserRouter>
  );
}

export default App;
