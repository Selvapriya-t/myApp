import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import {
  Container,
  Row,
  Col,
  FormControl,
  Form,
  Pagination,
} from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdAdd } from 'react-icons/md';
import { ImEye } from 'react-icons/im';
import { Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
// import { useHistory } from 'react-router-dom';
import CustomDatePicker from '../Appointment/CustomDatePicker ';
import './InvoiceList.css';
//import GoogleFontLoader from 'react-google-font-loader';
const InvoiceList = (props) => {
  // const history = useHistory();
  return (
    <Container className="main-contnt" responsive>
      <Row>
        <Col lg={9}>
          <h2 className="list-heading">Invoice List</h2>
        </Col>
        <Col lg={3}>
          <Form className="btn-addinvoice">
            <a href="/BillingPage">
              <Button>
                <MdAdd size="20px" /> ADD INVOICE
              </Button>
            </a>
          </Form>
        </Col>
      </Row>
      <Form className="form-date">
        <CustomDatePicker />
      </Form>
      <Row>
        <Col>
          <Form inline className="forms-text">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button>
              <BsSearch size="20px" />
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead className="thead-css">
              <tr className="table table-curved">
                <th>S.No</th>
                <th>Invoice No</th>
                <th>Invoice Date</th>
                <th>Due Date</th>
                <th>Patient Name</th>
                <th>Total Amount</th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>0001</td>
                <td>03-2-2021</td>
                <td>05-03-2021</td>
                <td>John</td>
                <td>50,000</td>
                <td>
                  <a href="/receipt">
                    <ImEye color="green" size="25px" />
                  </a>
                  <a href="">
                    <FiEdit
                      color="blue"
                      size="25px"
                      style={{ marginLeft: '15px' }}
                    />
                  </a>
                  <a href="">
                    <RiDeleteBin6Line
                      color="Red"
                      size="25px"
                      style={{ marginLeft: '10px' }}
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>0002</td>
                <td>01-01-2021</td>
                <td>05-02-2021</td>
                <td>Mary</td>
                <td>90,000</td>
                <td>
                  <a href="/receipt">
                    <ImEye color="green" size="25px" />
                  </a>
                  <a href="">
                    <FiEdit
                      color="blue"
                      size="25px"
                      style={{ marginLeft: '15px' }}
                    />
                  </a>
                  <a href="">
                    <RiDeleteBin6Line
                      color="Red"
                      size="25px"
                      style={{ marginLeft: '10px' }}
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td> 3</td>
                <td>0003</td>
                <td>03-03-2021</td>
                <td>05-03-2021</td>
                <td>david</td>
                <td>50,000</td>
                <td>
                  <a href="/receipt">
                    <ImEye color="green" size="25px" />
                  </a>
                  <a href="">
                    <FiEdit
                      color="blue"
                      size="25px"
                      style={{ marginLeft: '15px' }}
                    />
                  </a>
                  <a href="">
                    <RiDeleteBin6Line
                      color="Red"
                      size="25px"
                      style={{ marginLeft: '10px' }}
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row style={{ textAlign: 'right' }}>
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
export default InvoiceList;
