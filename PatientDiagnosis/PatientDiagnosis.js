import React from "react";
import "./PatientDiagnosis.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import ItemForm from '../ItemForm';
import ItemDrop from "../ItemDrop";
import { useForm } from "react-hook-form";

const PatientDiagnosis = ({ setForm, formData, navigation }) => {
  const {patientid,firstName,lastName,age}=formData;
  const {complaint,pweek,pmonth,pday,surgical,investdetail,history,numbness,pain,pattern,motion,test,invest } = formData;
    const { previous,next } = navigation;

    const{register, handleSubmit,errors}=useForm();
    const onSubmit=(data)=>{
      console.log(data);
    };
  
  return (
    <Container className="main-container">
      <Row>
        <Col>
          <h4>PATIENT DIAGNOSIS</h4>
        </Col>
      </Row>
      <Row className="top-row">
        <Col>
          <b>Patient Id: {patientid}</b>
        </Col>
        <Col>
          <b>Patient Name: {firstName} {lastName}</b>
        </Col>
        <Col>
          <b>Age: {age}</b>
        </Col>
      </Row>

      <Form onsubmit={handleSubmit(onSubmit)}>
        
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Complaints of the patient</label>
            <Form.Control
              as="select"
              name="complaint"
              value={complaint}
              onChange={setForm}
              className="modal-dropdown"
              style={{ width: "100%" }}
            >
              <option>Neck pain </option>
              <option>Pain radiating to right arm</option>
             <option>Pain radiating to left arm </option>
              <option>Right shoulder pain  </option>
              <option>Left shoulder pain</option>
              <option>Right elbow</option>
              <option>Left elbow</option>
              <option>Right wrist</option>
              <option>Left wrist pain</option>
              <option>Finger pain</option>
              <option>Thumb pain</option>
              <option>Low back ache</option>
              <option>Pain radiating to right leg </option>
              <option>Pain radiating to left leg</option>
              <option>Right hip</option>
              <option>Left hip pain</option>
              <option>R knee pain</option>
              <option>left knee pain</option>
              <option>Right ankle left ankle pain</option>
              <option>Foot pain</option>
              <option>Others</option>
            </Form.Control>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Duration of Pain</label>
            <Form.Row>
              <Col>
                 <Form.Control name="pday" value ={pday} onChange={setForm} placeholder="Day"/>
              </Col>
              <Col>
                 <Form.Control name="pweek"  value ={pweek} onChange={setForm} placeholder="Week"/>
              </Col>
              <Col>
                 <Form.Control name="pmonth"  value ={pmonth} onChange={setForm} placeholder="Month"/>
              </Col>
            </Form.Row>
          </Col>
        </Form.Row>
        <Form.Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <label className="input-label"> History</label>
          <Form.Row>
          <Col>
            <Form.Control
            name="history"
            value={history}
            onChange={setForm}
              as="textarea"
              rows={2}
              placeholder="Details of Medical History..."
            />
            </Col>
            <br/>
            <Col>
            <Form.Control
             name="surgical"
             value={surgical}
             onChange={setForm}
              as="textarea"
              rows={2}
              placeholder="Details of Surgical History..."
            />
            </Col>
            </Form.Row>
        
          </Col>
         
        
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Pain Pattern</label>
            <Form.Control
            name="pattern"
            value={pattern}
            onChange={setForm}
              style={{
                marginTop: "0px",
                borderRadius: "0px",
                borderBottom: "1px solid black",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
                margin: "0px",
              }}
            />
          </Col>
          
        </Form.Row>
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Numbness</label>
            <Form.Control
            name="numbness"
            value={numbness}
            onChange={setForm}
              style={{
                marginTop: "0px",
                borderRadius: "0px",
                borderBottom: "1px solid black",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
                margin: "0px",
              }}
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Pain Scale</label>
            <Form.Control
            name="pain"
            value={pain}
            onChange={setForm}
              as="select"
              className="modal-dropdown"
              style={{ width: "100%" }}
            >
              <option>No Pain </option>
              <option>Mild</option>
              <option>Moderate</option>
              <option>Severe</option>
              <option>Very Severe </option>
              <option>Worst possible Pain</option>
            </Form.Control>
          </Col>
        </Form.Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <h5>DISABILITY CHECK </h5>
          </Col>
        </Row>
        <Form.Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <label className="input-label">Range of Motion</label>
            <Form.Control
            name="motion"
            value={motion}
            onChange={setForm}
              style={{
                marginTop: "0px",
                borderRadius: "0px",
                borderBottom: "1px solid black",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
                margin: "0px",
              }}
            />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
             <label className="input-label">Special Test</label>
            <Form.Control
            name="test"
            value={test}
            onChange={setForm}
              as="textarea"
              rows={2}
              placeholder="Details of Special Test..."
            />
           
          </Col>
           
         
         
        </Form.Row>
        <Form.Row>
       
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Investigation</label>
            <Form.Control
            name="invest"
            value={invest}
            onChange={setForm}
              as="select"
              className="modal-dropdown"
              style={{ width: "100%" }}
            >
              <option>X-ray</option>
              <option>MRI</option>
              <option>Blood Test</option>
              <option>CT-Scan</option>
              
            </Form.Control>
            {/* <ItemDrop label="Investigation" 
            name="invest" 
        value={invest} 
        onChange={setForm} /> */}
          </Col>

          <Col lg={6} md={6} sm={12} xs={12}>
             <label className="input-label"></label>
            <Form.Control
            name="investdetail"
            value={investdetail}
            onChange={setForm}
              as="textarea"
              rows={2}
              placeholder="Details of Invest..."
            />
           
          </Col>
        </Form.Row>

      </Form>
      <Row>
      <Col>
          <br />
          <Link to ="/Patient">
          <Button onClick={previous} variant="warning">
            <RiIcons.RiArrowGoBackFill /> Back
          </Button>
          </Link>
        </Col>
        <Col>
          <br />
          <Link to = "/AddTest">
            <Button  onClick={next} className="add-btn" variant="success">
              <FaIcons.FaPlus /> Next
            </Button>
          </Link>
        </Col>
        {/* <Col>
          <br />
          <Link to ="/Patient">
          <Button onClick={previous} variant="warning">
            <RiIcons.RiArrowGoBackFill /> Back
          </Button>
          </Link>
        </Col> */}
      </Row>
    </Container>
  );
};
export default PatientDiagnosis;