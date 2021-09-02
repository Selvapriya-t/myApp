import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Button, FormControl, Form, Pagination } from 'react-bootstrap';
import './ListPatient.css';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { ImEye } from 'react-icons/im';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaFilter } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs'
import { useHistory } from 'react-router-dom';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import MaterialTable from "material-table";
import VisibilityIcon from '@material-ui/icons/Visibility';
const ListPatient = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([]);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const history = useHistory();
const [patient,setPatient]=useState([]);
  const columns = [
    {
      title: "Id", field:"_id",
      hidden: false, initialEditValue: "initial edit value",
    },
    { title: "FirstName", field: "firstName" },
    { title: "LastName", field: "lastName" },
    { title: "Patientid", field: "patientid"},
    { title: "Num", field: "phone"},
  ]

useEffect(() => {
  axios.get('/patients')

    .then(result => setData(result.data));
  console.log(data);
  debugger;
}, []);

  return (
    <Container className="main-cont" style={{ width: '100%' }} responsive>
      <h2 className="list-heading">PATIENT LIST</h2>
      <Form className="adddoc-butn">
        <Link to="/Patient"><Button><MdAdd size="20px" /> ADD PATIENT</Button></Link>
      </Form>
      <br />
      <Row>
        <Col>
          <div style={{ maxWidth: "100%" }}>

            <MaterialTable title="Patient List"
              title="Patient List"
              columns={columns}
              data={data}

options={{actionsColumnIndex:-1,addRowPosition:"first"}}

            
editable={{
            
  onRowAdd: newData =>
   new Promise((resolve, reject) => {
       setTimeout(() => {
       
axios.post('http://localhost:8080/patients',newData);
setData([...data, newData]);
 
           resolve();
       }, 1000);
   }),
   onRowUpdate: (newData, oldData) =>
new Promise((resolve, reject) => {
   setTimeout(() => {
       const dataUpdate = [...data];
       const index = oldData.tableData.id;
      dataUpdate[index] = newData;
     //   fetch('/bill'+"/"+oldData.patientId,{
     //     method: "PUT",
     //   headers: {
     //       "Content-Type": "application/json",
     //       Accept: "application/json",
     //   },
     //   body: JSON.stringify(newData),

     // }).then (res=>res.json())
     // .then(res=>getPatientList())
      axios.patch('http://localhost:8080/patients'+"/"+ oldData._id, newData);
      setData([...dataUpdate]);
       resolve();
   }, 1000);
}),
   onRowDelete: oldData => 
     new Promise((resolve, reject) => {
       setTimeout(() => {
         const dataDelete = [...data];
         const index = oldData.tableData.id;
         dataDelete.splice(index, 1);
        
         axios.delete('http://localhost:8080/patients'+"/"+oldData._id,oldData);
         setData([...dataDelete]);
         resolve();
       }, 1000);
     })
 }}
              cellEditable={{
                onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
                  return new Promise((resolve, reject) => {
                    const clonedData = [...data]
                    clonedData[rowData.tableData.id][columnDef.field] = newValue
                  
                    axios.patch('http://localhost:8080/patients'+"/"+ rowData._id, newValue);
                    setData(newValue)
                    setTimeout(resolve, 1000);
                  });
                }
              }}
            //   <a href="/receipt">
            //   <ImEye color="green" size="25px" />
            // </a>
              // actions={[
              //   rowData => ({
              //   //  icon: () => <VisibilityIcon onClick={() => history.push(`/History/${rowData._id}`)} />,
              //   icon: () => <VisibilityIcon onClick={() => history.push(`/History/)} />, 
              //   tooltip: 'PatientHistory', 

              //   })
              // ]}
              actions={[
                rowData => ({
                  icon: () => <VisibilityIcon  onClick={() => 
                    history.push("/History", rowData)} />,
                  tooltip: 'History',
                  //onClick={(e, rowData) => console.log(rowData)} />,
                

                })
              ]}
            />
           {/* < Link to={"/History"}>
              <IconButton>
               
                 <VisibilityIcon color="primary">
               </VisibilityIcon>
              </IconButton></Link> */}
           
          </div>

          <br></br>

        </Col>
      </Row>
    </Container>
  );
        
};
export default ListPatient;
