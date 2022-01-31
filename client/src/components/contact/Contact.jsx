import "./contact.css";
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();

        emailjs.sendForm(
            'service_lhmqaak', 
            'template_e505gvm', 
            formRef.current, 
            'user_lNzHSILMU3ZbPJg5TGxcL')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div id="contact" className="contact-me">
            <Container>
                <div className="contact-header">
                    <span>CONTACT</span>
                    <h2>Contact With Me</h2>
                </div>
                <Row>
                    <Col md={6}>
                        <div className="section-heading">
                            <img src="assets/p1.jpg" alt="" />
                            <p>Feel free to connect with me via email and call. about your website and app needs</p>
                            <div className="phone-info">
                                <div><span><FaPhone className="media"/></span>&nbsp; <Link to="#" className="link">+256788346788</Link></div>
                                <div><span><FaEnvelope className="media"/></span>&nbsp; <Link to="#" className="link">dongoamuza@gmail.com</Link></div>
                                <div><span><FaMapMarker className="media"/></span>&nbsp; <Link to="#" className="link">Nansana</Link></div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <form id="contact" ref={formRef} onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <fieldset>
                                    <input type="name" name="user_name" id="name" placeholder="Name" required />
                                    </fieldset>
                                </div>
                                <div className="col-lg-6">
                                    <fieldset>
                                    <input type="surname" name="user_subject" id="subject" placeholder="Subject" required />
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                    <input type="text" name="user_email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                    <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required=""></textarea>  
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                    <button type="submit" id="form-submit" className="main-button ">Send Message</button>
                                    </fieldset>
                                    <span style={{color:'green'}}>{done && "Thank You For Contacting Me......"}</span>
                                </div>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
