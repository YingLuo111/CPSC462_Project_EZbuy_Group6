// This app was created by group 6 for CSUF's CPSC 462 class. It is a collaborative effort to
//create a react-based website that functions as a unique web store.
//

//React elements
import React from 'react';
import { Component } from 'react';

//Import A-Frame library for viewing XR content in browser
import 'aframe';

//Import components
import MyNavbar from './Navbar';
import HomeButton from './HomeButton';
import AboutBar from './AboutBar';
import ContentCard from './ContentCard';
import Products from './Products';

//Import render styling from react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import '../css/styles.css';
import { Jumbotron } from 'react-bootstrap';

const welcome = {
    greeting: 'Hey',
    title: 'EZ Buy',
};

const products = [
    {
        id: 1,
        name: "Apple",
        description: "Red Apple",
        img: "/images/ez_buy_logo.jpg",
        price: 100
    },

    {
        id: 2,
        name: "Banana",
        description: "Yellow Banana",
        img: "/images/ez_buy_logo.jpg",
        price: 100
    },

    {
        id: 3,
        name: "Orange",
        description: "Orange Orange",
        img: "/images/ez_buy_logo.jpg",
        price: 100
    },

    {
        id: 4,
        name: "Strawberry",
        description: "Red Strawberry",
        img: "/images/ez_buy_logo.jpg",
        price: 100
    },

    {
        id: 5,
        name: "Watermellon",
        description: "Green Watermellon",
        img: "/images/ez_buy_logo.jpg",
        price: 100
    },

    {
        id: 6,
        name: "Cat",
        description: "Cat",
        img: "/images/ez_buy_logo.jpg",
        price: 100
    },


    {
        id: 7,
        name: "Dog",
        description: "Dog",
        img: "/images/ez_buy_logo.jpg",
        price: 100
    },
]

class XRViwer extends Component {

    render() {
        return (
            <Container fluid={true} className="pt-2">

                <HomeButton />

                <MyNavbar />

                <Jumbotron>
                    <Row>
                        <Col>
                            <div>
                                <h1>
                                    Example heading <Badge variant="secondary">New</Badge>
                                </h1>
                            </div>
                        </Col>
                        <Col>
                            <a-scene class="aframebox" embedded>
                                <a-box
                                    position="-1 0.5 -3"
                                    rotation="0 45 0"
                                    color="#4CC3D9" />
                                <a-sphere
                                    position="0 1.25 -5"
                                    radius="1.25"
                                    color="#EF2D5E" />
                                <a-cylinder
                                    position="1 0.75 -3"
                                    radius="0.5"
                                    height="1.5"
                                    color="#FFC65D" />
                                <a-plane
                                    position="0 0 -4"
                                    rotation="-90 0 0"
                                    width="4"
                                    height="4"
                                    color="#7BC8A4" />
                                <a-dodecahedron
                                    color="#FF926B"
                                    radius="5"
                                    position="0 -1 -30"></a-dodecahedron>
                                {/* <a-sky src={require('./360_photo_sample.jpg')} /> */}
                            </a-scene>
                        </Col>
                    </Row>
                </Jumbotron>

                <AboutBar />

            </Container>
        );
    }
}


export default XRViwer;