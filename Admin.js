import React from "react";
import "./Admin.css";
import Adminstatus from "./Adminstatus";
import { Container,Row,Col,Card, CardDeck } from "react-bootstrap";
import PatientSurvey from './patientSurvey';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const hospitaldata = [
  {
    name: "SUNDAY",
    Income: 7647,
    DoctorsList: 100,
    PatientsList: 1240,
  },
  {
    name: "MONDAY",
    Income: 6967,
    DoctorsList: 194,
    PatientsList: 8921,
  },
  {
    name: "TUESDAY",
    Income: 5000,
    DoctorsList: 165,
    PatientsList: 2079,
  },
  {
    name: "WEDNESDAY",
    Income: 8200,
    DoctorsList: 178,
    PatientsList: 2230,
  },
  {
    name: "THURSDAY",
    Income: 5800,
    DoctorsList: 157,
    PatientsList: 2118,
  },
  {
    name: "FRIDAY",
    Income: 6000,
    DoctorsList: 187,
    PatientsList: 5000,
  },
  {
    name: "SATURDAY",
    Income: 3000,
    DoctorsList: 165,
    PatientsList: 2100,
  },
];

const Admin = (props) => {
  return (
    <Container fluid style={{marginTop:'20px'}}>
      
        <Adminstatus />
       
          
      {/* <------------Charts-------------> */}
      <Row style={{marginTop:'20px'}}>
        <Col lg={6} md={6} sm={12} xs={12}>
        <CardDeck
        className="card-charts"
        style={{ marginRight: "0px", width: "100%", height:"275px" }}
      >
        <Card className="cards">
          <div className="chart-title">Hospital Survey</div>
          <ResponsiveContainer>
            <AreaChart
              
              data={hospitaldata}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Income"
                stackId="1"
                stroke="#26c6da"
                fill="#26c6da"
              />
              <Area
                type="monotone"
                dataKey="DoctorsList"
                stackId="1"
                stroke="indigo"
                fill="indigo"
              />
              <Area
                type="monotone"
                dataKey="PatientsList"
                stackId="1"
                stroke="mediumvioletred"
                fill="mediumvioletred"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
        </CardDeck>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
        <PatientSurvey />
        </Col>
      </Row>
      
        
        
      
    
    </Container>
  );
};
export default Admin;
