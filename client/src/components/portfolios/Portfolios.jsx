import Portfolio from "../portfolio/Portfolio";
import { Row,Col, Container } from 'react-bootstrap'
import "./portfolio.css";

export default function Portfolios() {
    return (
        <div className="portfolios" id="Portfolio">
            <Container className="container">
                <div className="contact-header">
                    <span>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</span>
                    <h2>My Hot Projects</h2>
                </div>
                <Row>
                    <Col md={4}>
                        <Portfolio />
                    </Col>
                    <Col md={4}>
                        <Portfolio />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
