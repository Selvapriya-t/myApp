import React, { useState } from 'react';
import '../Appointment/Reschedule.css';
import {Link,useHistory,useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Col,
  Container,
  Button,
  FormControl,
  Form,
  Overlay,
  Tooltip,
} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
//import * as FaSave from 'react-icons/fa';
import axios from 'axios';
import { setDefaultLocale } from 'react-datepicker';

const Reschedule = (props) => {
 const location = useLocation();
    const data = location.state;
    const history = useHistory();
    const [dates, setDates] = useState([]);
    const [time, setTime] = useState([]);
    const [newData,setData]=useState([]);
    const updateData=(_id)=>{
      const newData = {
        
            dates: dates,
            time: time,
            
          }
      axios.patch(`http://localhost:8080/appoint/${_id}`,newData)
      //  .then(res=>{
      // // // //   const updateInput = data.map(data =>data._id === newData._id)?{...data,...newData}:data;
      //    const recordIndex=data.findById(dat=>dat._id==data._id);
      // // //   //data[recordIndex]={...data};
      // // //   data[recordIndex]=newData;
      //   setData(recordIndex);
      // // setDefaultLocale()
      // //   console.log('res', res)
      //  })
    }

  return (
    <Container className="resched-container">
         <h4 style={{paddingBottom:"20px"}}>Appointment Reschedule </h4>

        <Row>
           
            <Col>
           
                                <Form.Label>Appointment Date</Form.Label>
                                <FormControl 
                                //onChange={handleChange}
                                
                                  name="dates"
                                 //value={location.state.dates}
                                 onChange={(e)=>setDates(e.target.value)}
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
                                  // placeholder="Appointment Time"
                                  onChange={(e)=>setTime(e.target.value)}
                                 // onChange={handleChange}
                                  name="time"
                              // value={location.state.time}
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
                    
                               

             <Row style={{
                 marginTop:"20px"
             }} >
                 <Col
             style={{
                 textAlign:"end",

             }}>     <Button  onClick={() => 
              history.push("/Listschedule")} variant="secondary">Cancel</Button>
             </Col>
                 <Col>    <Link to="/Listschedule">
                   <Button onClick={() => updateData(data._id) }  variant="success">Update</Button> </Link>
                 </Col>
                       </Row>
                                
                               
                           

            </Col>
        </Row>
    
    </Container>
  );
};
export default Reschedule;