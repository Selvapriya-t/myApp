import React, { useEffect, useState, useRef } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { AgGridColumn, AgGridRow, AgGridReact } from 'ag-grid-react';
import { Container, Button, Row, Col, FormControl, Form, Table, Modal } from "react-bootstrap";
import "./BillingPage.css";
import Payment from "./Payment";
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from 'react-icons/ri';
import  {ImEye} from 'react-icons/im';
import {FaEye} from "react-icons/fa";
import { FaFilter } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import Logo from './assests/hospital.png';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import * as MdIcons from "react-icons/md";
import MaterialTable from 'material-table';
import SearchIcon from '@material-ui/icons/Search';
//import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { ModalHeader } from "react-bootstrap";
import { ModalTitle } from "react-bootstrap";

const BillingPage = () => {
  //const [showse, setShowse] = useState(false);
  const [showse, setShowse] = useState([]);
  const handleClosese = () => setShowse(false);
  //const handleShowse = () => setShowse(true);
  const [modelInfo,setModelInfo]=useState([]);
  const rowEvents={
      onClick:(e,row)=>{
        console.log(row);
        setModelInfo(row)
        toggleTrueFalse()
      }
    }
    const toggleTrueFalse=()=>{
      setShowse(handleShowse);
    }
  const ModalContent=()=>{
   
  }

  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
   // serialnumber:'',
    patientId: '',
    invoiceDate: '',
    dueDate: '',
    description: '',
    no_of_days: '',
    amount: '',
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  //const [description, setdescription]=useState("knee");
  //const [selectedFile, setselectedFile]=useState[0];

  const handleClick = (e) => {
    e.preventDefault();
    debugger;
    const registered = {
      //serialnumber:input.serialnumber,
      patientId: input.patientId,
      invoiceDate: input.invoiceDate,
      dueDate: input.dueDate,
      description:input.description,
      //description: description,
      no_of_days: input.no_of_days,
      amount: input.amount,
    };

    axios.post('http://localhost:8080/bill', registered);
  }
const TAX_RATE = 0.07;
const amount = 3000;
const invoiceTaxes = TAX_RATE * amount;
const invoiceTotal = invoiceTaxes + amount;

  const [patdata, setPatdata] = useState([]);
  useEffect(() => {  
    // debugger;  
    axios.get('http://localhost:8080/patients')
        .then(results => setPatdata(results));  
    console.log(patdata);  
    debugger;  
  }, []);  
  //const total=patdata.map(({patientid }) => patdata.patientid*0.07);
  const [data, setData] = useState([]);
  useEffect(() => {  
    // debugger;  
    axios.get('http://localhost:8080/bill')
        .then(results => setData(results.data));  
    console.log(data);  
    console.log(data.shift(data));
    
    debugger;  
  }, []);  
   
 //const total=data.map(({amount }) => data.amount*0.07);
 const handleUpdate = () => {
  //e.preventDefault();
          axios.patch(`http://localhost:8080/bill/`)
      .then(result => setData(result.data));  
  console.log(data);  
  debugger;  
}

// const handleDelete=(data)=>{
//  //delete(data){
//    const newState = this.state.data.slice();
//      if (newState.indexOf(data) > -1) {
//      newState.splice(newState.indexOf(data), 1);
//      this.setStateD{data: newState})
//    }
//   }
const handleShowse = (_id) => {
      let url = `http://localhost:8080/bill/${_id}`
      axios.get(url).then(res => {
        console.log(_id);
        debugger;  
     setShowse(true);
     //setShowse({handleShowse:_id});
     
 
      })
    }
   
const updateData=(data)=>{
  axios.patch(`http://localhost:8080/bill/${data}`)
  .then(res=>{
  //   const updateInput = data.map(data =>data._id === newData._id)?{...data,...newData}:data;
    const recordIndex=data.findIndex(dat=>dat._id==data._id);
    data[recordIndex]={...data};
    setData(recordIndex)
    console.log('res', res)
   })
}

const removeData = (_id) => {
  let url = `http://localhost:8080/bill/${_id}`

  axios.delete(url).then(res => {
      const del = data.filter(dat => _id !== dat._id)
      setData(del)
      console.log('res', res)
  })
}


  // con
  return (
    <Container className="total-container" >
      <Row style={{ marginLeft: '0px' }}>
        
        <Col lg={4} md={4} sm={12} xs={12}>
          <h4 className="cont-head">BILLING</h4>
          <Form className="box-doctor" onClick={handleClick}>
            <Form.Row>
         
    
              <label className="input-label">patientId</label>
              <Form.Control
                onChange={handleChange}
                name="patientId"
                value={input.patientId}
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
             
              <label className="input-label">invoiceDate</label>
              <Form.Control
                onChange={handleChange}
                name="invoiceDate"
                value={input.invoiceDate}
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
              <label className="input-label">Due Date</label>
              <Form.Control
                onChange={handleChange}
                name="dueDate"
                value={input.dueDate}
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
 
 <label className="input-label">Description</label><br></br>
 <Form.Control
                onChange={handleChange}
                name="description"
                value={input.description}
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
          {/* <select className="custom-select" value={description}
          onChange={(e)=>{const selecteddesc=e.target.value;
          setdescription(selecteddesc);}} >
            <option value="knee">Knee</option>
            <option value="hand">Hand</option>
            <option value="leg">Leg</option>
            <option value="elbow">elbow</option>
          </select> */}
          {/* {description} */}
        
       

              <label className="input-label">No of Days</label>
              <Form.Control
                onChange={handleChange}
                name="no_of_days"
                value={input.no_of_days}
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


              <label className="input-label">Amount</label>
              <Form.Control
                onChange={handleChange}
                name="amount"
                value={input.amount}
                style={{
                  marginTop: '0px',
                  borderRadius: '0px',
                  borderBottom: '1px solid #ced4da',
                  borderTop: '0px',
                  borderLeft: '0px',
                  borderRight: '0px',
                }}
              />
              <br />
              <Link to="">
                {' '}
                <Button
                  className="add-btn"
                  variant="success"
                  onClick={handleClick}
                  //onClick={() => setShow()}
                >
                  <FaIcons.FaSave /> Add
                </Button>
              </Link>

              {/* <Payment /> */}
              <br />
              {/* </Col> */}
              <Col
                lg={8}
                md={8}
                sm={12}
                xs={12}
                style={{
                  borderRadius: "10px",
                  boxShadow: "3px 3px 3px 3px rgb(170, 167, 167)",
                }}
              >
              </Col>
            </Form.Row>
          </Form>
        </Col>
        
        <Col lg={8} md={8} sm={12} xs={12}>
          <h2 className="list-heading">Receipt</h2>

          <Row className="row-receipt">
            
            <Col style={{ marginLeft: "50px" }}>
              <img
                style={{ width: "50px", textAlign: "center", marginLeft: "200px" }}
                src={Logo}
              />{" "}
              <span>
                <b> HELLO PHYSIO </b>
              </span>
              <table >
              <div style={{ maxWidth: "100%" }}>
              
     <Table className="main-cont"  aria-label="spanning table" >
        <TableHead>
        
         
            <TableRow >
            <TableCell align="left" colSpan={5}>
              Patient Id:{input.patientId}<br></br>
              Patient Name:<br></br>
              Patient Age:<br></br>
              Patient Gender:
            </TableCell>
           
            <TableCell align="right">
              Invoice Number:physio2021{input.patientId}{data._id}<br></br>
            Invoice Date:{input.invoiceDate}<br></br>
            Due Date:{input.dueDate}<br></br>
            {/* Payment Method: */}
            </TableCell>
            </TableRow>
          
         
          <TableRow>
            <TableCell>S.no</TableCell>
            {/* <TableCell align="right">Billing Id</TableCell> */}
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">No Of Days</TableCell>
            <TableCell align="right">Amount</TableCell>
            {/* <TableCell align="right">Action</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody >
          
          {/* {data.map((data,index) => (
            <TableRow key={index}>
               <TableCell 
                align="right">{index}</TableCell>
               <TableCell align="right">{data._id}</TableCell>

              <TableCell align="right">{data.description}</TableCell>
              <TableCell align="right">{data.no_of_days}</TableCell>
              <TableCell align="right">{data.amount}</TableCell>
              <TableCell align="right"><FaIcons.FaEdit color="blue" onClick={() => updateData(data._id)}
             // onClick={handleUpdate}
              />
              <AiIcons.AiFillDelete color="red" onClick={() => removeData(data._id)}/>
             
   
       
         
      
  
              < Link to={"/History/"+data._id}> < ImEye  color="blue"/></Link>   

              
              <FaEye  
             // onClick={handleShowse}
             onClick={() => handleShowse(data._id)} 
              >
              </FaEye>{" "}
              <Modal
                 
                 show={showse}
                 //show={showse===data._id}
                // isOpen={this.state.openedModal === item.id}
                 onHide={handleClosese}
               >      
               <Modal.Header  closeButton>
                 <Modal.Title> Appointment Details </Modal.Title></Modal.Header>  
                 <Modal.Body> 
                <Form className="box-doctor"                                 
                    //  onClick={() => removeData(data._id)}  
                    >                       
                   <Form.Row>
                     <li>Appointment Number:{data._id}{index}</li>
                     {/* <li>RegisterNo:{modelInfo._id}</li> */}
                   {/* <li>Patient Name:{patdata.firstName} {patdata.lastName}</li> */}
                   {/* <li>Billing Description:{data.description}</li>
                   <li>No of Days:{data.no_of_days}</li>
                     <li>Amount:{data.amount}</li>               
                      
                      
                    </Form.Row>  </Form>
                     </Modal.Body>   */}
                 {/* <Row>
                 <Col> */}
{/* <br />       
               </Modal>         
               </TableCell>
             
            </TableRow>
          ))} */} 

{data.map((data,index) => (
            <TableRow key={index}>
               <TableCell align="right">{index+1}</TableCell>
               {/* <TableCell align="right">{data._id}</TableCell> */}
              <TableCell align="right">{input.description}</TableCell>
              <TableCell align="right">{input.no_of_days}</TableCell>
              <TableCell align="right">{input.amount}</TableCell>
              <TableCell align="right">{data.age}</TableCell>
              {/* <TableCell align="right">{input.action} */}
              {/* <FaIcons.FaEdit color="blue"/> */}
              {/* <AiIcons.AiFillDelete color="red" /></TableCell> */}
              {/* <AiIcons.AiFillDelete color="red" onClick={() => removeData(data._id)}/> */}
              {/* </TableCell> */}
            </TableRow>))}

     <TableRow>
            <TableCell rowSpan={4} />
            <TableCell colSpan={2}>Total Amount: </TableCell>
            <TableCell align="right">{input.amount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>CGST:</TableCell>
            <TableCell align="right">3.5%</TableCell>
            {/* <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>SGST</TableCell>
            <TableCell align="right">3.5%</TableCell>
          </TableRow>
          <TableRow>
          <TableCell colSpan={2}>Grand Amount</TableCell>
          <TableCell align="right">{(invoiceTotal)}</TableCell>
          {/* <TableCell align="right">
            {input.amount}
          
          
          </TableCell> */}
          </TableRow>
          </TableBody>

          </Table>
          {/* {showse?<ModalContent/>:null} */}
          </div>

              
</table>


              {/* <Row className="btn-print">
                <Col>
                  <Button variant="primary"> Print</Button> */}
                  <Link to="/Receipt">
                {' '}
                <Button
                  className="btn-print"
                  variant="success"
                  //onClick={handleClick}
                  onClick={() => setShow(!show)}
                >
                  <FaIcons.FaSave /> Invoice
                </Button>
              </Link>
                {/* </Col>
              </Row> */}
            </Col>
          </Row>
        </Col>
      </Row>     
    </Container>
  );
            
};

export default BillingPage;