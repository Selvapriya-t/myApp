import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FaUserMd } from 'react-icons/fa';
import { FaUserNurse } from 'react-icons/fa';
import { FaUserInjured } from 'react-icons/fa';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { GrUserSettings } from 'react-icons/gr';
import { GrSettingsOption } from 'react-icons/gr';
import { FaVial } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';
import { RiBankCardFill } from 'react-icons/ri';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { BiCalendarCheck } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaKey } from 'react-icons/fa';
import physioApp_logo from '../Images/hospital.png';
import { FaUserShield } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import './Nav.css';
import './menubar.css';
// import './../Navbar.css'
import { Nav, Dropdown,Col } from 'react-bootstrap';
import { Button, Form, Modal } from 'react-bootstrap';
//import { useForm } from 'react-hook-form';
//import Navbar from 'react-bootstrap/Navbar';
// Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './dist/react-sidenav.css';

const Navbars = (props) => {
  const [show, setShow] = useState(false);
  const [Shows,setShows]=useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloses = () => setShow(false);
  const handleShows = () => setShows(true);

  return (
    <Nav>
      <Nav className="navbar">
        <Nav.Item>
          <img
            className="general_logo_login_page"
            src={physioApp_logo}
            alt="physio logo"
          ></img>
        </Nav.Item>
        <Nav.Item>
          <h2 className="physio-text">
            <link
              href="https://fonts.googleapis.com/css?family=Rye"
              rel="stylesheet"
            />
            HELLO PHYSIO
          </h2>
        </Nav.Item>
        <Nav className="icons-nav" hidden-sm-down p-0 d-flex responsive>
          <Nav.Item>
            <Nav.Link to="/home">
              <FaHome size="30px" color="rgb(30, 30, 78)" />
              <br />
              home
            </Nav.Link>
          </Nav.Item>
            
          <Dropdown className="drop-css">
            <Dropdown.Toggle
              style={{ background: 'none', color: 'rgb(30, 30, 78)' }}
              className="drop-toggle"
            >
              <FaUserMd size="25px" color="rgb(30, 30, 78)" />
            </Dropdown.Toggle>
            <br />
            Doctor
            <Dropdown.Menu style={{ marginTop: '25px' }}>
            <Dropdown.Item>
            <Link to="/AddDoc">   <AiOutlineUserAdd size="25px" /> Add Doctor  </Link>
              </Dropdown.Item>
              <Dropdown.Item>
              <Link to="/ListDoc"> <AiOutlineUnorderedList size="25px" /> Doctor List </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
         

          <Dropdown className="drop-css">
            <Dropdown.Toggle
              style={{ background: 'none', color: 'rgb(30, 30, 78)' }}
              className="drop-toggle"
            >
              <FaUserNurse size="25px" color="rgb(30, 30, 78)" />
            </Dropdown.Toggle>
            <br />
            Staff
            <Dropdown.Menu style={{ marginTop: '25px' }}>
              <Dropdown.Item>
             <Link to="/AddStaff" >  <AiOutlineUserAdd size="25px" /> Add Staff</Link>
              </Dropdown.Item>
              <Dropdown.Item >
              <Link to="/ListStaff"> <AiOutlineUnorderedList size="25px" /> Staff List </Link> 
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="drop-css">
            <Dropdown.Toggle
              style={{ background: 'none', color: 'rgb(30, 30, 78)' }}
              className="drop-toggle"
            >
              <FaUserInjured size="25px" color="rgb(30, 30, 78)" />
            </Dropdown.Toggle>
            <br />
            Patient
            <Dropdown.Menu style={{ marginTop: '25px' }}>
              <Dropdown.Item>
              <Link to="/Patient">   <AiOutlineUserAdd size="25px" /> Add Patient</Link>
              </Dropdown.Item>
              <Dropdown.Item>
              <Link to="/ListPatient">   <AiOutlineUnorderedList size="25px" /> Patient List</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        

          <Dropdown className="drop-css">
            <Dropdown.Toggle
              style={{ background: 'none', color: 'rgb(30, 30, 78)' }}
              className="drop-toggle"
            >
              <FaVial size="25px" color="rgb(30, 30, 78)" />
            </Dropdown.Toggle>
            <br />
            Treatment
            <Dropdown.Menu style={{ marginTop: '25px' }}>
              <Dropdown.Item>
              <Link to="/AddTest"> <AiOutlineUserAdd size="25px" /> Add Treatment</Link>
              </Dropdown.Item>
              <Dropdown.Item >
              <Link to="/ListTest"> <AiOutlineUnorderedList size="25px" /> Treatment List</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="drop-css">
            <Dropdown.Toggle
              style={{ background: 'none', color: 'rgb(30, 30, 78)' }}
              className="drop-toggle"
            >
              <BiCalendarCheck size="25px" color="rgb(30, 30, 78)" />
            </Dropdown.Toggle>
            <br />
            Appointment
            <Dropdown.Menu style={{ marginTop: '25px' }}>
              <Dropdown.Item>
              <Link to="/Schedule"> <AiOutlineUserAdd size="25px" /> Add Appointment</Link>
              </Dropdown.Item>
              <Dropdown.Item >
              <Link to="/Listschedule"> <AiOutlineUnorderedList size="25px" /> AAppointment List</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="drop-css">
            <Dropdown.Toggle
              style={{ background: 'none', color: 'rgb(30, 30, 78)' }}
              className="drop-toggle"
            >
              <RiBankCardFill size="25px" color="rgb(30, 30, 78)" />
            </Dropdown.Toggle>
            <br />
            Invoice
            <Dropdown.Menu style={{ marginTop: '25px' }}>
              <Dropdown.Item>
              <Link to="/BillingPage">    <FaHandHoldingUsd size="25px" /> Add Invoice</Link>
              </Dropdown.Item>
              <Dropdown.Item>
              <Link to="/InvoiceList">  <AiOutlineUnorderedList size="25px" /> Invoice List</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

        {/* right icon */}
        <Nav className="right-icons">
          <Dropdown className="drop-css">
            <Dropdown.Toggle
              style={{ background: 'none', color: 'rgb(30, 30, 78)' }}
              className="drop-toggle"
            >
              <MdSettings size="25px" color="rgb(30, 30, 78)" />
            </Dropdown.Toggle>
            <br />
            <Dropdown.Menu style={{ marginTop: '20px' }}>
              <Dropdown.Item>
              <Link to="/generalsetting">  <GrSettingsOption size="20px" /> General Setting</Link>
              </Dropdown.Item>
              <Dropdown.Item>
              <Link to="/usersetting"> <GrUserSettings size="20px" /> User Setting </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="drop-css">
            <Dropdown.Toggle
              style={{ background: 'none', color: 'rgb(30, 30, 78)' }}
              className="drop-toggle"
            >
              <FaUserShield size="25px" color="rgb(30, 30, 78)" />
            </Dropdown.Toggle>
            <br />
            <Dropdown.Menu style={{ marginTop: '20px' }}>
              <Dropdown.Item>
              <Link to="/usersetting">    <CgProfile size="25px" /> My profile</Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={handleShow}>
               <FaKey size="20px" /> Forget Password{' '}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <>
          <Modal
            {...props}
              className="modal-box"
              show={show}
              onHide={handleClose}
              backdrop="static"
              // keyboard={false}
              style={{ height: '70%' }}
              size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Password Recovery</Modal.Title>
              </Modal.Header>
              <div className="password-contnt">
                <Modal.Body>
                  <div>
                  <Form.Row className="form-row">
                  <Col lg={12} >
                  <label style={{ marginBottom: 'auto' }} className="forgot-email">Old Password</label>
                  <Form.Control
                    className="input-email"
                    type="text"
                    // required="true"
                    style={{marginLeft: '250px'}}
                  />
                  <br/>
                  </Col>
                  
                  <Col lg={12}>
                  <label style={{ marginBottom: 'auto' }} className="forgot-email">New Password</label>
                  <Form.Control
                    className="input-email"
                    type="text"
                    required="true"
                   style={{ marginLeft: '250px' }}
                  />
                  <br/>
                  </Col>
                  
                  <Col lg={12}>
                  <label style={{ marginBottom: 'auto' }} className="forgot-email">Retype New Password</label>
                  <Form.Control
                    className="input-email"
                    type="text"
                    required="true"
                    style={{ marginLeft: '250px' }}
                  />
                  <br/>
                  </Col>
                  </Form.Row>
                  </div>
                </Modal.Body>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <div>
              <Modal.Footer> 
                <div>                   
                <Button
                      className="passwrd-save"
                      variant="success"
                      onClick={() => {
                        console.info('Submited Successfully...');
                      }}
                    >
                      Submit
                    </Button>
                    </div>
                    </Modal.Footer> 
                    </div>
            </Modal>

          </>

          <Nav.Item>
            <Nav.Link href="#">
              <MdNotifications size="25px" color="rgb(30, 30, 78)" />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link onClick={handleShows}>
              <AiOutlinePoweroff size="25px" color="rgb(30, 30, 78)" />
            </Nav.Link>
          </Nav.Item>

          <>
            <Modal
              className="modalsignout-box"
              show={Shows}
              onHide={handleCloses}
              backdrop="static"
              keyboard={false}
              style={{ height: '40%' }}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Signout</Modal.Title>
              </Modal.Header>
              <div className="password-contnt">
                <Modal.Body>
                  <Form.Label className="forgot-email">
                    Do You want to signout{' '}
                  </Form.Label>
                  <br />
                  <a href="/">
                    <Button
                      style={{ marginLeft: '50px' }}
                      className="yes-button"
                      variant="success"
                      onClick={() => {
                        console.info('Submited Successfully...');
                      }}
                    >
                      Yes
                    </Button>
                  </a>
                  <a href="/">
                    <Button
                      style={{ marginLeft: '50px' }}
                      className="no-button"
                      variant="danger"
                      onClick={() => {
                        console.info('Submited Successfully...');
                      }}
                    >
                      No
                    </Button>
                  </a>
                </Modal.Body>
              </div>
              {/* <Modal.Footer></Modal.Footer> */}
            </Modal>
          </>
        </Nav>
      </Nav>
    </Nav>
  );
};

export default Navbars;
