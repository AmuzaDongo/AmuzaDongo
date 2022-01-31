import { Container, Row, Col } from "react-bootstrap";
import "./footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerWrapper">
                <Container>
                    <Row>
                        <Col md={12} className="copyRight">
                            <p>© Copyright {new Date().getFullYear()} Dongo Amuza. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}