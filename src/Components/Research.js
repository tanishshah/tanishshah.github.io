import React from 'react';
import "./../App.css";
import Subsec from "./Subsec";
import cviss from "./Images/Research/c.jpg";
import hxl from "./Images/Research/h.jpg";
import sirrl from "./Images/Research/s.jpg";

function Research(){
    return(
        <div className="subSection" id="research">
            <h1 className="subTitle" >Research</h1>
            <p className="subText">I have been very fortunate to have the opportunity to work on various research projects
            at the University of Waterloo.</p>
            <Subsec im1={cviss} im2={sirrl} im3={hxl}
            title1="CVISS"
            text1="At the Computer Vision for Smart Sturcture Lab, I have been working on developing a
             mixed reality application for Hololens 2 using Unity and MRTK to improve functionality of site
             inspection tools leveraging LLMs."
            title2="SIRRL"
            text2="At the Social and Intelligent Robotics Research Lab, I worked on developing an
             application with the aim of seeing how human robot interaction changes with customizable robots."
            title3="HX"
            text3="At the Haptics Experience Lab, I worked on a MERN application which aimed to create a 
            repository of haptics for individuals to use. I worked on various components such as
            Sendgrid integration and updated the front and backend."
            />
        </div>
    );
}
export default Research;