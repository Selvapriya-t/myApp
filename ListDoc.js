import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import Table from 'react-bootstrap/Table'
import { Container, Row, Col, FormControl, Form, Pagination } from 'react-bootstrap';
import './ListDoc.css';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaFilter } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md'
import { Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'
import { useHistory } from 'react-router-dom';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';


const ListDoc = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    axios.get('/doctor')
    .then(result => setRowData(result.data))
    .catch(error => console.log(error));
  },[]);

  // const history = useHistory();
  // const [List, setList] = useState([{
  //   firstname: '',
  //   lastname: '',
  //   email: '',
  //   contactnumber: '',
  //   designation: '',
  //   department: '',
  //   address:'',
  // }])
  // useEffect(() => {
  //   fetch("http://localhost:8080/staff").then(res => {
  //     if(res.ok) {
  //       return res.json()
  // }
  //   }).then(jsonRes => setList(jsonRes));
  // })
  return (

    <Container className="main-cont" style={{ width: '100%' }} responsive>
      <h2 className="list-heading">DOCTOR LIST</h2>
      <Form className="adddoc-butn">
        <Link to ="/AddDoc"><Button ><MdAdd size="20px" /> ADD DOCTOR</Button></Link>
      </Form>
      <Button className="button-doc"> <FaFilter /> Filter</Button>
      <Form inline className="form-text">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button><BsSearch size="20px" /></Button>
      </Form>

      <Row>
        <Col>
        <div className="ag-theme-alpine" style={{ height: 400, width: 1085 }}>
            <AgGridReact
              rowData={rowData}>
              <AgGridColumn headerName='First Name'
                field="firstname"
                sortable={true}
                filter={true}
                floatingFilter={true}
                editable={true}
                flex = {2}
                width='100%'>
              </AgGridColumn>
              <AgGridColumn headerName='Last Name'
                field="lastname"
                sortable={true}
                filter={true}
                floatingFilter={true}
                editable={true}
                flex = {2}
                width='155%'>
              </AgGridColumn>
              <AgGridColumn
                headerName='Email'
                field="email"
                sortable={true}
                filter={true}
                floatingFilter={true}
                editable={true}
                flex = {2}
                width='200%'>
              </AgGridColumn>
              <AgGridColumn
                headerName='Contact Number'
                field="contactnumber"
                sortable={true}
                filter={true}
                editable={true}
                floatingFilter={true}
                flex = {2}
                width='150%'>
              </AgGridColumn>
              <AgGridColumn
                headerName='Consultancy Fee'
                field="consultancyfee"
                sortable={true}
                filter={true}
                editable={true}
                floatingFilter={true}flex = {2}
                width='150%'>
                </AgGridColumn>
              <AgGridColumn
                headerName='Email'
                field="email"
                sortable={true}
                filter={true}
                editable={true}
                floatingFilter={true}
                flex = {2}
                width='155%'>
              </AgGridColumn>
              <AgGridColumn
                headerName='Specialization'
                field="specialization"
                sortable={true}
                filter={true}
                editable={true}
                floatingFilter={true}
                flex = {2}
                width='155%'>
              </AgGridColumn>
              <AgGridColumn
                headerName='Address'
                field="address"
                sortable={true}
                filter={true}
                editable={true}
                floatingFilter={true}
                flex = {2}
                width='175%'>
                </AgGridColumn>
            </AgGridReact>
          </div>
          <br></br>

          {/* <Table striped bordered hover responsive>
            {List && List.map(list =>
            <div>
            <thead className="thead-css">
              <tr className="table table-curved" >
                <th>S.No</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Address</th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{list.firstname}</td>
                <td>{list.lastname}</td>
                <td>john@example.com</td>
                <td>9753578367</td>
                <td>Staff Nurse</td>
                <td>Physiotherapy</td>
                <td></td>
                <td><a href=""><FiEdit color="black" size="25px" /></a> <a href=""><RiDeleteBin6Line color="black" size="25px" /></a></td>
              </tr> */}
              {/* <tr>
                <td>2</td>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
                <td>8643757836</td>
                <td>Patient care technicians</td>
                <td>Physiotherapy</td>
                <td></td>
                <td><a href=""><FiEdit color="black" size="25px" /></a> <a href=""><RiDeleteBin6Line color="black" size="25px" /></a></td>
              </tr>
              <tr>
                <td> 3</td>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>9643078367</td>
                <td>Licensed practical nurses</td>
                <td>Physiotherapy</td>
                <td></td>
                <td><a href=""><FiEdit color="black" size="25px" /></a> <a href=""><RiDeleteBin6Line color="black" size="25px" /></a></td>

              </tr> */}
            {/* </tbody>
            </div>
                            )
                          }
          </Table> */}
        </Col>
      </Row>
      <Row style={{ textAlign: "right" }}>
        <Col>
          <Pagination className="pages">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};
export default ListDoc;