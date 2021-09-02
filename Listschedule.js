import React, { useEffect, useState } from 'react';
import "./AppointmentList.css";
import ReactDOM,{ useHistory , Link} from "react-router-dom";
import { Badge, CloseButton } from "react-bootstrap";
import { FaEye, FaFlag } from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import {  Row,  Col,  Container,  FormControl,  Button,  Form,  Pagination,  InputGroup,  Modal,} from "react-bootstrap";
import CustomDatePicker from './CustomDatePicker ';
import axios from 'axios';
import { ModalTitle } from 'react-bootstrap';

const Appointmentlistpage = (props) => {
 const [data,setData]=useState([]);
 const [showse, setShowse] = useState(false);
  const handleClosese = () => setShowse(false);
  const handleShowse = () => setShowse(true);
  const history=useHistory();
  useEffect(() => {  
    // debugger;  
    axios.get('http://localhost:8080/appoint')
        .then(result => setData(result.data));  
    console.log(data);  
    debugger;  
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:8080/appoint").then(res => {
  //     if (res.ok) {
  //       return res.json()
  //     }
  //   })
  //     .then(jsonRes => setData(jsonRes));
  // })
const [search,setSearch]=useState([]);
const handleChange=(e)=>{
  setSearch(e.target.value)
} 
//const [filteredname,setFilteredname]=useState([]);
// useEffect(()=>{
//   setData(data.filter(dat=>{
//     return dat.input.toLowerCase().includes(search.toLowerCase())
//   }))
// },[search,data]
// )
  const handleClick=(_id) => {  
    // debugger;  
    axios.delete(`http://localhost:8080/appoint/${_id}`)
    const del = data.filter(data => _id !== data._id)
    //alert(JSON.stringify(_id),null,2)
    //props.resetForm()
    setData(del)
    
    };
  return (
    <Container className="top-container" >

      <Row>
        <Col>
          <h4 className="appointment-title">APPOINTMENT</h4>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={5} sm={4} xs={4}>
          <p>
            <b>12th March 2021</b>
          </p>
        </Col>
        <Col lg={6} md={7} sm={8} xs={8}>
          <Form inline style={{ float: "right" }}>
            <InputGroup className="mb-2">
              <FormControl id="inlineFormInputGroup" placeholder="Search"
              type="text"
              value={search}
              onChange={handleChange} />
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FcIcons.FcSearch />
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col lg={4} xs={12} md={4} sm={3}>
          <h6>
            <Badge variant="primary">5</Badge> Appointments today
          </h6>
        </Col>
        <Col lg={8} xs={12} md={8} sm={8}>
          <Row>
            <Col lg={6} md={6} sm={6} xs={6}>
              <CustomDatePicker className="date-picker" />
            </Col>
            <Col lg={2} md={2} sm={2} xs={2}>
              <Form.Check type="checkbox" label="Day"   onClick={() => 
                              history.push("/Week")}/>
            </Col>
            <Col lg={2} md={2} sm={2} xs={2}>
              <Form.Check type="checkbox" label="Week" />
            </Col>
            <Col lg={2} md={2} sm={2} xs={2}>
              <Form.Check type="checkbox" label="Month" />
            </Col>
          </Row>
        </Col>
      </Row>
    { data.map((dat)=>
      <div>
          <Row>
                <Col lg={2} md={3} xs={2}>
                  <h6>{dat.id}{data._id} </h6>
                  <h6>{dat.dates}</h6>
                  <h6>{dat.time}</h6>
                </Col>

                <Col className="container-schedule" lg={10} md={9} xs={10}>
                  <Row>
                    <Col lg={7} md={6} xs={5}>
                      {dat.firstName}
                      {dat.lastName}

                    </Col>
                    <Col lg={5} md={6} xs={7}>
                      <Row>
                        <Col xs={8}>
                        {/* <Link to={`/Reschedule/${data._id}`}> */}
                          <Button
                            variant="outline-primary" 
                            className="btn-reschedule" 
                            onClick={() => 
                              history.push(`/Reschedule/${dat._id}`, dat)} 
                            // component={Link}  to={`/Reshedule/${data._id}`}
                          >
                            Reschedule
                          </Button>
                          {/* </Link>                         */}
                         <FaFlag color="orange" />
                        </Col>

                        <Col xs={4}>
                          <FaEye   variant="outline-primary" 
                            className="btn-reschedule" 
                            onClick={() => 
                              history.push(`/Viewschedule/${dat._id}`, dat)} > </FaEye>{" "}
                            
                          
                           
                        
                 
                          {/* <Button variant="danger" onClick={() => {handleClick(data._id)}}>Delete      </Button> */}
                          <Button variant="danger"  onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) {handleClick(data._id)} } }>
              Delete
</Button>
                     </Col>
</Row></Col></Row></Col></Row></div>

                         
    )}
      </Container>
);
};
export default Appointmentlistpage;