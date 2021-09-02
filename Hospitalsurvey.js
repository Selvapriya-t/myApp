import React from "react";
import "./Admin.css";

const HospitalSurvey = () => {
  return (
    <div className="hospital-survey-graphs">
      <p className="hospitaltitle">
        <b>HOSPITAL SURVEY</b>
      </p>
      <div className="admin-months">
        <label>
          <b>Months</b>
          <select className="month-select">
            <option value="admin-option">January</option>
            <option value="admin-option">February</option>
            <option value="admin-option">March</option>
            <option value="admin-option">April</option>
            <option value="admin-option">May</option>
            <option value="admin-option">June</option>
            <option value="admin-option">July</option>
            <option value="admin-option">August</option>
            <option value="admin-option">September</option>
            <option value="admin-option">October</option>
            <option value="admin-option">November</option>
            <option value="admin-option">December</option>
          </select>
        </label>
      </div>
      <LineChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="GENERALPATIENT"
          stroke="blue"
          activeDot={{ r: 10 }}
        />
        <Line type="monotone" dataKey="NEWPATIENT" stroke="blueviolet" />
      </LineChart>
    </div>
  );
};

export default HospitalSurvey;