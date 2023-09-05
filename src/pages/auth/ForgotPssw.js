/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  ForgotPssw.css
 */

import React, { useState } from 'react';
import styles from"./auth.module.scss";
import {AiOutlineMail} from "react-icons/ai";
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
import { forgotPassword, validateEmail } from "../../services/authService";
import { toast } from 'react-toastify';



const ForgotPssw = () => {

  const [email, setEmail] = useState("");

  const forgot = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Please enter an email");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
    };

    await forgotPassword(userData);
    setEmail("");
  };

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className='--flex-center'>
            <AiOutlineMail size={35} color="#999" />
          </div>
          <h2>Mot de passe oublié</h2>

          <form onSubmit={forgot}>

            <input 
              type="email" 
              placeholder='email' 
              required 
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type='submit' className='--btn --btn-primary --btn-block'>
              Envoyer
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/">- Acceuil</Link>  
              </p>  
              <p>
                <Link to="/Login">- Se connecter</Link>
              </p>
          </div>
          </form>
          
        </div>
      </Card>
    </div>
  )
};

export default ForgotPssw;