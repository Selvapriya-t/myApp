import React, { useState, useRef,useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Testadd.css";
//import Treatment from './Treatment'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  Overlay,
  Tooltip,Image, Table
} from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import axios from "axios";
import { useLocation,useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import ImageShow from "./ImageShow";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
//import { TableHead } from "@material-ui/core";
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

const AddTreatment = () => {
//   const {patientid,firstName,lastName,referraldoc}=formData;
//   const { diagnosis,treatmentplan ,treatimage,precaution } = formData;  
//   const { previous ,next} = navigation;
const history = useHistory();
const location = useLocation();
const rowData = location.state;
useEffect(() => {  
    // debugger;  
    axios.get("http://localhost:8080/patients/") 
    debugger;  
  }, []);
const [show, setShow] = useState(false);
const [input, setInput] = useState({
 // serialnumber:'',
 //patientId: '',
  diagnosis: '',
 treatmentplan: '',
 treatimage: '',
  precaution: '',
  
});
const [patientid,setPatientid]=useState();
const [diagnosis, setdiagnosis]=useState("Exercise");
const [treatmentplan, setTreatmentPlan]=useState("Exercise");
//const [treatimage, setTreatimage]=useState("");
const [precaution, setPrecaution]=useState("Exercise");
//const [selectedFile, setselectedFile]=useState[0];
const handleImage = (e) => {
    setInput({...input, treatimage: e.target.files[0]});
}

const handleClick = (e) => {
  e.preventDefault();
  debugger;
//   const formData=new FormData();
//   formData.append('treatimage',input.treatimage);
  const registered = {
    patientid:patientid,
    diagnosis: diagnosis,
    treatmentplan:treatmentplan,
    treatimage: input.treatimage,
   // description:input.description,
    precaution: precaution,
    
  };

  axios.post('http://localhost:8080/test', registered);

}

     const [patdata, setPatdata] = useState([]);
     const [data, setdata] = useState([]);
  useEffect(() => {  
    // debugger;  
    axios.get('http://localhost:8080/test/img')
        .then(results => setPatdata(results));  
    console.log(patdata);  
    debugger;  
  }, []);  
  useEffect(() => {  
    // debugger;  
    axios.get('http://localhost:8080/test/')
        .then(results => setdata(results));  
    console.log(data);  
    debugger;  
  }, []);  
  return (
    <Container className="total-container">
      <Row style={{ marginLeft: "0px" }}>
        <Col lg={8} md={6} sm={6} xs={8}>
          <h4 className="cont-head">ADD Treatment</h4>
        </Col>
      </Row>
      <Row className="top-row">
        <Col>
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Patientid</label>
            <Form.Label
           value={location.state.patientid}
           onClick={(e)=>{location.state.patientid=e.target.value;
            setPatientid(location.state.patientid);}}
              name="patientid"
              readOnly="True"
             
            />
          </Col></Form.Row>
          <b>Patient Id:{location.state.patientid} 
          </b>
        </Col>
        <Col>
          <b>Patient Name:{location.state.firstName} {location.state.lastName}</b>
        </Col>
        <Col>
          <b>Consulting Doctor:{location.state.referraldoc}</b>
        </Col>
      </Row>
      {/* <Col lg={4} md={6} sm={6} xs={4}>
        <Link to = "/ListTest"><Button>
              <FaIcons.FaListAlt /> Treatment List
            </Button></Link>
        </Col> */}

      <Form className="box-doctor"  >
      <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Patientid</label>
            <Form.Control
           value={location.state.patientid}
           onClick={(e)=>{location.state.patientid=e.target.value;
            setPatientid(location.state.patientid);}}
              name="patientid"
              readOnly="True"
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
          </Col></Form.Row>
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Diagnosis </label>
            <Form.Control
             value={diagnosis}
              onChange={(e)=>{const selecteddiagnosis=e.target.value;
                setdiagnosis(selecteddiagnosis);}} 
              name="diagnosis"
              as="select"
              className="modal-dropdown"
              style={{ width: "100%" }}
            >
              <option value="Cervical spondylitis ">Cervical spondylitis </option>
              <option value="Lumbar spondylitis">Lumbar spondylitis </option>
              <option value="Migrated disc lumbar spine">Migrated disc lumbar spine</option>
              <option value="Migrated disc cervical spine">Migrated disc cervical spine</option>
              <option value="Fracture">Fracture </option>
              <option value="Fracture dislocation">Fracture dislocation</option>
              <option value="Post opertive care for ">Post opertive care for </option>
              <option value="Periathritis">Periathritis </option>
              <option value="Osteoarthritis">Osteoarthritis </option>
              <option value="Migraine">Migraine </option>
              <option value="Cramps">Cramps </option>
              <option value="Others">Others</option>
            </Form.Control>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Treatment Plan</label>
            <Form.Control
              value={treatmentplan}
              onChange={(e)=>{const selectedtplan=e.target.value;
                setTreatmentPlan(selectedtplan);}} 
              name="treatmentplan"
              as="select"
              className="modal-dropdown"
              style={{ width: "100%" }}
            >
              <option value="Exercise">Exercise</option>
              <option value="Rom exercise">Rom exercise</option>
              <option value="knee strengthening shoulder strengthening">knee strengthening shoulder strengthening </option>
              <option value="Low back care  exercise">Low back care  exercise</option>
              <option value="Cervical exercise ">Cervical exercise </option>
              <option value="Ankle stretching">Ankle stretching</option>
              <option value="Strengthening exercise">Strengthening exercise </option>
              <option value="Others">Others</option>
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Treatment Image</label>
            <br />
            {/* <Treatment/> */}
            {/* <Link to="TreatmentImage"><Button variant="primary">
              <RiIcons.RiImageAddLine /> Add Image
            </Button></Link> */}
          {/* </Col>
          <Col lg={6} md={6} sm={12} xs={12}> */}
            {/* <br />
            <br /> */}
            <ImageShow/>
            {/* <div >
              <input type="file"
              // id="customFile"
               // multiple 
               onChange={handleImage}
               name="treatimage"/>
               
            </div> */}
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
         
            <label className="input-label">Treatment Image</label>
         
            <Image src='' alt="err"
                                    style={
                                        {
                                            width: '150px',
                                            height: '150px'
                                        }} />
          </Col>
        
            </Form.Row>
        <Form.Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <label className="input-label">Precaution</label>
            <Form.Control  
              value={precaution}
              onChange={(e)=>{const selectedprecaution=e.target.value;
                setPrecaution(selectedprecaution);}} 
              name="precaution"
              as="select"
              className="modal-dropdown"
              style={{ width: "100%" }}
            >
              <option value="Rest">Rest</option>
              <option value="Ice pack">Ice pack</option>
              <option value="Limb elevation">Limb elevation</option>
              <option value="Restricted walking">Restricted walking</option>
              <option value="Avoid over head activities">Avoid over head activities</option>
              <option value="Others">Others</option>
            </Form.Control>
          </Col>
        </Form.Row>
       
   
        <Row>
        <Col>
            <br />
          
            {/* <Button variant="warning" onClick={() => 
                    history.push("/Diagnosis", rowData)} > <RiIcons.RiArrowGoBackFill />Back
                 
                  </Button> */}
          </Col>
          <Col>
            <br />
            <Link to="/Print"><Button  onClick={handleClick}
              className="add-btn"
              variant="success" 
            >
              <FaIcons.FaPlus /> Save
            </Button></Link>

          </Col>
         
        </Row>
      </Form>
    </Container>
  );
};
export default AddTreatment;