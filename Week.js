import React, { useEffect, useState } from 'react';
import "./AppointmentList.css";
import ReactDOM,{ useHistory , Link} from "react-router-dom";
import { Badge, CloseButton } from "react-bootstrap";
import { FaEye, FaFlag } from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import {  Row,  Col,  Container,  FormControl,  Button,  Form,  Pagination,  InputGroup,  Modal} from "react-bootstrap";
import CustomDatePicker from './CustomDatePicker ';
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import axios from 'axios';
import { ModalTitle } from 'react-bootstrap';

const Week = (props) => {
 const [data,setData]=useState([]);

  useEffect(() => {  
    // debugger;  
    axios.get('http://localhost:8080/test/img')
        .then(result => setData(result.data));  
    console.log(data);  
    debugger;  
  }, []);
 
  
  return (
    <Container className="top-container" >

      <Row>
        <Col>
          <h4 className="appointment-title">APPOINTMENT</h4>nnnnn{ data.imgId}
        </Col>
      </Row>
      <PhotoProvider>
        {data.map((item, index) => (
          <PhotoConsumer key={index} src={item} intro={item}>
            <img src={item} alt="image is view" onClick={console.log("aa")} />
          </PhotoConsumer>
       
        ))}
      </PhotoProvider>
    
<div>   {data.map((item, index) => (item.image))} </div>
     


                         
  
      </Container>
);
};
export default Week;