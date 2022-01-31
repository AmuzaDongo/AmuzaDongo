import React, { useContext,useState,useRef } from 'react'
import {axios} from "axios";
import { ButtonGroup, Card, CardGroup, Container, Form, FormGroup, FormLabel, FormSelect, InputGroup, Row } from 'react-bootstrap'
import { AiFillCloseCircle, AiFillFileAdd } from 'react-icons/ai';
import './addproject.css'
import { Context } from '../../../../context/Context';
import { useSpring, animated } from 'react-spring';

export default function Addprojectcard({ showModal, setShowModal }) {
    const [name, setName] = useState("");
    const [client, setClient] = useState("");
    const [status, setStatus] = useState("");
    const [start_date, setStart_date] = useState("");
    const [duration, setDuration] = useState("");
    const [end_date, setEnd_date] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
        username: user.username,
        name,
        client,
        status,
        start_date,
        duration,
        end_date,
        desc,
      };
      if (file) {
        const data =new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newPost.photo = filename;
        try {
          await axios.post("/upload", data);
        } catch (err) {}
      }
      try {
        const res = await axios.post("/project", newPost);
        res.data && window.location.replace("/projects");
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
            <div className="addproject" ref={modalRef} onClick={closeModal}>
                <Container className="addcontainer">
                    <Row>
                        <animated.div style={animation}>
                            <Card className="add-card">
                                <CardGroup>
                                    <Card.Body>
                                        <Card.Title className="add-title">
                                            <h4>Add Project</h4>
                                            <span className="btn"
                                            aria-label='Close modal'
                                            onClick={() => setShowModal(prev => !prev)}
                                            ><AiFillCloseCircle /></span>
                                        </Card.Title>
                                        <Card.Text className="add-body">
                                            <Form className="add-form" onSubmit={handleSubmit}>
                                                <FormGroup className="fg">
                                                    <FormLabel className="label">Project Name</FormLabel>
                                                    <InputGroup>
                                                        <input type="text"
                                                            onChange = {e=>setName(e.target.value)}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="fg">
                                                    <FormLabel className="label">Company/Client</FormLabel>
                                                    <InputGroup>
                                                        <input type="text" 
                                                            onChange = {e=>setClient(e.target.value)}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="fg">
                                                    <FormLabel className="label">Status</FormLabel>
                                                        <FormSelect onChange = {e=>setStatus(e.target.value)}>
                                                            <optgroup>
                                                                <option value="On Going">On Going</option>
                                                                <option value="Ended">Ended</option>
                                                            </optgroup>
                                                        </FormSelect>
                                                </FormGroup>
                                                <FormGroup className="fg">
                                                    <FormLabel className="label">Start Date</FormLabel>
                                                    <InputGroup>
                                                        <input type="date" datatype
                                                            onChange = {e=>setStart_date(e.target.value)}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="fg">
                                                    <FormLabel className="label">Duration</FormLabel>
                                                    <InputGroup>
                                                        <input type="text" 
                                                            onChange = {e=>setDuration(e.target.value)}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="fg">
                                                    <FormLabel className="label">End Date</FormLabel>
                                                    <InputGroup>
                                                        <input type="date" datatype 
                                                            onChange = {e=>setEnd_date(e.target.value)}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="fgfile">
                                                    <InputGroup>
                                                        <FormLabel htmlFor="fileProject" className="label"><AiFillFileAdd /> Add File</FormLabel>
                                                        <input type="file" id="fileProject" style={{display:"none"}} 
                                                            onChange = {(e) => setFile(e.target.files[0])}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="fgtextarea">
                                                    <FormLabel className="label">Description</FormLabel>
                                                    <InputGroup>
                                                        <textarea name="descri" id="" cols="30" rows="6"
                                                            onChange = {e=>setDesc(e.target.value)}
                                                        ></textarea>
                                                    </InputGroup>
                                                </FormGroup>
                                                <ButtonGroup className="btng">
                                                    <button type="reset">Reset</button>
                                                    <button type="submit">Submit</button>
                                                </ButtonGroup>
                                            </Form>
                                        </Card.Text>
                                    </Card.Body>
                                </CardGroup>
                            </Card>
                        </animated.div>
                    </Row>
                </Container>
            </div>
            ): null}
        </>
    )
}
