import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import { Container, Row, Col, FormControl, Form, Pagination } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaFilter } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md'
import { Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'
import { useHistory } from 'react-router-dom';
import icepack from './assets/12-ice pack.png';
import leg from './assets/leg.png';
import acu from './assets/4-cct.png'


const ListTest = (props) => {
  const history = useHistory();
  return (

    <Container className="main-cont" style={{ width: '100%' }}
      responsive>

      <h2 className="list-heading" style={{ marginTop: '10px' }}>TEST LIST</h2>
      <Form className="adddoc-butn">
        <Button onClick={() => history.push('/AddTest')}><MdAdd size="20px" />ADD TEST</Button>
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
                <th>Patient ID</th>
                <th>Consulting Doctor</th>
                <th>Pain Area</th>
                <th>Position</th>
                <th>Treatment Name</th>
                <th>Treatment Image</th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>000123</td>
                <td>Doe</td>
                <td>Arm</td>
                <td>Left</td>
                <td>Ice pack</td>
                <td> <img src={icepack} height="70px" /></td>
                <td><a href=""><FiEdit color="black" size="25px" /></a> <a href=""><RiDeleteBin6Line color="black" size="25px" /></a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>000222</td>
                <td>Moe</td>
                <td>Leg</td>
                <td>Right</td>
                <td>messaging</td>
                <td><img src={leg} height="70px" /></td>
                <td><a href=""><FiEdit color="black" size="25px" /></a> <a href=""><RiDeleteBin6Line color="black" size="25px" /></a></td>
              </tr>
              <tr>
                <td> 3</td>
                <td>000345</td>
                <td>Dooley</td>
                <td>Waist</td>
                <td>Low back Pain</td>
                <td>Acupuncture</td>
                <td><img src={acu} height="70px" /></td>
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
export default ListTest;