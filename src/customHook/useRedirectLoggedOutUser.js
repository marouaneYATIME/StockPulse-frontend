/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  UseRedirctLoggedOutUSer.js
*/

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_LOGIN } from "../redux/features/auth/authSlice";
import { getLoginStatus } from "../services/authService";
import { toast } from "react-toastify";



// Redirect user tht logout to specefic route
const useRedirectLoggedOutUser = (path) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const redirectLoggedOutUser = async () => {
        // Get Login status  
        const isLoggedIn = await getLoginStatus();
        dispatch(SET_LOGIN(isLoggedIn));
        
        // Check is the session expired
        if (!isLoggedIn) {
            toast.info("La session a expiré, veuillez vous connecter pour continuer.");
            navigate(path);
            return;
        }
    };
    redirectLoggedOutUser();
    // Add dependencies 
  }, [navigate, path, dispatch]);
};

export default useRedirectLoggedOutUser;