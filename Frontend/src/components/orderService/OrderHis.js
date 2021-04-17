// This app was created by group 6 for CSUF's CPSC 462 class. It is a collaborative effort to
//create a react-based website that functions as a unique web store.
//
import Button from 'react-bootstrap/Button';

import React from 'react';
import '../../css/common/BodyWrapper.scss'
import HistoryItem from './HistoryItem';

//Import components
import MyNavbar from '../Navbar';
import HomeButton from '../HomeButton';
import AboutBar from '../AboutBar';
import ContentCard from '../ContentCard';

//Import render styling from react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Component } from 'react';

const welcome = {
  greeting: 'Hey',
  title: 'EZ Buy',
};

class OrderHis extends Component {

  render() {
    return (
      <Container fluid={true} className="pt-2">
        <HomeButton />

        <MyNavbar />
        <Container fluid={true}>
          
          <div className="body-wrapper">
              <div className="text-center">
                  Order History
                  <br></br>
                  <br></br>

              </div>
              <Row>
                <Col classNmae ="bd-left">
                <img src = "/images/ez_buy_logo.jpg" alt= "" width="100" />
                <div> Hi Alex</div>
                <div> 3 orders placed in past 3 Months</div>
                
                </Col>
                <Col classNmae ="bd-right">
                  <HistoryItem/>
                  <HistoryItem/>
                  <HistoryItem/>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </Col>
            
              </Row>
              
          
          </div>

        </Container>

        <AboutBar />

      </Container>
    );
  }
}


export default OrderHis;