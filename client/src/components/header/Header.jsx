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
                            <p className="headerTitleSm">I am a software engineer, Full-stack developer with experience in Node.js, Express.js, Ruby on Rails, Flutter, Reactjs, Vue, Next.js, Nuxt.js, PHP, and Laravel.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src="/assets/h2.jpg" alt="" className="headerImg" />
        </div>
    )
}
