import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import { Container, Row, Col, FormControl, Form, Pagination } from 'react-bootstrap';
import './ListStaff.css';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaFilter } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md'
import { Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'
import { useHistory } from 'react-router-dom';


const ListStaff = (props) => {
  const history = useHistory();
  return (

    <Container className="main-cont" style={{ width: '90%', height: '85%' }} responsive>
      <h2 className="list-heading">STAFF LIST</h2>
      <Form className="adddoc-butn">
        <Button onClick={() => history.push('/AddStaff')}><MdAdd size="20px" /> ADD STAFF</Button>
      </Form>
      <Button className="button-doc"> <FaFilter /> Filter</Button>
      <Form inline className="form-text">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button><BsSearch size="20px" /></Button>
      </Form>

      <Row>
        <Col>
          <Table striped bordered hover responsive>
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
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
                <td>9753578367</td>
                <td>Staff Nurse</td>
                <td>Physiotherapy</td>
                <td></td>
                <td><a href=""><FiEdit color="black" size="25px" /></a> <a href=""><RiDeleteBin6Line color="black" size="25px" /></a></td>
              </tr>
              <tr>
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

              </tr>
            </tbody>
          </Table>
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
export default ListStaff;