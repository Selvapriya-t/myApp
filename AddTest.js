import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import "./Testadd.css";
//import Treatment from './Treatment'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  Overlay,
  Tooltip,
} from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import axios from "axios";
import { useForm } from "react-hook-form";

const Testadd = ({ setForm, formData, navigation }) => {
  const {patientid,firstName,lastName,referraldoc}=formData;
  const { diagnosis,treatmentplan ,treatimage,precaution } = formData;  
  const { previous ,next} = navigation;

  

    
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { user } = props;
  //     const updatedData = {
  //       country: countries.find(
  //         (country) => country.isoCode === selectedCountry
  //       )?.name,
  //       state:
  //         states.find((state) => state.isoCode === selectedState)?.name || '',
  //       city: selectedCity
  //     };

  //     await axios.post(`${BASE_API_URL}/register`, {
  //       ...user,
  //       ...updatedData
  //     });
  //   } catch (error) {
  //     if (error.response) {
  //       console.log('error', error.response.data);
  //     }
  //   }
  // };
  // const [show, setShow] = useState(false);
  // const [input, setInput] = useState({
  //   patientid: '',
  //   consultingdoctor: '',
  //   painarea: '',
  //   position: '',
  //   treatmentname: '',
  // });
  // const handleChange = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value })
  // }
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   debugger;
  //   const registered = {
  //     patientid: input.patientid,
  //     consultingdoctor: input.consultingdoctor,
  //     painarea: input.painarea,
  //     position: input.position,
  //     treatmentname: input.treatmentname,
  //   };
  //   axios.post('http://localhost:8080/test', registered);
  // }


  // const handleClick = (e) => {
  //     e.preventDefault(); 
  //     const defaultData = {
  //       firstName:firstName,
  //       lastName: lastName,
  //       age:age,
  //       date:date,
  //       gender:gender,
  //       patientid:patientid,
  //       hospitalid:hospitalid,
  //       bloodgroup:bloodgroup,
  //       // bmi:'',
  //       referraldoc:referraldoc,
  //       email:email,
  //       phone:phone,
  //       address:address,
  //       complaint:complaint,
  //       history:history,
  //       numbness:numbness,
  //       pain:pain,
  //       pattern:pattern,
  //       motion:motion,
  //       test:test,
  //       invest:invest, 
  //        diagnosis:diagnosis,treatmentplan:treatmentplan ,precaution:precaution,
     
  //   };
  //   axios.post('http://localhost:8080/patients',defaultData);
  //     };
     
    
  return (
    <Container className="total-container">
      <Row style={{ marginLeft: "0px" }}>
        <Col lg={8} md={6} sm={6} xs={8}>
          <h4 className="cont-head">ADD Treatment</h4>
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
          <b>Consulting Doctor: {referraldoc}</b>
        </Col>
      </Row>
      {/* <Col lg={4} md={6} sm={6} xs={4}>
        <Link to = "/ListTest"><Button>
              <FaIcons.FaListAlt /> Treatment List
            </Button></Link>
        </Col> */}

      <Form className="box-doctor"  >
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Diagnosis </label>
            <Form.Control
              value={diagnosis}
              onChange={setForm}
              name="diagnosis"
              as="select"
              className="modal-dropdown"
              style={{ width: "100%" }}
            >
              <option>Cervical spondylitis </option>
              <option>Lumbar spondylitis </option>
              <option>Migrated disc lumbar spine</option>
              <option>Migrated disc cervical spine</option>
              <option>Fracture </option>
              <option>Fracture dislocation</option>
              <option>Post opertive care for </option>
              <option>Periathritis </option>
              <option>Osteoarthritis </option>
              <option>Migraine </option>
              <option>Cramps </option>
              <option>Others</option>
            </Form.Control>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Treatment Plan</label>
            <Form.Control
              value={treatmentplan}
              onChange={setForm}
              name="treatmentplan"
              as="select"
              className="modal-dropdown"
              style={{ width: "100%" }}
            >
              <option>Exercise</option>
              <option>Rom exercise</option>
              <option>knee strengthening shoulder strengthening </option>
              <option>Low back care  exercise</option>
              <option>Cervical exercise </option>
              <option>Ankle stretching</option>
              <option>Strengthening exercise </option>
              <option>Others</option>
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Treatment Image</label>
            <br />
            {/* <Treatment/> */}
            {/* <Link to="TreatmentImage"><Button variant="primary">
              <RiIcons.RiImageAddLine /> Add Image
            </Button></Link> */}
          {/* </Col>
          <Col lg={6} md={6} sm={12} xs={12}> */}
            {/* <br />
            <br /> */}
            <div >
              <input type="file"
              // id="customFile"
               // multiple 
               onChange={setForm}
               name="treatimage"/>
            </div>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Precaution</label>
            <Form.Control  
              value={precaution}
              onChange={setForm}
              name="precaution"
              as="select"
              className="modal-dropdown"
              style={{ width: "100%" }}
            >
              <option>Rest</option>
              <option>Ice pack</option>
              <option>Limb elevation</option>
              <option>Restricted walking</option>
              <option>Avoid over head activities</option>
              <option>Others</option>
            </Form.Control>
          </Col>
        </Form.Row>
       
   
        <Row>
        <Col>
            <br />
            <Link to="/diagnosis">
              <Button onClick={previous} variant="warning">
                <RiIcons.RiArrowGoBackFill /> Back
              </Button>
            </Link>
          </Col>
          <Col>
            <br />
            <Link to="/Print"><Button onClick={next}
              className="add-btn"
              variant="success" 
            >
              <FaIcons.FaPlus /> Save
            </Button></Link>

          </Col>
         
        </Row>
      </Form>
    </Container>
  );
};
export default Testadd;