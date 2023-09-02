/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  Login.css
 */

import React from 'react';
import styles from"./auth.module.scss";
import {BiLogIn} from "react-icons/bi";
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className='--flex-center'>
            <BiLogIn size={35} color="#999" />
          </div>
          <h2>Login</h2>

          <form>
            <input type="email" placeholder='email' required name='email'/>
            <input type="password" placeholder='mot de passe' required name='mot de passe'/>
            <button type='submit' className='--btn --btn-primary --btn-block'>Login</button>
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