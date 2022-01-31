import { Carousel, Col, Row } from 'react-bootstrap';
import Card from '../testimonialCard/card';
import "./testimonial.css"

export default function About() {
    return (
        <div className="testimonial">
            <div className="container">
                <div className="testimonial-header">
                    <span>WHAT CLIENTS SAY</span>
                    <h2>Testimonial</h2>
                </div>
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item interval={3000} className="T-item">
                                <Card />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <Card />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <Card />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
