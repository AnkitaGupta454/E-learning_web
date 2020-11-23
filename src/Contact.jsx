import React, { useState } from "react";
import contact from "../src/images/contact.png"
const Contact=()=>{

    const [data,setdata]=useState({
        fullname:'',
         email:'',
         
         
    })
    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setdata((preVal)=>{
        return{
            ...preVal,
            [name]:value,
        }
        })
    }
    const formsubmit= (e)=>{
      e.preventDefault();
      alert(`Thankyou ${data.fullname} for visiting our website. You will be informed whenever some new content is added to our website at ${data.email} `)
    }
    return(
        <>
     
        <div className="container">
            <div className="text-center">
              <h2>Contact Us</h2>
              <p>Swing by for a cup of coffee, or leave us a message:</p>
            </div>
            <div className="row">
              <div className="column">
                <img className="img-fluid animated" src={contact} alt={contact} />
              </div>
              <div className="column">
                <form onSubmit={formsubmit} >
                  <label for="fname"> Name</label>
                  <input type="text"
                   id="fname"
                   name="fullname"
                   value={data.fullname}
                   onChange={InputEvent}
                    placeholder="Your name.."/>

                  <label for="e-mail">E-mail</label>
                  <input type="text" 
                  id="e-mail"
                   name="email" 
                   value={data.email}
                   onChange={InputEvent}
                   placeholder="Enter your e-mail.."/>

                  <label for="country">Country</label>
                  <input type="text"
                  id="country" 
                  name="country"
                   placeholder="Enter your country.." ></input>
                  

                  <label for="subject">Subject</label>
                  <textarea id="subject" 
                  name="subject"
                  
                   placeholder="Write something.." >
                       
                   </textarea>
                  <input type="submit" value="Submit"></input>
                </form>
              </div>
            </div>
          </div>
        </>
    )
}

export default Contact;