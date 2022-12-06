import { useContext, useState,useRef } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../../context/Context";
import { Card, Container, Row } from "react-bootstrap";
import { useSpring, animated } from 'react-spring';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Write({ showModal, setShowModal }) {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      categories,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post(`${process.env.REACT_APP_API}/upload`, data);
      } catch (err) {}
    }
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/posts`, newPost);
      res.data && window.location.replace("/blog");
    } catch (err) {}
  };

  const modalRef = useRef();
  const animation = useSpring({
      config: {
          duration: 480
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateX(0%)` : `translateX(-100%)`
  });

  const closeModal = e =>{
      if(modalRef.current === e.target){
          setShowModal(false)
      }
  }

  return (
    <>
    {showModal ?(
      <div className="write" ref={modalRef} onClick={closeModal}>
        <Container>
          <Row>
            <animated.div style={animation}>
              <Card className="add-card">
                <Card.Title className="add-title">
                  <h4>Add Blog</h4>
                  <span className="btn"
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                  ><AiFillCloseCircle /></span>
                </Card.Title>
                <Card.Text>
                  {file && (
                    <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
                  )}
                  <form className="writeForm" onSubmit={handleSubmit}>
                    <div className="writeFormGroup">
                      <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                      </label>
                      <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                      <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                        onChange={e=>setTitle(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Category"
                        className="writeInput"
                        autoFocus={true}
                        onChange={e=>setCategories(e.target.value)}
                      />
                    </div>
                    <div className="writeFormGroup">
                      <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="writeInput writeText"
                        onChange={e=>setDesc(e.target.value)}
                      ></textarea>
                    </div>
                    <button className="writeSubmit" type="submit">
                      Publish
                    </button>
                  </form>
                </Card.Text>
              </Card>
            </animated.div>
          </Row>
            
        </Container>
      </div>
      ): null}
    </>
  );
}
