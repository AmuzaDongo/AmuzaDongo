import { useContext,useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { useLocation } from "react-router";
import { Link } from "react-scroll";
import { Context } from "../../../context/Context";
import Dashboardfooter from "../../footer/Dashboardfooter";
import TopBar from "../topbar/TopBar";
import axios from "axios";
import "./blogs.css";

export default function Editblog() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = `${process.env.REACT_APP_API}/images/`;
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get(`${process.env.REACT_APP_API}/posts`+ path);
          setPost(res.data);
        };
        getPost();
      }, [path]);

      const handleDelete = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_API}/posts/${post._id}`, {
            data: { username: user.username },
          });
          window.location.replace("/");
        } catch (err) {}
      };
    
      const handleUpdate = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_API}/posts/${post._id}`, {
            username: user.username,
            title,
            desc,
          });
          setUpdateMode(false)
        } catch (err) {}
      };

    return (
        <div className="singlePost" style={{paddingTop:"10px"}}>
            <TopBar />
            <Container>
                <Row>
                    <div className="singlePostWrapper">
                        {post.photo && (
                            <img src={PF+post.photo} alt="" className="postImg" />
                        )}
                        {updateMode ? (
                            <input
                                type="text"
                                value={title}
                                className="singlePostTitleInput"
                                autoFocus
                                onChange={(e) => setTitle(e.target.value)}
                            />    
                        ) : (
                            <h1 className="singlePostTitle">
                                {post.title}
                                {post.username === user?.username && (
                                    <div className="singlePostEdit">
                                        <AiOutlineEdit  onClick={() => setUpdateMode(true)} className="singlePostIcon" />
                                        <FaTrashAlt onClick={handleDelete} className="singlePostIcon" />
                                    </div> 
                                )}

                            </h1>
                            
                        )}
                        
                        <div className="singlePostInfo">
                            <span className="author">Author: 
                                <Link to={`/?user=${post.username}`} className="link">
                                    <b>{post.username}</b>
                                </Link>
                            </span>
                            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                        </div> 
                        {updateMode ? (
                            <textarea
                                className="singlePostDescInput"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        ):(
                            <p className="singlePostDesc">
                                {post.desc}
                            </p>
                        )}
                        {updateMode && (
                            <button className="singlePostButton" onClick={handleUpdate}>
                              Update
                            </button>
                        )}
                    </div>
                </Row>
            </Container>
            <Dashboardfooter />
        </div>
    )
}
