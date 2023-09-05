/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  Login.css
 */

import React, { useState } from 'react';
import styles from"./auth.module.scss";
import {BiLogIn} from "react-icons/bi";
import Card from '../../components/card/Card';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";
import { loginUser, validateEmail } from "../../services/authService";
import { toast } from "react-toastify";


const initialState = {
  email: "",
  password: "",
};


const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  //Login function
  const login = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Validation & check 
    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      //console.log(data);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader />}
      <Card>
        <div className={styles.form}>
          <div className='--flex-center'>
            <BiLogIn size={35} color="#999" />
          </div>
          <h2>Login</h2>

          
          <form onSubmit={login}>
            <input 
              type="email" 
              placeholder='email' 
              required 
              name='email'
              value={email}
              onChange={handleInputChange}
            />

            <input 
              type="password" 
              placeholder='mot de passe' 
              required 
              name='password'
              value={password}
              onChange={handleInputChange}
            />
            
            <button type='submit' className='--btn --btn-primary --btn-block'>
              Login
            </button>

          </form>
          <Link to="/forgot">Mot de passe oublié ?</Link>

          <span className={styles.register}>
            <Link to="/">Acceuil</Link>
            <p> &nbsp; J'ai pas de compte ? &nbsp;</p>
            <Link to="/register">S'enregistrer</Link>
          </span>
        </div>
      </Card>
    </div>
  )
};

export default Login;