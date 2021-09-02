import React, { useState } from 'react';
import './Reschedule.css';
import {Link,useHistory,useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Col,
  Container,
  Button,
  FormControl,
  Form,
  Overlay,
  Tooltip,
} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
//import * as FaSave from 'react-icons/fa';
import axios from 'axios';

const Viewschedule = (props) => {
    const location = useLocation();
    const data = location.state;
    const history = useHistory();

  return (
    <Container className="resched-container">
         <h4 style={{paddingBottom:"20px"}}>Appointment Details</h4>

        <Row>
           
            <Col style={{paddingLeft:"30px",
        paddingRight:"30px"}}>
            <p className="input-label">Name          :  {location.state.firstName} {location.state.lastName}</p>           
            <p className="input-label">Age           :  {location.state.age} </p> 
            <p className="input-label">Gender        :  {location.state.gender}</p>  
            <p className="input-label">Contact Number:  {location.state.contactnumber}</p>  
            <p className="input-label">Email         :  {location.state.dates}</p>
            <p className="input-label">Refered By    :  {location.state.dates} </p>
            <p className="input-label">Date          :  {location.state.dates}   </p>
            <p className="input-label">Time          :  {location.state.time}</p>
            <p className="input-label">Complaints    :  {location.state.department} </p>
            <p className="input-label">Treatment     :  {location.state.dates}</p>             

             <Row style={{
                 marginTop:"20px"
             }} >
                 <Col
             style={{
                 textAlign:"center",

             }}>     <Button onClick={() => 
                history.push("/Listschedule")} variant="secondary">Cancel</Button>
             </Col>
               
            
                       </Row>
                                
                               
                           

            </Col>
        </Row>
    
    </Container>
  );
};
export default Viewschedule;