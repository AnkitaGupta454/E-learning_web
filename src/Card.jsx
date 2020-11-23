import React from "react";
import { NavLink } from "react-router-dom";
const Card=(props)=>{
    return(
        <>
 <div className="col-md-4 col-10 mx-auto">
    <div className="card" >
    <img src={props.src} className="card-img-top" alt={props.src} />
    <div className="card-body">
     <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text"></p>
    <a href={props.link} target="_blank" className="btn btn-primary button">Go to course</a><div>
    <br/></div>
    <a href={props.book} target="_blank" className="btn btn-primary button">Get E-book</a>
 </div>
</div>
 </div>
        </>
    )
}

export default Card;