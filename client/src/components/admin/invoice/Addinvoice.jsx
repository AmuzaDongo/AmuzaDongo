import React, { useContext,useState } from 'react'
<<<<<<< HEAD
import {axiosInstance} from "../../../config";
=======
import axios from "axios";
>>>>>>> dd42d3b (edited back end code)
import { ButtonGroup, Card, CardGroup, Container, Form, FormGroup, FormLabel, FormSelect, InputGroup, Row } from 'react-bootstrap'
import { AiFillCloseCircle, AiFillFileAdd } from 'react-icons/ai'
import './invoice.css'
import { Context } from './../../../context/Context';
import { useSpring, animated } from 'react-spring';
import { useRef } from 'react';

export default function Addinvoice({ showModal, setShowModal }) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [s_date, setS_date] = useState("");
    const [status, setStatus] = useState("");
    const [due_date, setDue_date] = useState("");
    const [item, setItem] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");
    const [total, setTotal] = useState("");
    const [terms, setTerms] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newInvoice = {
            username: user.username,
            name,
            address,
            email,
            s_date,
            status,
            due_date,
            item,
            qty,
            price,
            total,
            terms,
        };
        if (file) {
        const data =new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newInvoice.photo = filename;
        try {
<<<<<<< HEAD
            await axiosInstance.post("/upload", data);
        } catch (err) {}
        }
        try {
        const res = await axiosInstance.post("/invoices", newInvoice);
        res.data && window.location.replace("/invoice");
=======
            await axios.post(`${process.env.REACT_APP_API}/uppload`, data);
        } catch (err) {}
        }
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/invoices`, newInvoice);
            res.data && window.location.replace("/invoice");
>>>>>>> dd42d3b (edited back end code)
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
        <div>
            {showModal ?(
            <div className="addinvoice" ref={modalRef} onClick={closeModal}>
            
                <Container className="addcontainer">
                    <Row>
                        <animated.div style={animation}>
                            <Card className="add-invoice-card" >
                                <CardGroup>
                                    <Card.Body>
                                        <Card.Title className="add-title">
                                            <h4>Add Invoice</h4>
                                                <span className="btn" 
                                                    aria-label='Close modal'
                                                    onClick={() => setShowModal(prev => !prev)}
                                                ><AiFillCloseCircle /></span>
                                        </Card.Title>
                                        <Card.Text className="add-body">
                                            <Form className="add-form" onSubmit={handleSubmit}>
                                                <FormGroup className="fg">
                                                    <FormLabel className="label">Client Name</FormLabel>
                                                    <InputGroup>
                                                        <input type="text"
                                                            onChange={e=>setName(e.target.value)}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="fg">
                                                    <FormLabel className="label">Address</FormLabel>
                                                    <InputGroup>
                                                        <input type="text" 
                                                            onChange={e=>setAddress(e.target.value)}  
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="fg">
                                                    <FormLabel className="label">Email</FormLabel>
                                                    <InputGroup>
                                                        <input type="text" 
                                                            onChange={e=>setEmail(e.target.value)}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="fg">
                                                    <FormLabel className="label">Date</FormLabel>
                                                    <InputGroup>
                                                        <input type="date" datatype
                                                            onChange={e=>setS_date(e.target.value)}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="fg">
                                                    <FormLabel className="label">Status</FormLabel>
                                                    <InputGroup>
                                                        <select onChange={e=>setStatus(e.target.value)}>
                                                            <option value="pending">pending</option>
                                                            <option value="pending">Paid</option>
                                                        </select>
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="fg">
                                                    <FormLabel className="label">Due Date</FormLabel>
                                                    <InputGroup>
                                                        <input type="date" datatype 
                                                            onChange={e=>setDue_date(e.target.value)}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="fgfile">
                                                    <InputGroup>
                                                        <FormLabel htmlFor="fileProject" className="label"><AiFillFileAdd /> Add File</FormLabel>
                                                        <input 
                                                            type="file" id="fileProject" 
                                                            style={{display:"none"}} 
                                                            onChange={(e) => setFile(e.target.files[0])}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="item">
                                                    <InputGroup>
                                                        <input type="text" placeholder="Item description"
                                                            onChange={e=>setItem(e.target.value)}
                                                        />
                                                    </InputGroup>
                                                    <InputGroup>
                                                        <input type="text" placeholder="Qty"
                                                            onChange={e=>setQty(e.target.value)}
                                                        />
                                                    </InputGroup>
                                                    <InputGroup>
                                                        <input type="text" placeholder="Price"
                                                            onChange={e=>setPrice(e.target.value)}
                                                        />
                                                    </InputGroup>
                                                    <InputGroup>
                                                        <input type="text" placeholder="Total" 
                                                            onChange={e=>setTotal(e.target.value)}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="fgtextarea">
                                                    <FormLabel className="label">Tarms and Conditions</FormLabel>
                                                    <InputGroup>
                                                        <textarea name="descri" id="" cols="30" rows="6"
                                                            onChange={e=>setTerms(e.target.value)}
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
        </div>
       
    )
}
