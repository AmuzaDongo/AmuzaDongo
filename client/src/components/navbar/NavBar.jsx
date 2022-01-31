import React, {useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import User from "../../components/social/Social";
import "./navbar.css";
import Login from '../../pages/login/Login';



export default function NavBar() {
    
    const [scrollNav, setScrollNav] = useState(false)
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

    const [showModal,setShowModal] = useState(false);
    const openModal =() =>{
        setShowModal(prev => !prev);
    } 

    return (
        <>
        <Navbar className="navbar-area" expand="lg">
            <Container className="container">
                <Navbar.Brand href="/" className="logo">
                    <img src="assets/dongo.jfif" alt="" />
                    <span>dongoamuza</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                <Nav className="main-nav">
                    <Link className="link" scrollNav={scrollNav} to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-180}
                    >Home</Link>
                    <Link className="link" scrollNav={scrollNav} to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                    >About</Link>
                    <Link className="link" scrollNav={scrollNav} to="Portfolio"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                    >Portfolio</Link>
                    <Link className="link" scrollNav={scrollNav} to="blog"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                    >Blog</Link>
                    <Link className="link" scrollNav={scrollNav} to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                    >Contact</Link>
                    <User />

                    <span className="linkbtn"  onClick={openModal}>Login</span>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Login showModal={showModal}setShowModal={setShowModal} />
        </>
    )
}
 