import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './../App.css';

function Caro(props) {
    return(
        <div className="caro">
            <Carousel>
                <Carousel.Item interval={4000}>
                    <video width="640" height="360" controls>
                        <source src={props.vid1} type="video/mp4"></source>
                    </video> 
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <video width="640" height="360" controls>
                        <source src={props.vid2} type="video/mp4"></source>
                    </video> 
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <video width="640" height="360" controls>
                        <source src={props.vid3} type="video/mp4"></source>
                    </video> 
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <video width="640" height="360" controls>
                        <source src={props.vid4} type="video/mp4"></source>
                    </video> 
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Caro;

