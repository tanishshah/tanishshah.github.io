import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './../App.css';

function Caro(props) {
    return(
        <div className="caro">
            <Carousel>
                <Carousel.Item interval={4000}>
                    <img className="d-block w-100" src={props.im1} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img className="d-block w-100" src={props.im2} alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img className="d-block w-100" src={props.im3} alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Caro;

