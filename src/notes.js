/*  PROGRAM FOR LIST 
var React =require('react');
var ReactDom=require('react-dom');
ReactDom.render(<React.Fragment>
<h1>Here are top 5 Series of Netflix</h1>
<p>So let's begin</p>
<ol><li>Vampire Diaries</li>
<li>Stranger Things</li>
<li>Harry potter</li>
<li>Kissing booth</li>
<li>fault in our stars</li></ol>
</React.Fragment>,document.getElementById('root'));*/


PROGRAM TO SHOW DATE AND TIME
/*import React from 'react';
import ReactDom from 'react-dom';
var d=new Date();
const d1=d.toLocaleDateString();
const time=d.toLocaleTimeString();
ReactDom.render(<React.Fragment>
    <h1>My Name is Ankita Gupta</h1>
    <p>Today's date is {d1} </p>
    <p>Time is {time}</p>
</React.Fragment>,document.getElementById('root'));*/

PROGRAM FOR IMAGE GALLERY
/*import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
const name="Ankita Gupta";
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/200/350";
const link="https://www.youtube.com/";

ReactDom.render(
 <>
     <h1 className="heading" contentEditable="true">My name is {name} and I created this image gallery</h1>
     <div class="img-div">
     <img src={img1} alt="Random Images"/>
     <img src={img2} alt="Random Images"/>
     <a href={link} target="_blank">
     <img src={img3} alt="Random Images"/></a>
     </div>
 </>,document.getElementById("root")
);*/

PROGRAM FOR GREETIN APP/*
import React from 'react';
import ReactDom from 'react-dom';
 import './index.css';
const cssStyle={};
let greeting='';
let curDate=new Date();
let currDate=curDate.getHours();
if(currDate>=1&&currDate<12)
{
    greeting='Good Morning';
    cssStyle.color="red";
}
else if(currDate>=12 && currDate<19)
{
    greeting='Good Afternoon';
    cssStyle.color="Orange";
}
else 
{
    greeting='Good Night';
    cssStyle.color="green";
}
ReactDom.render(<>
    <div><h1>Hello sir,<span style={cssStyle}>{greeting}</span></h1></div>
</>,document.getElementById('root'));*/

