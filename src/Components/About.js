import React from 'react';
import "./../App.css";
import Caro from "./Caro"
import furhat from "./Media/furhat.mp4"
import robot from "./Media/robot.mp4"
import holo from "./Media/holo.mp4"
import voro from "./Media/voronoi.mp4"

function About(){
    return(
        <div className="subSection" id="about">
            <h1 className="subTitle" >About Me</h1>
            <p className="subText">
                I'm a student studying mechatronics engineering.
                I'm passionate about various technologies including, 3D printing, robotics, and machine learning.
                I am also interested in sustainable energy sources, green technologies, space exploration, and improving accessibility technology. 
                If you have any questions for me or would like to contact me, feel free to send me an email. A sample of
                some of my projects are shown below. If you are interested, check out my Github to see some of the other things
                I've worked on. 
            </p>
            <Caro vid1={furhat} vid2={robot} vid3={holo} vid4={voro}/>
        </div>
    );
}
export default About;