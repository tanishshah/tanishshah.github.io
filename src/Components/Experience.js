import React from 'react';
import "./../App.css";
import Subsec from "./Subsec";
import amazon from "./Images/experience/amazon.png";
import nvidia from "./Images/experience/nvidia.png";
import evertz from "./Images/experience/evertz.png";

function Experience(){
    return(
        <div className="subSection" id="experience">
            <h1 className="subTitle" >Experience</h1>
            <p className="subText">I have been able to learn and develop my skills from different experiences.</p>
            <Subsec im1={amazon} im2={nvidia} im3={evertz}
            title1="Amazon"
            text1="I was a part of the Alexa Home Productivity organization.
            There I worked on designing and releasing a multi-device interaction for timers to meet
            thousdands of customer requests. I used Java and leveraged common frameworks like Spring, Lombok,
            Mockito, and more."
            title2="Nvidia"
            text2="During my time at Nvidia, I was on the Linux Graphics team. I worked on various tasks such as
            fixing bugs in the linux graphics driver, analyzing and profiling performance of graphics drivers,
            developing internal tools, and integrating new features for the automated testing framework."
            title3="Evertz"
            text3="I was a part of the Caption Conductor team. I developed software to allow for the
            implementation of new captioning protocols to allow the product to be used in other locations.
            I also created a high availability fail over server to increase reliability of the system.
            This included load balancing, database replication, as well as an automated setup procedure."
            />
        </div>
    );
}
export default Experience;