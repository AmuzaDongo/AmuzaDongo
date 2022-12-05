import React, {useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import User from "../../components/social/Social";
import "./navbar.css";
import Login from '../../pages/login/Login';



export default function NavBar() {
    
<<<<<<< HEAD
    const [scrollNav, setScrollNav] = useState(false)
=======
    const [scrollnav, setScrollNav] = useState(false)
>>>>>>> dd42d3b (edited back end code)
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
<<<<<<< HEAD
                    <span>dongoamuza</span>
=======
                    <span>dongo amuza</span>
>>>>>>> dd42d3b (edited back end code)
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                <Nav className="main-nav">
<<<<<<< HEAD
                    <Link className="link" scrollNav={scrollNav} to="home"
=======
                    <Link className="link" scrollNav={scrollnav} to="home"
>>>>>>> dd42d3b (edited back end code)
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-180}
                    >Home</Link>
<<<<<<< HEAD
                    <Link className="link" scrollNav={scrollNav} to="about"
=======
                    <Link className="link" scrollNav={scrollnav} to="about"
>>>>>>> dd42d3b (edited back end code)
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                    >About</Link>
<<<<<<< HEAD
                    <Link className="link" scrollNav={scrollNav} to="Portfolio"
=======
                    <Link className="link" scrollNav={scrollnav} to="Portfolio"
>>>>>>> dd42d3b (edited back end code)
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                    >Portfolio</Link>
<<<<<<< HEAD
                    <Link className="link" scrollNav={scrollNav} to="blog"
=======
                    <Link className="link" scrollNav={scrollnav} to="blog"
>>>>>>> dd42d3b (edited back end code)
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                    >Blog</Link>
<<<<<<< HEAD
                    <Link className="link" scrollNav={scrollNav} to="contact"
=======
                    <Link className="link" scrollNav={scrollnav} to="contact"
>>>>>>> dd42d3b (edited back end code)
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
 