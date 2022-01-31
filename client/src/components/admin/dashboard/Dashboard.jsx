import React from 'react';
import { Link } from "react-router-dom";
import { RiBarChart2Fill } from "react-icons/ri";
import { Card, Col, Container, Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import "./dashboard.css";
import TopBar from '../topbar/TopBar';
import Dashboardfooter from '../../footer/Dashboardfooter';

function Dashboard() {
    
    return (
        <div className="dashboard">
            <Container>
                <Row>
                    <Col md={12}>
                        <TopBar />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={3}>
                        <Card className="earning">
                            <Card.Text>
                                <div className="d-heading">
                                    <span><RiBarChart2Fill/></span>
                                    <h4>Earnings</h4>
                                </div>
                                <div className="amout">
                                    <span>$7,8905</span>
                                    <span>+10% since last month</span>
                                </div>
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="ranking">
                            <Card.Text>
                                <div className="rank">
                                    <div><span>98</span></div>
                                    <div>
                                        <span>Rank</span>
                                        <span>In top 10%</span>
                                    </div>
                                </div>
                                <div className="project_counter">
                                    <div><span>32</span></div>
                                    <div className="p">
                                        <span>Projects</span>
                                        <span>8 this month</span>
                                    </div>
                                    <div className="p-type">
                                        <span>websites</span>
                                        <span>E-Learning</span>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="my-projects">
                            <Card.Title className="card-title">My Projects</Card.Title>
                            <Card.Text className="body-card">
                                <div className="project">
                                    <div className="image">
                                        <img src="assets/p1.jpg" alt="" />
                                    </div>
                                    <div className="p-title">
                                        <h4>Boluba High school E-Learning System</h4>
                                        <span className="deadline">10 days remaining</span>
                                    </div>
                                </div>

                                <div className="project">
                                    <div className="image">
                                        <img src="assets/p1.jpg" alt="" />
                                    </div>
                                    <div className="p-title">
                                        <h4>Everlasting Hope Africa website updating</h4>
                                        <span className="deadline">4 month remaining</span>
                                    </div>
                                </div>
                                <div className="more">
                                    <Link to="/" className="link"> see all projects</Link>
                                </div>
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                    <Col md={6}>
                        <Card className="invoice">
                            <Card.Title className="card-title">Recent Invoices</Card.Title>
                            <Card.Text className="body-card">
                                <div className="invoices">
                                    <div className="image">
                                        <img src="assets/p1.jpg" alt="" />
                                    </div>
                                    <div className="invoice-title">
                                        <h4>Head of ICT department</h4>
                                        <span className="deadline">Boluba High school</span>
                                    </div>
                                    <div className="paid">
                                        <span>paid</span>
                                    </div>
                                    <div className="amount-paid-pending">
                                        <span>$5800</span>
                                    </div>
                                </div>

                                <div className="invoices">
                                    <div className="image">
                                        <img src="assets/p1.jpg" alt="" />
                                    </div>
                                    <div className="invoice-title">
                                        <h4>Director</h4>
                                        <span className="deadline">Everlasting Hope Africa</span>
                                    </div>
                                    <div className="pending">
                                        <span>pending</span>
                                    </div>
                                    <div className="amount-paid-pending">
                                        <span>$1000</span>
                                    </div>
                                </div>
                                <div className="more">
                                    <Link to="/invoice" className="link">more invoices</Link>
                                </div>
                            </Card.Text>
                        </Card>
                        <Card className="engage-card">
                            <Card.Text className="engage">
                                <span>
                                    <SocialIcon 
                                        url="https://www.youtube.com/channel/UCdqCosqxk2JrpzWy-yNRQdw"
                                        style={{ height: 45, width: 45 }}
                                    />
                                </span>
                                <span className="header">Engage with the clients <p>Join youtube channel</p></span>
                                <span>
                                    <a 
                                    className="link"
                                    href="https://www.youtube.com/channel/UCdqCosqxk2JrpzWy-yNRQdw"
                                    >Join Now</a></span>
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="invoice">
                            <Card.Title className="card-title">My Clients</Card.Title>
                            <Card.Text className="body-card">
                                <div className="invoices">
                                    <div className="image">
                                        <img src="assets/p1.jpg" alt="" />
                                    </div>
                                    <div className="invoice-title">
                                        <h4>Dongo Amuza</h4>
                                        <span className="deadline">dongoamuza@gmail.com</span>
                                    </div>
                                    <div className="paid">
                                        <span>Senior Developer</span>
                                    </div>
                                </div>
                                <div className="invoices">
                                    <div className="image">
                                        <img src="assets/p1.jpg" alt="" />
                                    </div>
                                    <div className="invoice-title">
                                        <h4>Ssali David</h4>
                                        <span className="deadline">davidnorris57@gmail.com</span>
                                    </div>
                                    <div className="paid">
                                        <span>Senior Developer</span>
                                    </div>
                                </div>
                                <div className="invoices">
                                    <div className="image">
                                        <img src="assets/p1.jpg" alt="" />
                                    </div>
                                    <div className="invoice-title">
                                        <h4>Pemba Anorld</h4>
                                        <span className="deadline">pembaanorld@gmail.com</span>
                                    </div>
                                    <div className="paid">
                                        <span>UI/Designer</span>
                                    </div>
                                </div>
                                <div className="invoices">
                                    <div className="image">
                                        <img src="assets/p1.jpg" alt="" />
                                    </div>
                                    <div className="invoice-title">
                                        <h4>Kibbedi Derrick</h4>
                                        <span className="deadline">kibbediderrick@gmail.com</span>
                                    </div>
                                    <div className="paid">
                                        <span>Finace Manager</span>
                                    </div>
                                </div>
                                <div className="more">
                                    <Link to="/invoice" className="link">All Clients</Link>
                                </div>
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Dashboardfooter />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard
