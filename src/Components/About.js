import React from 'react';
import "./../App.css";
import Caro from "./Caro";
import Net from "./Images/net.PNG";
import Robot from "./Images/robot.jpg";
import Claw from "./Images/claw.jpg";

function About(){
    return(
        <div className="subSection" id="about">
            <h1 className="subTitle" >About Me</h1>
            <p className="subText">
                I'm a student studying mechatronics engineering.
                I'm passionate about various technologies including, 3D printing, robotics, and machine learning.
                I am also interested in sustainable energy sources, green technologies, space exploration, and improving accessibility technology. 
                If you have any questions for me or would like to contact me, feel free to send me an email. 
            </p>
            <Caro im1={Net} im2={Robot} im3={Claw}/>
        </div>
    );
}
export default About;