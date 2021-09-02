
import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Form, Table } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import { Link,useParams,useHistory } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import './ListPatient';
import { useLocation } from "react-router-dom";
import axios from "axios";

const History = () => {
    const location = useLocation();
    const rowData = location.state;
    const history = useHistory();
    const [pageData, setPageData] = useState([]);
useEffect(() => {  
    // debugger;  
    axios.get("http://localhost:8080/patients/") 
    debugger;  
  }, []);

  useEffect(() => {  
    // debugger;  
    axios.get("http://localhost:8080/test/") 
    debugger;  
  }, []);
    return (
        <Container className="total-container">
            <Row style={{ marginLeft: "0px" }}>
                
                <Col lg={8} md={6} sm={6} xs={8}>
                    <h4 className="cont-head">PATIENT HISTORY</h4>
                </Col>
                <Col lg={4} md={6} sm={6} xs={4}>
                    <Link to="/ListPatient">
                        <Button>
                            <FaIcons.FaListAlt /> Patient List
                        </Button>
                    </Link>
                </Col>
            </Row>
            <br />
      <div>
            <Row style={{ marginLeft: "0px" }}>
                <Col lg={8} md={6} sm={6} xs={8}>
                    <h6 >Patient Name: {location.state.firstName}</h6>
                </Col>
                <Col lg={4} md={6} sm={6} xs={4}>
               
                    <h6>Patient Id: {location.state.patientid}</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                           <th>Visited Date: {location.state.date}</th>  

                            </tr>
                        </thead>
                        <tbody>
                            <div>
                                <Row style={{ marginLeft: "0px" }}>
                                    <Col lg={3}><h6>Complaint of the patient</h6></Col> <Col lg={3}>: {location.state.complaint}</Col>
                                    <Col lg={3}><h6>Duration of Patient</h6></Col> <Col lg={3}>:</Col>
                                </Row>
                                <Row style={{ marginLeft: "0px" }}>
                                    <Col lg={3}><h6>Numbness</h6> </Col><Col lg={3}>: {location.state.numbness}</Col>
                                    <Col lg={3}><h6>Pain Pattern</h6></Col><Col lg={3}>: {location.state.pattern}</Col>
                                </Row>
                                <Row style={{ marginLeft: "0px" }}>
                                    <Col lg={3}><h6>Range of Motion</h6></Col><Col lg={3}>: {location.state.motion}</Col>
                                    <Col lg={3}><h6>Pain Scale</h6></Col><Col lg={3}>: {location.state.pain}</Col>
                                </Row>
                                <Row style={{ marginLeft: "0px" }}>
                                    <Col lg={3}><h6>Treatment Plan</h6></Col><Col lg={3}>: {location.state.treatmentplan}</Col>
                                    <Col lg={3}><h6>Special Test</h6></Col><Col lg={3}>: {location.state.test}</Col>
                                </Row>
                                <Row style={{ marginLeft: "0px" }}>
                                    <Col lg={3}><h6>Medical History</h6></Col><Col lg={3}>: {location.state.history}</Col>
                                    <Col lg={3}><h6>Treatment Plan Image</h6></Col><Col lg={3}>: {location.state.treatimage}</Col>
                                    <br/>
                                    <br/>
                                </Row>
                            </div>
                        </tbody>
                    </table>
                </Col>
            </Row>
            </div>
            
            <Form>
            <Row className="add-btn123">
                <Col>
                {/* <Link to ="/diagnosis">
                    <Button style={{marginLeft:"400px"}}
                        
                        variant="success">Add Treatment</Button></Link> */}
                         <Button style={{marginLeft:"400px"}} variant="success" onClick={() => 
                    history.push("/Pdiagnosis", rowData)} >Add Treatment
                 
                  </Button>
    </Col>
    <Col>
                   {/* <Link to = "/AddTreatment"> <Button  style={{marginLeft:"-20px"}}
                        
                        variant="danger">Follow Up</Button></Link> */}
                       
              <Button variant="danger" style={{marginLeft:"-20px"}} onClick={() => 
                    history.push("/AddTreatment", rowData)} >Follow Up
                 
                  </Button>
                

              {/* <Button variant="danger" style={{marginLeft:"-20px"}} onClick={() => 
                    history.push("/ImageShow")} >Follow Up
                 
                  </Button> */}
                

             
                        </Col>
            </Row>
            </Form>

        </Container>
    );
};

export default History; 