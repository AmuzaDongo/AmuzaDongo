import { useRef, useContext, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Context } from "../../context/Context";
import { useSpring, animated } from 'react-spring';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./login.css"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login({ showModal, setShowModal }) {
    const userRef = useRef()
    const passwordRef = useRef();
    const { user, isFetching } = useContext(Context)
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
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API}/users/login`, {
                email: userRef.current.value,
                password: passwordRef.current.value,
            });
            console.log(data)
            if (data?.error) {
                toast.error(data.error);
            }else{
                toast.success("Login successful");
            }
        } catch (error) {
            console.log(error);
            toast.error("Login failed. Try again.");
        }
    };

    console.log(user);
    return (
        <Container ref={modalRef} onClick={closeModal}>
            <div className="login">
                {showModal ?(
                    <animated.div style={animation}>
                        <div className="login-bg" >
                            <span className="loginTitle">Login</span>
                            <form className="loginForm" onSubmit={handleSubmit}>
                                <label>Email</label>
                                <input type="email" className="loginInput" placeholder="Enter your username"
                                    ref={userRef}
                                />
                                <label>Password</label>
                                <input type="password" className="loginInput" placeholder="Enter your password"
                                    ref={passwordRef}
                                />
                                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
                            </form>
                            <button className="closeButton">
                                <span aria-label='Close modal'
                                onClick={() => setShowModal(prev => !prev)}><AiFillCloseCircle /></span>
                            </button>
                            <div className="row">
                                <div className="col-12 p-2">
                                    <span>Have no account! <Link className="link text-info" to="/register">Register</Link></span>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                ): null}
            </div>
            <Toaster />
        </Container>
    )
}
