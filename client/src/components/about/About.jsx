import { Container,Row, Button, Col } from "react-bootstrap";
import { Link } from 'react-scroll';
import { FaDownload} from 'react-icons/fa';
import React, {useState, useEffect} from 'react';
import "./about.css"

export default function About() {
    const [scrollnav, setScrollNav] = useState(false)
    const changeNav = ()=>{
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    }, []);

    return (
        <div className="about" id="about">
            <Container>
                <Row>
                    <Col md={5}>
                        <div className="about-img">
                            <img src="assets/about.jpg" alt="" />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="about-info">
                            <div className="about-header">
                                <span>VISIT MY PORTFOLIO & HIRE ME</span>
                                <h2>About Me</h2>
                            </div>
                            <div className="info">
                                <p>
                                    I am well-qualified Full Stack Developer 
                                    familiar with wide range of 
                                    programming utilities and languages. 
                                    Knowledgeable of backend and 
                                    frontend development requirements. 
                                    Handles any part of process with 
                                    ease. Collaborative team player with 
                                    excellent technical abilities offering 2 
                                    years of related experience.
                                </p>
                            </div>
                            <Link scrollNav={scrollnav} to="contact">
                                <Button type="button" className="btn download-cvBtn">Dowload My CV <FaDownload /></Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
