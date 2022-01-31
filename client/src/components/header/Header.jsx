import { Container, Row, Col } from "react-bootstrap";
import "./header.css"

export default function Header() {
    return (
        <div className="header" id="home">
            <Container className="container">
                <Row>
                    <Col md={12}>
                        <div className="headerTitles">
                            <span className="headerTitleLg">Dongo Amuza</span>
                            <p className="headerTitleSm">I am a software engineer, full-stack developer working comfortable with node js, express js, php, laravel, react js, next js, vue js, nuxt js, angular, and flutter</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src="/assets/h2.jpg" alt="" className="headerImg" />
        </div>
    )
}
