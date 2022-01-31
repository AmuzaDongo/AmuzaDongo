import axiosInstance from "../../config";
import { useRef, useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Context } from "../../context/Context";
import { useSpring, animated } from 'react-spring';
import "./login.css"
import { Container } from "react-bootstrap";

export default function Login({ showModal, setShowModal }) {
    const userRef = useRef()
    const passwordRef = useRef();
    const { user, dispatch, isFetching } = useContext(Context)
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
        dispatch({type:"LOGIN_START"});
        try {
            const res = await axiosInstance.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS", payload:res.data});
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE"});
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
                                <label>Username</label>
                                <input type="text" className="loginInput" placeholder="Enter your username"
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
                        </div>
                    </animated.div>
                ): null}
            </div>
        </Container>
    )
}
