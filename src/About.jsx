import React from "react";
import "./index.css";
import background2 from "../src/images/bg1.jpg";
import { NavLink } from "react-router-dom";
const About=()=>{
    return(
       <>
          { <section id="header" className="d-flex align-items-center">
          <div className="container-fluid nav_bg">
           <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                <div className="mt-3">
          <div className="card1">
  <div className="card-header">
  Best Courses
  </div>
  <div className="card-body">
    <p className="card-text">Best quality content from expert instructor for free</p>
  </div>
</div>

<div className="card1">
  <div className="card-header">
  E-books
  </div>
  <div className="card-body">
    <p className="card-text">Provide E-book of every course to enhance your skills</p>
  </div>
</div>

<div className="card1">
  <div className="card-header">
  Notes-Facility   
  </div>
  <div className="card-body">
    <p className="card-text">You can add notes while learning</p>
  </div>
</div>

<div className="card1">
  <div className="card-header">
  Lifetime Access
  </div>
  <div className="card-body">
    <p className="card-text">Get Lifetime Access to any course</p>
  </div>
</div>
</div>

                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img pt-5 pt-lg-10">
                   <img src={background2} className="img-fluid animated image" alt={background2}/>
                </div>
              </div>
              </div>
              </div>
              </div>
          </section> }
          
       </>
    )
}

export default About;