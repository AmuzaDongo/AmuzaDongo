import React, { useContext,useState } from 'react'
<<<<<<< HEAD
import {axiosInstance} from "../../../config";
=======
import axios from 'axios'
>>>>>>> dd42d3b (edited back end code)
import { ButtonGroup, Card, CardGroup, Col, Container, Form, FormGroup, FormLabel, FormSelect, InputGroup, Row } from 'react-bootstrap'
import { AiFillCloseCircle, AiFillFileAdd } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Dashboardfooter from '../../footer/Dashboardfooter'
import TopBar from '../topbar/TopBar'
import './modalElement.js'
import { Context } from './../../../context/Context';

export default function Addinvoice() {
    return (
        <div className="addinvoice">
        <TopBar />
        <Container className="addcontainer">
            <Row>
                <Col md={12}>
                    <Card className="add-card">
                        <CardGroup>
                            <Card.Body>
                                <Card.Title className="add-title">
                                    <h4>Add Project</h4>
                                    <Link to="/invoice" className="btn"><AiFillCloseCircle /></Link>
                                </Card.Title>
                                <Card.Text className="add-body">
                                    <Form className="add-form">
                                        <FormGroup className="fg">
                                            <FormLabel className="label">Project Name</FormLabel>
                                            <InputGroup>
                                                <input type="text"
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup className="fg">
                                            <FormLabel className="label">Company/Client</FormLabel>
                                            <InputGroup>
                                                <input type="text" 
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup className="fg">
                                            <FormLabel className="label">Status</FormLabel>
                                                <FormSelect>
                                                    <optgroup>
                                                        <option value="On Going">On Going</option>
                                                        <option value="Ended">Ended</option>
                                                    </optgroup>
                                                </FormSelect>
                                        </FormGroup>
                                        <FormGroup className="fg">
                                            <FormLabel className="label">Start Date</FormLabel>
                                            <InputGroup>
                                                <input type="date" datatype
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup className="fg">
                                            <FormLabel className="label">Duration</FormLabel>
                                            <InputGroup>
                                                <input type="text" 
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup className="fg">
                                            <FormLabel className="label">End Date</FormLabel>
                                            <InputGroup>
                                                <input type="date" datatype 
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup className="fgfile">
                                            <InputGroup>
                                                <FormLabel htmlFor="fileProject" className="label"><AiFillFileAdd /> Add File</FormLabel>
                                                <input type="file" id="fileProject" style={{display:"none"}} 
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup className="fgtextarea">
                                            <FormLabel className="label">Description</FormLabel>
                                            <InputGroup>
                                                <textarea name="descri" id="" cols="30" rows="6"
                                                ></textarea>
                                            </InputGroup>
                                        </FormGroup>
                                        <ButtonGroup className="btng">
                                            <button type="reset">Reset</button>
                                            <button type="submit">Submit</button>
                                        </ButtonGroup>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </CardGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Dashboardfooter />
        </div>
    )
}
