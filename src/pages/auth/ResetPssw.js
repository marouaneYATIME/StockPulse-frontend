/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  ResetPssw.css
 */

import React from 'react';
import styles from"./auth.module.scss";
import {MdPassword} from "react-icons/md";
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';

const ResetPssw = () => {
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className='--flex-center'>
            <MdPassword size={35} color="#999" />
          </div>
          <h2>Réinitialiser le mot de passe</h2>

          <form>
          <input type="password" placeholder='Nouveau mot de passe' required name='password'/>
            <input type="password" placeholder='Confirmer le nouveau mot de passe' required name='password'/>
            <button type='submit' className='--btn --btn-primary --btn-block'>Confirmer</button>
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

export default ResetPssw;