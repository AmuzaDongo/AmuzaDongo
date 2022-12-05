import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Testimonial from "../../components/testimonial/Testimonial";
import Portfolios from "../../components/portfolios/Portfolios";
import "./home.css";
<<<<<<< HEAD
import axiosInstance from "../../config"
=======
import axios from "axios";
>>>>>>> dd42d3b (edited back end code)
import Contact from "../../components/contact/Contact";
import About from "../../components/about/About";



export default function Home() {
    const [posts, setPosts] = useState([]);
    const [portfolios, setPortfolio] = useState([]);

    useEffect(() => {
        const fetchPortfolios = async () =>{
<<<<<<< HEAD
            const res = await axiosInstance.get("/portfolio")
=======
            const res = await axios.get(`${process.env.REACT_APP_API}/portfolio`);
>>>>>>> dd42d3b (edited back end code)
            setPortfolio(res.data)
        }
        fetchPortfolios();
        const fetchPosts = async () =>{
<<<<<<< HEAD
            const res = await axiosInstance.get("/posts")
=======
            const res = await axios.get(`${process.env.REACT_APP_API}/posts`);
>>>>>>> dd42d3b (edited back end code)
            setPosts(res.data)
        }
        fetchPosts();
    }, [])
    return (
        <div>
            <Header />
            <About />
            <Portfolios portfolios = {portfolios} />
            <Testimonial />
            <Posts posts = {posts} />
            <Contact />
            <div className="container"><hr className="hline" /></div>
        </div>
    )
}
