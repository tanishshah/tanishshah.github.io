import React from 'react';
import "./../App.css";
import Subsec from "./Subsec";
import tbot  from "./Images/bot2.jpg";
import flower from "./Images/flower2.jpg";
import vmap from "./Images/map2.PNG";

function Projects(){
    return(
        <div className="subSection" id="project">
            <h1 className="subTitle" >Projects</h1>
            <p className="subText">Here are some of the projects that I have worked on that I wanted to feature. 
            To view some of my other projects visit my GitHub page or my Google Drive.</p>
            <Subsec im1={tbot} im2={flower} im3={vmap}
            title1="TelegramBot"
            text1="A telegram bot that provides its users with various information, such as news headlines, jokes, 
            inspirational quotes, popular songs, and more. The bot was built using Python, the Beautiful Soup library, and the
            Python-Telegram-Bot wrapper."
            title2="FlowerClassifier"
            text2="Developed an image classifier for classifiying different types of flowers. It was built using PyTorch and leveraged
            transfer learning to increase performance."
            title3="VacTrack"
            text3="Created a website used for tracking whether users were vaccinated or not. It also contained various analytics
            such as the age of the user, their income level, and where they were from. The website was built using the MERN stack."
            />
        </div>
    );
}
export default Projects;