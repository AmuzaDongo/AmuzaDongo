import { Container, Row, Col } from "react-bootstrap";
import "./footer.css"

export default function Dashboardfooter() {
    return (
        <div className="dashboardfooter">
            <div className="footerWrapper">
                <Container>
                    <Row>
                        <Col md={12} className="copyRight">
                            <span>© Copyright {new Date().getFullYear()} Dongo Amuza. All Rights Reserved.</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}