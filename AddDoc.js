import React, { useState } from 'react';
import './AddDoc.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  Overlay,
  Tooltip,
} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
//import * as FaSave from 'react-icons/fa';
import axios from 'axios';

const AddDoc = (props) => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    contactnumber: '',
    consultancyfee: '',
    email: '',
    specialization: '',
    address: '',
  });
 const handleChange=(e)=> {
    setInput({...input,[e.target.name]:e.target.value})
  }

  const handleClick=(e)=> {
    e.preventDefault();
    debugger;
    const registered = {
      firstname: input.firstname,
      lastname: input.lastname,
      contactnumber: input.contactnumber,
      consultancyfee: input.consultancyfee,
      email: input.email,
      specialization: input.specialization,
      address: input.address,
    };

    axios.post('http://localhost:8080/doctor', registered);
    // axios({
    //     method: 'post',
    //     url: 'http://localhost:8080/doctor',
    //     data: registered,
    //     'content-type': 'application/json',
    //   })
    
  }

  // useEffect(()=>{
  //   function handleStatusChange(status) {
  //     setAddDoc(status.Firstname);
  //   }
  //   return
  // },[Firstname])

  // const setAddDoc = (e) => {
  //   debugger;
  //   const registered = {
  //     Firstname: Firstname,
  //     Lastname: Lastname,
  //   }
  //   axios.post('http://localhost:8080/doc/addoctor', registered)
  //           .then(res => console.log(res.data))
  //           this.useState({
  //             Firstname: '',
  //             Lastname: '',

  //         })

  return (
    <Container className="total-container">
      <Row style={{ marginLeft: '0px' }}>
        <Col lg={8} md={6} sm={6} xs={8}>
          <h4 className="cont-head">ADD DOCTOR</h4>
        </Col>
        <Col lg={4} md={6} sm={6} xs={4}>
          <a href="/ListDoc">
            <Button>
              <FaIcons.FaListAlt /> Doctor List
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
              name="firstname"
              value={input.firstname}
              style={{
                marginTop: '0px',
                borderRadius: '0px',
                borderBottom: '1px solid #ced4da',
                borderTop: '0px',
                borderLeft: '0px',
                borderRight: '0px',
                margin: '0px',
              }}
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Last Name</label>
            <Form.Control
              onChange={handleChange}
              name="lastname"
              value={input.lastname}
              style={{
                marginTop: '0px',
                borderRadius: '0px',
                borderBottom: '1px solid #ced4da',
                borderTop: '0px',
                borderLeft: '0px',
                borderRight: '0px',
                margin: '0px',
              }}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Contact Number</label>
            <Form.Control
              onChange={handleChange}
              name="contactnumber"
              value={input.contactnumber}
              style={{
                marginTop: '0px',
                borderRadius: '0px',
                borderBottom: '1px solid #ced4da',
                borderTop: '0px',
                borderLeft: '0px',
                borderRight: '0px',
                margin: '0px',
              }}
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Consultancy Fee</label>
            <Form.Control
              onChange={handleChange}
              name="consultancyfee"
              value={input.consultancyfee}
              style={{
                marginTop: '0px',
                borderRadius: '0px',
                borderBottom: '1px solid #ced4da',
                borderTop: '0px',
                borderLeft: '0px',
                borderRight: '0px',
              }}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Email</label>
            <Form.Control
              onChange={handleChange}
              name="email"
              value={input.email}
              style={{
                marginTop: '0px',
                borderRadius: '0px',
                borderBottom: '1px solid #ced4da',
                borderTop: '0px',
                borderLeft: '0px',
                borderRight: '0px',
                margin: '0px',
              }}
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Specialization</label>
            <Form.Control
              onChange={handleChange}
              name="specialization"
              value={input.specialization}
              style={{
                marginTop: '0px',
                borderRadius: '0px',
                borderBottom: '1px solid #ced4da',
                borderTop: '0px',
                borderLeft: '0px',
                borderRight: '0px',
              }}
            />
          </Col>
        </Form.Row>

        <Form.Row>
          <Col lg={12}>
            <label className="input-label">Address</label>
            <Form.Control
              as="textarea"
              rows={2}
              onChange={handleChange}
              name="address"
              value={input.address}
            />
          </Col>
        </Form.Row>
      <Row>
        <Col>
          <br />
         <Link to="/ListDoc">
            {' '}
            <Button
              className="add-btn"
              variant="success"
               //onClick={handleClick}
              onClick={() => setShow(!show)}
            >
              <FaIcons.FaSave /> Save
            </Button>
            </Link>
        
        </Col>
        <Col>
          <br />
          <Button variant="warning">
            <RiIcons.RiArrowGoBackFill /> Back
          </Button>{' '}
        </Col>
       
      </Row>
      </Form>
      <Overlay show={show} placement="left">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Doctor details added successfully.
              </Tooltip>
            )}
          </Overlay>
    </Container>
  );
};
export default AddDoc;
