import React, { useContext } from "react";
import { RiFileCodeLine, RiHomeLine } from "react-icons/ri";
import { AiOutlinePieChart, AiOutlineSetting } from "react-icons/ai";
import "./sidebar.css"
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";
import { FaPodcast, FaWallet } from "react-icons/fa";
import { Context } from './../../../context/Context';


export default function Sidebar() {

    const { dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }

    return (
        <div style={{display:'flex',backgroundColor: '#EAEDFF',padding:'10px'}}>
            <div className="sidebar">
                <div className="profileImg">
                    <Link to="/settings"><img src="assets/dongo.jfif" alt="" /></Link>
                    <h1>Dongo Amuza</h1>
                    <h4 onClick={handleLogout}>Log Out</h4>
                </div>
                <div className="sidebarLinkContainer">
                        <ul className="sidebarLink">
                            <li>
                                <Link  to="/"className="link">
                                    <RiHomeLine />
                                    <h3>Dashboard</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="link">
                                    <RiFileCodeLine />
                                    <h3>Projects</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="link">
                                    <FaPodcast />
                                    <h3>Blogs</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to="/invoice" className="link">
                                    <FaWallet />
                                    <h3>Invoices</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to="/reports" className="link">
                                    <AiOutlinePieChart />
                                    <h3>Reports</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to="/settings" className="link">
                                    <AiOutlineSetting />
                                    <h3>Settings</h3>
                                </Link>
                            </li>
                        </ul>
                        <div className="sidebarContact">
                            <span className="sidebarTitle">Follow Me</span>
                            <ul className="sidebarSocial">
                                <li>
                                        <SocialIcon className="topIcon"url="https://facebook.com/dongoamuza/" style={{ height: 25, width: 25 }} />
                                        <SocialIcon className="topIcon" url="https://twitter.com/dongoamuza/" style={{ height: 25, width: 25 }}/>
                                        <SocialIcon className="topIcon" url="https://www.linkedin.com/in/dongo-amuza-64981a148/" style={{ height: 25, width: 25 }}/>
                                </li>
                            </ul>
                        </div>
                </div>
                
                </div>
                {/* <Dashboard /> */}
        </div>
        
    )
}
