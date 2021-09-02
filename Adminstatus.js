import React, { useEffect, useState, useRef } from "react";
import './Admin.css';
import { Row, Col, Card,Button } from 'react-bootstrap';
import { Link,useParams,useHistory } from 'react-router-dom';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import axios from 'axios';

const Adminstatus = () => {
  const today = new Date();
      const day = today.getDate(); 
      const month = today.getMonth();   
     
const year = today.getFullYear()
console.log(year + "-" + month + "-" + day);
const [data, setData] = useState([]);
useEffect(() => {  
  // debugger;  
  axios.get('http://localhost:8080/patients/count')
      .then(results => setData(results.data));  
  console.log(data);  
  debugger;  
}, []);  
  return (
    <Row>
      <Col lg={3} md={3} sm={6} xs={6}>
        <Card className="cards">
          <RiIcons.RiGroupFill className="card-icons" />
          <Card.Body>
            <Card.Title className="card-title" style={{ fontSize: '14px' }}>
              New Patient
            </Card.Title>
            <Card.Text className="card-number">{day}-{month}-{year}
            {data.map(home => <div>{home.COUNT}</div>)}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <a href="/Patient">
                <MdIcons.MdMoveToInbox size="25" />
                Show Details
                {/* <Link to = "/AddTreatment"> <Button  style={{marginLeft:"-20px"}}
                        
                        variant="danger">Follow Up</Button></Link> */}
              </a>
            </small>
          </Card.Footer>
        </Card>
      </Col>

      <Col lg={3} md={3} sm={6} xs={6}>
        <Card className="cards">
          <MdIcons.MdReceipt className="card-paticons" />
          <Card.Body>
            <Card.Title className="card-title" style={{ fontSize: '14px' }}>
              Today's Billing
            </Card.Title>
            <Card.Text className="card-number">Rs.55,000/-</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {/* <a href="/BillingPage"> */}
              <Link to = "/BillingPage"> 
                <MdIcons.MdMoveToInbox size="25" />
                Show Details
              {/* </a> */}</Link>
            </small>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg={3} md={3} sm={6} xs={6}>
        <Card className="cards">
          <FaIcons.FaStethoscope className="card-docicons" />
          <Card.Body>
            <Card.Title className="card-title" style={{ fontSize: '14px' }}>
              Doctors on Duty
            </Card.Title>
            <Card.Text className="card-number">50</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {/* <a href="/ListDoc"> */}
              <Link to = "/ListDoc"> 
                <MdIcons.MdMoveToInbox size="25" />
                Show Details</Link>
              {/* </a> */}
            </small>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg={3} md={3} sm={6} xs={6}>
        <Card className="cards">
          <AiIcons.AiFillSchedule className="card-appicons" />
          <Card.Body>
            <Card.Title className="card-title" style={{ fontSize: '14px' }}>
              Appointments
            </Card.Title>
            <Card.Text className="card-number">20</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {/* <a href="/Listschedule"> */}
              <Link to = "/Listschedule"> 
                <MdIcons.MdMoveToInbox size="25" />
                Show Details
              {/* </a> */}
              </Link> 
            </small>
         
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default Adminstatus;
