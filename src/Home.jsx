import React from "react";
import "./index.css";
import background1 from "../src/images/bg.jpg";
import { NavLink } from "react-router-dom";

const Home=()=>{
    return(
       <>
          <section id="header" className="d-flex align-items-center">
          <div className="container-fluid nav_bg">
           <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                <h1>Boost Up your skills with a new way of Education</h1>
                <div className="mt-3">
                <NavLink to="/Services" className="btn-get-started">Get Started </NavLink>
                </div>
               
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img pt-5 pt-lg-10">
                   <img src={background1} className="img-fluid animated image" alt={background1}/>
                </div>
              </div>
              </div>
              </div>
              </div>
          </section>
       </>
    )
}

export default Home;