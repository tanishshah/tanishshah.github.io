import React from 'react';
import "./../App.css";
import Subsec from "./Subsec";
import headphones from "./Images/headphones2.PNG";
import code from "./Images/code2.PNG";
import circuit from "./Images/circuit2.JPG";

function Skills(){
    return(
        <div className="subSection" id="skill">
            <h1 className="subTitle" >Skills</h1>
            <p className="subText">I have had the opportunity to learn about
            an assortment of topics ranging from programming microprocessors to conducting a strength analysis of a structure.
            Here I wanted to highlight a few technical skills that I have developed over the years.</p>
            <Subsec im1={headphones} im2={code} im3={circuit}
                title1="CAD" 
                text1="I have gained some experience in using different CAD programs,
                including AutoCAD and Solidworks.
                Using AutoCAD I have created various 2-D drawings; 
                some of which were used to laser cut components.
                I have also used Solidworks to make 3-D components, assemblies, and even drawings.
                To see some of the models visit the google drive folder."
                title2="Programming"
                text2="I have experience in various programming languages including;
                Python, C++, HTML, CSS, JS, Bash, and MATLAB. I also have experience using 
                various tools and frameworks such as MongoDB, ReactJS, and PyTorch. 
                Some of my programming projects are listed below but others can be found on my GitHub page."
                title3="Electronics"
                text3="I have learned how to prototype circuits using a breadboard
                as well as soldering components to build working circuits.
                Additionally, I have used Altium Designer and Altium365 for working
                with different circuits and LTSPICE to simulate them."
            />
        </div>
    );
}
export default Skills;