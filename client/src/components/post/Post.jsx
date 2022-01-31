import { Link } from 'react-router-dom';
import "./post.css";

export default function Post({post}) {
    const PF = "https://dongoamuza.herokuapp.com/api/images/"
    return (
        <div className="post">
            {post.photo && <img src={PF+post.photo} alt="" className="postImg" />}
            <div className="postInfo">
                <Link to={`/post/${post._id}`} className="link"><span className="postTitle">{post.title}</span></Link>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                <p className="postDesc">{post.desc}</p>
            </div>
        </div>
    )
}
