import React, { useEffect, useState } from 'react';
import "./AppointmentList.css";
import { useHistory } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { FaEye, FaFlag } from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import "./PopShow";
import {
  Row,
  Col,
  Container,
  FormControl,
  Button,
  Form,
  Pagination,
  InputGroup,
  Modal,
} from "react-bootstrap";
import CustomDatePicker from './CustomDatePicker ';
import axios from 'axios';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom'

function PopShow() {
    const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
    //const [modalShow, setModalShow] = React.useState(false);
    const [input, setInput] = useState({

        dates: '',
        time: '',
      })
    
      const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
      }
    
    
      const handleClick = (e) => {
        e.preventDefault();
        debugger;
        const registered = {
    
          dates: input.dates,
          time: input.time,
    
        };
        axios.patch('http://localhost:8080/appoint', registered);
    
      }
    
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                    <Modal
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            show={show}
                            onHide={handleClose}
                          >
                            <Modal.Body>
                              <Form className="box-doctor" onClick={handleClick}>
                                <Form.Label>Appointment Date</Form.Label>
                                <FormControl onChange={handleChange}
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



                                <Form.Label>Appointment Time</Form.Label>
                                <FormControl
                                  type="time"
                                  placeholder="Appointment Time"
                                  onChange={handleChange}
                                  name="time"
                                  value={input.time}
                                  style={{
                                    marginTop: "0px",
                                    borderRadius: "0px",
                                    borderBottom: "1px solid black",
                                    borderTop: "0px",
                                    borderLeft: "0px",
                                    borderRight: "0px",
                                  }}
                                />
                               
                              </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <Link to="/Listschedule">
                                {" "}
                                <Button variant="success" onClick={() => setShow(!show)}>
                                  Save
                                </Button>
                              </Link>
                            </Modal.Footer>
                          </Modal>
                        
                    </Col>

                   
                </Row>
            </Container>
        </div>

    );
}
export default PopShow;