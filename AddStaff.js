import React, { useState, useRef } from 'react';

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
//import * as FaSave from 'react-icons/fa'

const AddDoc = (props) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <Container className="total-container">
      <Row style={{ marginLeft: '0px' }}>
        <Col lg={8} md={6} sm={6} xs={8}>
          <h4 className="cont-head">ADD STAFF</h4>
        </Col>
        <Col lg={4} md={6} sm={6} xs={4}>
          <a href="/ListStaff">
            <Button>
              <FaIcons.FaListAlt /> Staff List
            </Button>
          </a>
        </Col>
      </Row>
      <Form className="box-doctor">
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">First Name</label>
            <Form.Control
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
            <label className="input-label">Email</label>
            <Form.Control
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
            <label className="input-label">Contact Number</label>
            <Form.Control
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
            <label className="input-label">Designation</label>
            <Form.Control
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
            <label className="input-label">Department</label>
            <Form.Control
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
            <Form.Control as="textarea" rows={2} />
          </Col>

          <Overlay target={target.current} show={show} placement="left">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Staff details added successfully.
              </Tooltip>
            )}
          </Overlay>
        </Form.Row>
      </Form>
      <Row>
        <Col>
          <br />
          <a href="/ListStaff">
            <Button
              className="add-btn"
              variant="success"
              ref={target}
              onClick={() => setShow(!show)}
            >
              <FaIcons.FaSave /> Save
            </Button>
          </a>
        </Col>
        <Col>
          <br />
          <Button variant="warning">
            <RiIcons.RiArrowGoBackFill /> Back
          </Button>{' '}
        </Col>
      </Row>
    </Container>
  );
};
export default AddDoc;
