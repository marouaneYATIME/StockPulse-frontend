/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  ResetPssw.css
 */

/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  Login.css
 */

import React, { useState }  from 'react';
import styles from"./auth.module.scss";
import {TiUserAddOutline} from "react-icons/ti";
import Card from '../../components/card/Card';
import { Link , useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser, validateEmail } from '../../services/authService';
import { useDispatch } from 'react-redux';
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import Loader from '../../components/loader/Loader';



const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { name, email, password, password2 } = formData;


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    
    //Validation Error !
    if (!name || !email || !password) {
      return toast.error("Tous les champs doivent être remplis");
    }

    if (password.length < 6) {
      return toast.error("Les mots de passe doivent comporter jusqu'à 6 caractères");
    }

    if (!validateEmail(email)) {
      return toast.error("Veuillez saisir un courriel valide");
    }
    if (password !== password2) {
      return toast.error("Les mots de passe ne correspondent pas");
    }

    const userData = {
      name,
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await registerUser(userData);
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
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>S'inscrire</h2>

          <form onSubmit={register}>
            <input 
              type="text" 
              placeholder='Nom' 
              required 
              name='name'
              value={name}
              onChange={handleInputChange}
            />


            <input 
              type="email" 
              placeholder='Adresse mail' 
              required 
              name='email'
              value={email}
              onChange={handleInputChange}
            />


            <input 
              type="password" 
              placeholder='Mot de passe' 
              required name='password'
              value={password}
              onChange={handleInputChange}
            />


            <input 
              type="password" 
              placeholder='Confirmer le mot de passe' 
              required 
              name='password2'
              value={password2}
              onChange={handleInputChange}
            />


            <button type='submit' className='--btn --btn-primary --btn-block'>
              S'inscrire
            </button>
          </form>

          <span className={styles.register}>
            <Link to="/">Acceuil</Link>
            
            <p> &nbsp; J'ai déja un compte ? &nbsp;</p>
            
            <Link to="/Login">Se connecter</Link>
          </span>
        </div>
      </Card>
    </div>
  )
};

export default Register;