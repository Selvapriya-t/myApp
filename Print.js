import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import "./Printer.css";
import "./Print.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col, Form, Table,Image } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Logo from '../Billing/assests/hospital.png';
//import ItemForm from './ItemForm';
import { useForm } from "react-hook-form";
import axios from 'axios';

// const Print = (props) => {
//   const [show, setShow] = useState(false);
//   const target = useRef(null);
const Printer=({setForm,formData,navigation})=>{
  const {    firstName,    lastName,
    age,
    date,
    gender,
    patientid,
    hospitalid,
    bloodgroup,
    height,
    mass,
    bmi,
    referraldoc,
    email,  
    phone,
    address,
    complaint,
    history,
    pweek,pmonth,pday,surgical,investdetail,
    numbness,
    pain,
    pattern,
    motion,test,invest, 
     diagnosis,
     treatmentplan ,
     treatimage,
     precaution
  }=formData;
  const {go}=navigation;

  const handleClick = (e) => {
    e.preventDefault(); 
    debugger;
    
    axios.post("http://localhost:8080/patients",formData);
console.log(formData);
    };


  return (
    <Container className="total-container">
      <Row className="row-receipt">
        <Col lg={2}></Col>
        <Col
          lg={8}
          md={8}
          sm={12}
          xs={12}
          style={{
            borderRadius: "10px",
            boxShadow: "3px 3px 3px 3px rgb(170, 167, 167)",
          }}
        >
          <img
            style={{ width: "50px", textAlign: "center", marginLeft: "200px" }}
            src={Logo}
          />{" "}
          <span>
            <b> HELLO PHYSIO </b>
          </span>
          <Row>
            <Col style={{ marginLeft: "50px" }}>
            <h4>
        PatientDetail 
        {/* <FaIcons.FaEdit color="blue" onClick={() => go("patient")}/> */}
         {/* <button onClick={() => go("patient")}>Edit</button> */}
         </h4>
              <Col>
                <b>Patient Id:</b> {`${patientid}`}
              </Col>
              <Col>
                <b>Patient Name:</b> {`${firstName}`} {`${lastName}`}
              </Col>
            
              <Col>
                <b>BMI:</b>{`${bmi}`}
              </Col>
            </Col>
            <Col>
            <Col></Col>
              <Col>
                <b>Date:</b>  {`${date}`}
              </Col>
              <Col>
                <b>Age/Gender:</b>{`${age}`}  /  {`${gender}`}
              </Col>
            </Col>
          </Row>
          <br />
          {/* <Table striped bordered hover> */}
            <br/>
            <h4>Complaint/History 
              {/* <FaIcons.FaEdit color="blue" onClick={() => go("patientdiagnosis")}/> */}
              </h4><br></br>
            <li>{`${complaint}`}</li>
            <li>{`${history}`}</li>
            {/* <li>Pain radiating to right arm</li>
<li>Pain radiating to left arm</li>
<li>Right shoulder pain</li>
<li>Left shoulder pain</li> */}
<br/>
<h4>Diagnosis 
  {/* <FaIcons.FaEdit color="blue" onClick={() => go("patientdiagnosis")}/> */}
</h4>
<li>{`${diagnosis}`}</li>
            {/* <li>Pain radiating to right arm</li>
<li>Pain radiating to left arm</li>
<li>Right shoulder pain</li>
<li>Left shoulder pain</li> */}
<br/>
<h4>Treatment Plan
   {/* <FaIcons.FaEdit color="blue" onClick={() => go("addtest")}/> */}
   </h4>
<li>{`${treatmentplan}`}</li>
            {/* <li>Pain radiating to right arm</li>
<li>Pain radiating to left arm</li>
<li>Right shoulder pain</li>
<li>Left shoulder pain</li> */}
<br/>
<h4>Treatment Image
  {/* <FaIcons.FaEdit color="blue" onClick={() => go("addtest")}/> */}
  </h4>
{/* <li>{`${treatimage}`}</li> */}
<li><Image src={`${treatimage}`}
                                    style={
                                        {
                                            width: '150px',
                                            height: '150px'
                                        }} /></li>
<br/>
<h4>Precaution
  {/* <FaIcons.FaEdit color="blue" onClick={() => go("addtest")}/> */}
  </h4>
<li>{`${precaution}`}</li>
            {/* <li>Pain radiating to right arm</li>
<li>Pain radiating to left arm</li>
<li>Right shoulder pain</li>
<li>Left shoulder pain</li> */}
<br/>
            {/* <thead>
              <tr>
                <th>Sl.No</th>
                <th>Diagnosis</th>
                <th>Treatment Plan</th>
                <th>Precaution </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Cervical spondylitis </td>
                <td>Exercise</td>
                <td>Rest</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Lumbar spondylitis</td>
                <td>Rom exercise</td>
                <td>Ice pack</td>
              </tr> */}
              {/* <tr>
                <td colSpan="3" style={{ textAlign: "right" }}>
                  <b>Total Amount:</b>
                </td>
                <td>2500</td>
              </tr>
              <tr>
                <td colSpan="3" style={{ textAlign: "right" }}>
                  <b>CGST %</b>
                </td>
                <td>3.5</td>
              </tr>
              <tr>
                <td colSpan="3" style={{ textAlign: "right" }}>
                  <b>SGST %</b>
                </td>
                <td>3.5</td>
              </tr>
              <tr>
                <td colSpan="3" style={{ textAlign: "right" }}>
                  <b>Grand Total:</b>
                </td>
                <td>
                  <b>2675 /-</b>
                </td>
              </tr> */}
            {/* </tbody> */}
          {/* </Table> */}
        </Col>
        <Col lg={2}></Col>
        <Col lg={12}>
          <Row className="btn-print">
            <Col>
              <Button variant="primary"
                onClick={handleClick}> Print</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Printer;
