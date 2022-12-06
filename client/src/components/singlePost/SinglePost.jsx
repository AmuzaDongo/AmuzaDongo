import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import "./singlePost.css";
export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = `${process.env.REACT_APP_API}/images/`;
    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get(`${process.env.REACT_APP_API}/posts` + path);
          setPost(res.data);
        };
        getPost();
      }, [path]);

    return (
        <div className="singlePost">
            <Container>
                <Row>
                    <div className="singlePostWrapper">
                        {post.photo && <img src={PF+post.photo} alt="" className="postImg" />}
                        <h1 className="singlePostTitle">
                            {post.title}
                        </h1>
                        <div className="singlePostInfo">
                            <span className="author">Author: <b>{post.username}</b></span>
                            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                        </div>
                        <p className="singlePostDesc">
                            {post.desc}
                        </p>
                    </div>
                </Row>
            </Container>
            
            <div className="container"><hr className="hline" /></div>
        </div>
    )
}
