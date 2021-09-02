import React from 'react';
import { Button, Modal, Container, Row, Col, Image, } from 'react-bootstrap';
import { RiImageAddFill } from 'react-icons/ri';
import Active from './assets/active.png';
import Arm from './assets/arm.png';
import Cpr from './assets/cpr.png';
import Cct from './assets/4-cct.png';
import Ice from './assets/12-ice pack.png';
import Cervical from './assets/cervical.png';
import Exe from './assets/exe.png';
import Exercise from './assets/exercise.png';
import Ift from './assets/ift.png';
import Leg from './assets/leg.png';
import Plyo from './assets/plyometrics.png';
import Passive from './assets/passive.png';
import Sports from './assets/sports.png';
import Strength from './assets/strengthening.png';
import Tens from './assets/tens.png';
import Tissue from './assets/tissue release.png';
import Traction from './assets/Traction.png';
import Ultra from './assets/ultrasonic therapy.png';
import Wax from './assets/wax.png';
import './Treatment.css';



function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Image
          </Modal.Title>
            </Modal.Header>
          
            <Modal.Body>
                <Container className="treatment-container">
                    <Row style={{ marginLeft: "0px" }}>
                        <Col lg={8} md={6} sm={6} xs={8}>
                            <h4 className="cont-head">TREATMENT IMAGES</h4>
                        </Col>
                    </Row>
                    <br />
                    <Row>

                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="1" class="input-hidden" />
                            <label for="1">
                                <Image src={Active} rounded
                                    style={
                                        {
                                            width: '150px',
                                            height: '150px'
                                        }} />
                            </label>
                        </Col>
                        <Col>

                            <input
                                type="checkbox" name="emotion"
                                id="2" class="input-hidden" />
                            <label for="2">
                                <Image src={Arm} className="image-one"
                                    style={
                                        {
                                            width: '150px',
                                            height: '150px'
                                        }} />
                            </label>
                        </Col>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="3" class="input-hidden" />
                            <label for="3">
                                <Image src={Cpr}
                                    style={
                                        {
                                            width: '150px',
                                            height: '150px'
                                        }} />
                            </label>
                        </Col>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="4" class="input-hidden" />
                            <label for="4">
                                <Image src={Cct}
                                    style={
                                        {
                                            width: '150px',
                                            height: '150px'
                                        }} />
                            </label>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="5" class="input-hidden" />
                            <label for="5">
                                <Image src={Ice} style={
                                    {
                                        width: '150px',
                                        height: '150px'
                                    }} />
                            </label>
                        </Col>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="6" class="input-hidden" />
                            <label for="6">
                                <Image src={Cervical} style={
                                    {
                                        width: '150px',
                                        height: '150px'
                                    }} />
                            </label>
                        </Col>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="7" class="input-hidden" />
                            <label for="7">
                                <Image src={Exe} style={
                                    {
                                        width: '150px',
                                        height: '150px'
                                    }} />
                            </label>
                        </Col>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="8" class="input-hidden" />
                            <label for="8">
                                <Image src={Exercise} style={
                                    {
                                        width: '150px',
                                        height: '150px'
                                    }} />
                            </label>
                        </Col>

                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="9" class="input-hidden" />
                            <label for="9">
                                <Image src={Ift} rounded style={
                                    {
                                        width: '150px',
                                        height: '150px'
                                    }} />
                            </label>
                        </Col>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="10" class="input-hidden" />
                            <label for="10">
                                <Image src={Leg} style={
                                    {
                                        width: '150px',
                                        height: '150px'
                                    }} />
                            </label>
                        </Col>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="11" class="input-hidden" />
                            <label for="11">
                                <Image src={Plyo} style={
                                    {
                                        width: '150px',
                                        height: '150px'
                                    }} />
                            </label>
                        </Col>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="12" class="input-hidden" />
                            <label for="12">
                                <Image src={Passive} style={
                                    {
                                        width: '150px',
                                        height: '150px'
                                    }} />
                            </label>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="13" class="input-hidden" />
                            <label for="13">
                                <Image src={Sports} style={
                                    {
                                        width: '150px',
                                        height: '150px'
                                    }} />
                            </label>
                        </Col>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="14" class="input-hidden" />
                            <label for="14">
                                <Image src={Strength} style={
                                    {
                                        width: '150px',
                                        height: '150px'
                                    }} />
                            </label>
                        </Col>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="15" class="input-hidden" />
                            <label for="15">
                                <Image src={Tens} style={
                                    {
                                        width: '150px',
                                        height: '150px'
                                    }} />
                            </label>
                        </Col>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="16" class="input-hidden" />
                            <label for="16">
                                <Image src={Tissue} style={
                                    {
                                        width: '150px',
                                        height: '150px'
                                    }} />
                            </label>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="17" class="input-hidden" />
                            <label for="17">
                                <Image src={Traction}
                                    style={
                                        {
                                            width: '150px',
                                            height: '150px'
                                        }} />
                            </label>
                        </Col>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="18" class="input-hidden" />
                            <label for="18">
                                <Image src={Ultra}
                                    style={
                                        {
                                            width: '150px',
                                            height: '150px'
                                        }} />
                            </label>
                        </Col>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="19" class="input-hidden" />
                            <label for="19">
                                <Image src={Wax}
                                    style={
                                        {
                                            width: '150px',
                                            height: '150px'
                                        }} />
                            </label>
                        </Col>
                        <Col>
                            <input
                                type="checkbox" name="emotion"
                                id="20" class="input-hidden" />
                            <label for="20">
                                <Image src={Cct}
                                    style={
                                        {
                                            width: '150px',
                                            height: '150px'
                                        }} />
                            </label>
                        </Col>

                    </Row>
                </Container>


            </Modal.Body>
            <Modal.Footer>
                <Row>
                    <Col>
                        <a class="btn btn-primary" href="/AddTest" role="button"> Ok </a>

                    </Col>
                    <Col>
                        <a class="btn btn-primary" href="/AddTest" role="button"> Cancel </a>
                    </Col>
                </Row>
            </Modal.Footer>

        </Modal>
    );
}

function Popup() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            <RiImageAddFill size="25px" /> Add Image </Button>
                            <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div>
                            <input type="file" id="customFile" multiple/>
                        </div>
                    </Col>

                   
                </Row>
            </Container>
        </div>

    );
}
export default Popup;