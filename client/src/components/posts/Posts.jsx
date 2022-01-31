import Post from "../post/Post";
import { Row, Col, Container} from 'react-bootstrap';
import "./posts.css"

export default function Posts({posts}) {
    return (
        <div className="posts" id="blog">
            <Container>
                <div className="contact-header">
                    <span>Blog</span>
                    <h2>My Latest Stories</h2>
                </div>
                <Row>
                    {posts.map((p) => (
                        <Col md={4}>
                            <Post post={p} />
                        </Col>
                    ))}
                </Row>
            </Container>
           
        </div>
    )
}
