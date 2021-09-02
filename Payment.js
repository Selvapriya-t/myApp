import React, { useState, useRef } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  FormControl,
  Form,
  Accordion,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BillingPage.css';
//import * as SiIcons from "react-icons/si";
import * as FaRegIcons from "react-icons/fa";

const Payment = (props) => {
  //const [show, setShow] = useState(false);
  //const target = useRef(null);
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  return (
    <Container>
      <Row>
        <Col>
          <h5>Payment Option</h5>

          {/* <Button variant="primary">
            <SiIcons.SiCashapp /> Cash
          </Button>{" "} */}

          <Accordion>
            <Accordion.Toggle as={Button} eventKey="0">
              <FaRegIcons.FaRegCreditCard /> CARD
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body
                style={{ border: '1px solid black', borderRadius: '10px' }}
              >
                <Cards
                  number={number}
                  name={name}
                  expiry={expiry}
                  cvc={cvc}
                  focused={focus}
                />
                <br />
                <Form>
                  <FormControl
                    className="card-inputs"
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                  <FormControl
                    className="card-inputs"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                  <FormControl
                    className="card-inputs"
                    type="text"
                    name="expiry"
                    placeholder="MM/YY Expiry"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                  <FormControl
                    className="card-inputs"
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                  <br />
                  <Button style={{ marginLeft: '120px' }} variant="primary">
                    {' '}
                    Pay
                  </Button>{' '}
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
