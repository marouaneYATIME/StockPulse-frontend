/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  header.js
 */

import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectName, SET_LOGIN } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../services/authService";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName);

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/login");
  };

  return (
    <div className="--pad header">
        <div className="--flex-between">
            <h3>
                <span className="--fw-thin">Bonjour,</span>
                <span className="--color-danger">{name}</span>  
            </h3>
            <button onClick={logout} className="--btn --btn-danger">Se deconnecter</button>
        </div>
        <hr />
    </div>
  )
}

export default Header;