import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toast } from "react-hot-toast";
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaArrowCircleLeft, FaEye, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./blogs.css";
import Topbar from './../../admin/topbar/TopBar';
import Dashboardfooter from './../../footer/Dashboardfooter';
import { Table } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import _ from 'lodash';
import { AiOutlineEdit } from "react-icons/ai";
import Write from "../write/Write";

export default function Blogs() {
    const PF = `${process.env.REACT_APP_API}/images/`;
    const pageSize = 5;
    const [posts, setPosts] = useState();
    const [paginatedPosts, setpaginatedPosts] = useState();
    const [currentPage, setcurrentPage] = useState(1);
    const [showModal,setShowModal] = useState(false);

    const openModal =() =>{
        setShowModal(prev => !prev);
    } 

    useEffect(() => {
        
        const fetchPosts = async () =>{
            const res = await axios.get(`${process.env.REACT_APP_API}/posts`);
            setPosts(res.data);
            setpaginatedPosts(_(res.data).slice(0).take(pageSize).value())
        }
        fetchPosts();
    }, []);

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`${process.env.REACT_APP_API}/posts/${paginatedPosts._id}`);
            res.data && window.location.replace("/blog")
        } catch (err) {}
    };

    const pageCount = posts? Math.ceil(posts.length/pageSize) : 0;
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount+1);
    const pagination =(pageNo)=>{
        setcurrentPage(pageNo);
        const startIndex = (pageNo -1) * pageSize;
        const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
        setpaginatedPosts(paginatedPost)
    }

    
    return (
        <div className="blogs">
            <Topbar />
            <Container>
                <Row>
                    <Col md={12}>
                        <Card className="blogs-card">
                            <div className="back">
                                <Link to="/" className="link"><FaArrowCircleLeft /></Link>
                                <span onClick={openModal} className="link"><FaPlusCircle /></span>
                            </div>
                            <Card.Text>
                                {!paginatedPosts ? ("No data found"):(
                                    <Table className="table">
                                        <thead>
                                            <tr>
                                                <th colSpan={1}><FormCheckInput /></th>
                                                <th colSpan={2}>Photo</th>
                                                <th colSpan={3}>Blog Title</th>
                                                <th colSpan={3}>Description</th>
                                                <th colSpan={3}>Categories</th>
                                                <th colSpan={3}>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                paginatedPosts.map((post, index)=>(
                                                    <tr className="table-data" colSpan={12}>
                                                        <td colSpan={1}><FormCheckInput /></td>
                                                        <td colSpan={2}><img src={PF+post.photo} className="table-img" /></td>
                                                        <td colSpan={3}>{post.title}</td>
                                                        <td colSpan={3}>{post.desc}</td>
                                                        <td colSpan={3}>{post.categories}</td>
                                                        <td colSpan={3} className="actionbtn">
                                                            <i className="link" onClick={handleDelete}><FaTrashAlt /></i>
                                                            <Link to={`/edit-blog/${post._id}`} className="link"><FaEye /></Link>
                                                            <Link to={`/edit-blog/${post._id}`} className="link"><AiOutlineEdit /></Link>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>
                                )}
                                <nav className="d-flex justify-content-center">
                                    <ul className="pegination d-flex">
                                        {
                                            pages.map((page)=>(
                                                <li className={ page === currentPage ? "page-item active":"page.item"}>
                                                    <p className="page.link page-link link" 
                                                        onClick={()=>pagination(page)}
                                                    >{page}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                            </Card.Text>
                        </Card>
                        <Write showModal={showModal}setShowModal={setShowModal} />
                    </Col>
                </Row>
            </Container>
            <Dashboardfooter />
        </div>
    )
}
