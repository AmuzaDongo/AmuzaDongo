import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import axiosInstance from '../../../config';
=======
import axios from 'axios';
>>>>>>> dd42d3b (edited back end code)
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaArrowCircleLeft, FaPlusCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import TopBar from '../topbar/TopBar';
import Dashboardfooter from '../../footer/Dashboardfooter';
import "./projects.css";
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import Addprojectcard from './addprojectcard/Addprojectcard';

export default function Projects() {
<<<<<<< HEAD
    const PF = "https://dongoamuza.herokuapp.com/api/images/";
=======
    const PF = `${process.env.REACT_APP_API}/images/`;
>>>>>>> dd42d3b (edited back end code)
    const [posts, setPosts] = useState();

    useEffect(() => {
        
        const fetchPosts = async () =>{
<<<<<<< HEAD
            const res = await axiosInstance.get("/posts")
=======
            const res = await axios.get(`${process.env.REACT_APP_API}/posts`);
>>>>>>> dd42d3b (edited back end code)
            setPosts(res.data)
        }
        fetchPosts();
    }, []);

    const [showModal,setShowModal] = useState(false);
    const openModal =() =>{
        setShowModal(prev => !prev);
    } 
    
    return (
        <div className="project">
            <TopBar />
            <Container>
                <Row>
                    <Col md={12}>
                        <Card className="project-card">
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
                        <Addprojectcard showModal={showModal}setShowModal={setShowModal} />
                    </Col>
                </Row>
            </Container>
            <Dashboardfooter />
        </div>
    )
}
