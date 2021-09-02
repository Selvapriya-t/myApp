import React, { useState, useRef } from "react";
import "./AddPatient.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Row,Col,Container,Button,Form,Overlay,Tooltip} from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
//import axios from "axios";
import ItemForm from './ItemForm';
import { useForm } from "react-hook-form";

const AddPatient = ({ setForm, formData, navigation,props }) => {
  const {firstName,lastName,age,date, gender,patientid, hospitalid,
    bloodgroup,height,mass,bmi,
    referraldoc, email, phone, address  } = 
    formData;  
  const { previous,next } = navigation;
  // const [show, setShow] = useState(false);
   //const [radio, setRadio] = useState({ gender: "" });
 //const [startDate, setStartDate] = useState(new Date());
 //const [height, setHeight] = useState();
 //const [mass, setMass] = useState();
 const [bmii, setBmi] = useState();

 const calculate = (e) => {
   e.preventDefault();
   const formValid = +height > 0 && +mass > 0;
   if (!formValid) {
     return;
   }
    const heights= height/100;
   const bmii = +mass / (+heights) ** 2;
  
   setBmi(+bmii.toFixed());
 };
 

//const AddPatient=(props)=>{
  // const { patients } = props;
   const { register, handleSubmit, errors } = useForm();
   //({
  //   defaultValues: {
  //     firstName: patients.firstName,
  //     lastName: patients.lastName
  //   }
  // });
  const onSubmit=(data)=>{
    console.log(data);
  };

  return (
    <Container className="total-container">
      <Row style={{ marginLeft: "0px" }}>
        <Col lg={8} md={6} sm={6} xs={8}>
          <h4 className="cont-head">ADD PATIENT</h4>
        </Col>
        <Col lg={4} md={6} sm={6} xs={4}>
          <a href="/ListPatient">
            <Button>
              <FaIcons.FaListAlt /> Patient List
            </Button>
          </a>
        </Col>
      </Row>

      <Form className="box-doctor" onsubmit={handleSubmit(onSubmit)} >
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">First Name</label>
            <Form.Control
              name="firstName"
              value={firstName}
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
            <label className="input-label">Last Name</label>
            <Form.Control
              value={lastName}
              onChange={setForm}
              name="lastName"
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
         
        
          <Col lg={3} md={3} sm={3} xs={3}>
            <label className="input-label">Age</label>
            <Form.Control
               value={age}
               onChange={setForm}
              name="age"
              
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
          <br />
          <Col lg={3} md={3} sm={3} xs={3}>
            <label className="input-label">DOB</label><br />
            {/* <DatePicker 
             selected={startDate} 
            onChange={(date) => setStartDate(date)} 
        //adjustDateOnChange={setForm}
        /> */}
            <input type="date" id="customDatePicker" multiple 
               onChange={setForm}
               name="date"/>
          </Col>

          <Col lg={3} md={3} sm={3} xs={3}>
            <label className="input-label">Gender</label>

            <div className="mb-3">
              <Form.Check
                type="radio"
                name="gender"
                value={gender}
                onChange={setForm}
                //checked={radio === "male"}
                value="male"
                style={{ marginTop: "20px" }}
                inline
                label="Male"
              // type={type}
              // id={`inline-${type}-1`}
              />
              <Form.Check
                type="radio"
                name="gender"
                value={gender}
                onChange={setForm}
                //checked={radio === "female"}
                value="female"
                inline
                label="Female"
              // type={type}
              // id={`inline-${type}-2`}
              />
            </div>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Patientid</label>
            <Form.Control
           value={patientid}
           onChange={setForm}
              name="patientid"
              
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
            <label className="input-label">Hospitalid</label>
            <Form.Control
            value={hospitalid}
            onChange={setForm}
              name="hospitalid"
             
              style={{
                marginTop: "0px",
                borderRadius: "0px",
                borderBottom: "1px solid black",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
              }}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Blood Group</label>
            <Form.Control
              value={bloodgroup}
              onChange={setForm}
              name="bloodgroup"
             
              style={{
                marginTop: "0px",
                borderRadius: "0px",
                borderBottom: "1px solid black",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
              }}
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>

            <Form.Row>
              <Col lg={3} md={3} sm={3} xs={3}>
                <label className="input-label">Height</label>
                <Form.Control name="height"onChange={setForm}
                value={height}
                // onChange={(e) => setHeight(e.target.value)}
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
              <Col lg={3} md={3} sm={3} xs={3}>
                <label className="input-label">Weight</label>
                <Form.Control name="mass" onChange={setForm}
                // onChange={(e) => setMass(e.target.value)}
                value={mass}
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
              <Col><Button style={{marginTop:'50px'}} onClick={calculate}>BMI</Button></Col>
              <Col> <label className="input-label">BMI</label>
                <Form.Control name="bmi" value={bmii} readOnly="True"
              onClick={setForm}
                  style={{
                    marginTop: "0px",
                    borderRadius: "0px",
                    borderStyle: '1px soild black',
                    margin: "0px",
                  }}
                />
              </Col>

            </Form.Row>
          </Col>

        </Form.Row>
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Referral Doctor</label>
            <Form.Control
              value={referraldoc}
              onChange={setForm}
              name="referraldoc"
             
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
            <label className="input-label">email</label>
            <Form.Control
               value={email}
               onChange={setForm}
              name="email"
              
              style={{
                marginTop: "0px",
                borderRadius: "0px",
                borderBottom: "1px solid black",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
              }}
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Contact Number</label>
            <Form.Control
               value={phone}
               onChange={setForm}
              name="phone"
              
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
            <label className="input-label">Address</label>
            <Form.Control
              as="textarea"
              rows={2}
              value={address}
              onChange={setForm}
              name="address"
              
            />
          </Col>
        </Form.Row>
        <Row>
         

          {/* <Col>
            <br />
        
            <Button onClick={previous} variant="warning"  >
              <RiIcons.RiArrowGoBackFill /> Back
            </Button>{" "}
          </Col> */}
          <Col>
            <br />

            <Link to="/diagnosis">
              {" "}
              <Button onClick={next}
                className="add-btn"
                variant="success"
                // ref={target}
                
              >
                <FaIcons.FaPlus /> Next
              </Button>
            </Link>
          </Col>
        </Row>
      </Form>


      {/* <Overlay show={show} placement="left">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Patient details added successfully.
          </Tooltip>
        )}
      </Overlay> */}
    </Container>
  );
};
export default AddPatient;