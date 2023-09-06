/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  Dashboard.js
*/

import React from 'react'
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';

const Dashboard = () => {
  useRedirectLoggedOutUser("/login")
  return (
    <div>
        <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
