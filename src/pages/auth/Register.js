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

import React from 'react';
import styles from"./auth.module.scss";
import {TiUserAddOutline} from "react-icons/ti";
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className='--flex-center'>
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>S'inscrire</h2>

          <form>
            <input type="text" placeholder='Nom' required name='name'/>
            <input type="email" placeholder='Adresse mail' required name='email'/>
            <input type="password" placeholder='Mot de passe' required name='password'/>
            <input type="password" placeholder='Confirmer le mot de passe' required name='password'/>
            <button type='submit' className='--btn --btn-primary --btn-block'>S'inscrire</button>
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