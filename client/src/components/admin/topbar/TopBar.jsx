import { Button, Col, Container, Form, InputGroup, Row} from 'react-bootstrap';
import {FiSearch} from 'react-icons/fi';
import "./topbar.css";
import  React from 'react';


export default function TopBar() {

    return (
        <header className="topbar">
            <Container className="container">
                <Row>
                    <Col md={12}>
                        <nav className="main-nav">
                            <h3>Hi! Dongo</h3>
                            <ul className="nav">
                                <li>
                                    <Form className="searchform">
                                        <InputGroup>
                                            <input type="text" placeholder="Seach" />
                                            <Button type="submit" className="btn"><i><FiSearch /></i></Button>
                                        </InputGroup>
                                        
                                    </Form>
                                </li>
                            </ul> 
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
 