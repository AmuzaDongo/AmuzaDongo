import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaArrowCircleLeft, FaPlusCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import TopBar from '../topbar/TopBar';
import Dashboardfooter from '../../footer/Dashboardfooter';
import "./invoice.css";
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import Addinvoice from './Addinvoice';

export default function Invoice() {
    const PF = "https://dongoamuza.herokuapp.com/api/images/";
    const [posts, setPosts] = useState();

    useEffect(() => {
        
        const fetchPosts = async () =>{
            const res = await axios.get("/posts")
            setPosts(res.data)
        }
        fetchPosts();
    }, []);

    const [showModal,setShowModal] = useState(false);
    const openModal =() =>{
        setShowModal(prev => !prev);
    } 
    
    return (
        <div className="invoice">
            <TopBar />
            <Container>
                <Row>
                    <Col md={12}>
                        <Card className="invoice-card">
                            <div className="back">
                                <Link to="/" className="link"><FaArrowCircleLeft /></Link>
                                <span onClick={openModal} className="link"><FaPlusCircle /></span>
                            </div>
                            <Card.Text>
                                {!posts ? ("No data found"):(
                                    <Table className="table">
                                        <thead>
                                            <tr>
                                                <th colSpan={1}><FormCheckInput /></th>
                                                <th colSpan={2}>Photo</th>
                                                <th colSpan={3}>Client</th>
                                                <th colSpan={3}>Project</th>
                                                <th colSpan={3}>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                posts.map((post, index)=>(
                                                    <tr className="table-data" colSpan={12}>
                                                        <td colSpan={1}><FormCheckInput /></td>
                                                        <td colSpan={2}><img src={PF+post.photo} className="table-img" /></td>
                                                        <td colSpan={3}>{post.title}</td>
                                                        <td colSpan={3}>{post.desc}</td>
                                                        <td colSpan={3}>Pending</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>
                                )}
                            </Card.Text>
                        </Card>
                        <Addinvoice showModal={showModal}setShowModal={setShowModal} />
                    </Col>
                </Row>
            </Container>
            <Dashboardfooter />
        </div>
    )
}
