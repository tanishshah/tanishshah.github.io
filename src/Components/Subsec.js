import React from 'react';
import { Card, CardGroup} from 'react-bootstrap';

import '../App.css';
function Subsec(props) {
    return(
        <div>
            <CardGroup>
                <Card style={{border:"None", padding: "4vh"}}>
                    <Card.Img variant="top" src={props.im1} />
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>{props.title1}</Card.Title>
                        <Card.Text>
                            {props.text1}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{border:"None", padding: "4vh"}}>
                    <Card.Img variant="top" src={props.im2} />
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>{props.title2}</Card.Title>
                        <Card.Text>
                            {props.text2}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{border:"None", padding: "4vh"}}>
                    <Card.Img variant="top" src={props.im3} />
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>{props.title3}</Card.Title>
                        <Card.Text>
                            {props.text3}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};
export default Subsec;