import React, { useState, useRef } from "react";
import "./AppointmentAdd.css";
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
import axios from 'axios';
import {Link} from 'react-router-dom'

const AppointmentAdd = (props) => {
  // const [show, setShow] = useState(false);
  // const target = useRef(null);
  const[radio,setRadio]=useState({gender:''});

  
    const initialValues={
    firstName: '',
    lastName: '',
    age: '',
    // gender: '',
    dates: '',
    time: '',
    department: '',
    contactnumber:''
  }
  const[input,setInput]=useState(initialValues);
  const {firstName,
  lastName,
  age,
  gender,
  dates,
  time,
  department,
  contactnumber}=input;
  // const handleRadio=(e)=>{
  //   setRadio({...radio,[e.target.name]:e.target.value})
  // }

  const handleChange=(e)=> {
    setInput({...input,[e.target.name]:e.target.value})
    console.log(input);
  }
  const handleClick=(e)=> {
    e.preventDefault();
    debugger;
    // const registered = {
    //   firstName: input.firstName,
    //   lastName: input.lastName,
    //   age: input.age,
    //   gender: radio.gender,
    //  dates: input.dates,
    //   time: input.time,
    //   department: input.department,
    //   contactnumber: input.contactnumber,
    // };
    axios.post('http://localhost:8080/appoint', input);
    
  }

  return (
    <Container className="total-container">
      <Row style={{ marginLeft: "0px" }}>
        <Col lg={8} md={6} sm={6} xs={8}>
          <h4 className="cont-head">ADD Appointment</h4>
        </Col>
        <Col lg={4} md={6} sm={6} xs={4}>
          <a href="/Listschedule">
            <Button>
              <FaIcons.FaListAlt /> Appointment List
            </Button>
          </a>
        </Col>
      </Row>
      <Form className="box-doctor" onClick={handleClick}>
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">First Name</label>
            <Form.Control
             onChange={handleChange}
             name="firstName"
             value={input.firstName}
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
             onChange={handleChange}
             name="lastName"
             value={input.lastName}
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
            <label className="input-label">Age</label>
            <Form.Control
             onChange={handleChange}
             name="age"
             value={input.age}
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
          <label className="input-label">Gender</label>

<div className="mb-3">
  <Form.Check
    type="radio"
    name="gender"
    value={gender}
    onChange={handleChange}
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
    onChange={handleChange}
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
            <label className="input-label">Date</label>
            <Form.Control 
             onChange={handleChange}
             name="dates"
             value={input.dates}
             dateFormat="DD-MM-YYYY"
              type="date"
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
            <label className="input-label">Time</label>
            <Form.Control
             onChange={handleChange}
             name="time"
             value={input.time}
              type="time"
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
            <label className="input-label">Department</label>
            <Form.Control
             onChange={handleChange}
             name="department"
             value={input.department}
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
            <label className="input-label">Contact Number</label>
            <Form.Control
             onChange={handleChange}
             name="contactnumber"
             value={input.contactnumber}
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

          {/* <Overlay target={target.current} show={show} placement="left">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Appointment details added successfully.
              </Tooltip>
            )}
          </Overlay> */}
        </Form.Row>
   
      <Row>
        <Col>
          <br />
          <Link to="/Listschedule">
          <Button
            className="add-btn"
            variant="success"
            // ref={target}
            // onClick={() => setShow(!show)}
          >
            <FaIcons.FaPlus /> Save
          </Button></Link>
        </Col>
        <Col>
          <br />
          <Button variant="warning">
            <RiIcons.RiArrowGoBackFill /> Back
          </Button>{" "}
        </Col>
      </Row>
      </Form>
    </Container>
  );
};
export default AppointmentAdd;
