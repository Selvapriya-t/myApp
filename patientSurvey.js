import React from 'react';
import './Admin.css';
import { Card } from 'react-bootstrap';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const patientdata = [
  {
    name: 'Jan',
    number: 1,
    OldPatients: 400,
    NewPatients: 240,
    Recovery: 30,
    amt: 2400,
  },
  {
    name: 'Feb',
    number: 2,
    OldPatients: 300,
    NewPatients: 340,
    Recovery: 99,
    amt: 4400,
  },
  {
    name: 'Mar',
    number: 3,
    OldPatients: 500,
    NewPatients: 640,
    Recovery: 86,
    amt: 7400,
  },
  {
    name: 'Apr',
    number: 4,
    OldPatients: 900,
    NewPatients: 940,
    Recovery: 64,
    amt: 1400,
  },
  {
    name: 'May',
    number: 5,
    OldPatients: 300,
    NewPatients: 440,
    Recovery: 32,
    amt: 5400,
  },
  {
    name: 'Jun',
    number: 6,
    OldPatients: 200,
    NewPatients: 140,
    Recovery: 59,
    amt: 2410,
  },
  {
    name: 'Jul',
    number: 7,
    OldPatients: 470,
    NewPatients: 280,
    Recovery: 60,
    amt: 2900,
  },
  {
    name: 'Aug',
    number: 8,
    OldPatients: 460,
    NewPatients: 250,
    Recovery: 32,
    amt: 4200,
  },
  {
    name: 'Sep',
    number: 9,
    OldPatients: 410,
    NewPatients: 220,
    Recovery: 42,
    amt: 2300,
  },
  {
    name: 'Oct',
    number: 10,
    OldPatients: 100,
    NewPatients: 940,
    Recovery: 63,
    amt: 8400,
  },
  {
    name: 'Nov',
    number: 11,
    OldPatients: 500,
    NewPatients: 640,
    Recovery: 73,
    amt: 7400,
  },
  {
    name: 'Dec',
    number: 11,
    OldPatients: 500,
    NewPatients: 640,
    Recovery: 94,
    amt: 7400,
  },
];

const PatientSurvey = () => {
  return (
    <div>
      <Card>
        <div className="chart-title">Patient Survey</div>
        <BarChart
          width={600}
          height={250}
          data={patientdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="OldPatients" fill="#8884d8" />
          <Bar dataKey="NewPatients" fill="#82ca9d" />
          <Bar dataKey="Recovery" fill="orange" />
        </BarChart>
      </Card>
    </div>
  );
};

export default PatientSurvey;
