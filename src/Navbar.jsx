import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/Home">Edutech</NavLink>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      <li className="nav-item active">

        <NavLink className="nav-link" to="/Home">Home  </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Services">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/About">About Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Notes">Add Notes</NavLink>
      </li>
    </ul>

  </div>
</nav>
     </div>
            </div>
        </div>
        </>
    )
};
export default Navbar;