/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  header.js
 */

import React from 'react'

const Header = () => {
  return (
    <div className="--pad header">
        <div className="--flex-between">
            <h3>
                <span className="--fw-thin">Bonjour,</span>
                <span className="--color-danger">Marouane</span>
            </h3>
            <button className="--btn --btn-danger">Se deconnecter</button>
        </div>
        <hr />
    </div>
  )
}

export default Header;