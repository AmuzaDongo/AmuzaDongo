import "./setting.css"
import { FaUserEdit } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import TopBar from "../topbar/TopBar";
import Dashboardfooter from "../../footer/Dashboardfooter";


export default function Setting() {
    return (
        <div className="settings">
            <TopBar />
            <Container>
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingUpdateTitle">Update Your Account</span>
                        <span className="settingDeleteTitle">Delete Your Account</span>
                    </div>
                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <div className="settingPP">
                            <img src="assets/p2.jpg" alt="" />
                            <label htmlFor="fileInput">
                                <FaUserEdit className="settingsPPIcon" />
                            </label>
                            <input type="file" id="fileInput" style={{display:"none"}}/>
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder="Dongo" />
                        <label>Email</label>
                        <input type="email" placeholder="dongoamuza@gmail.com" />
                        <label>Password</label>
                        <input type="password" />
                        <button className="settingSubmit">Update</button>
                    </form>
                </div>
            </Container>
            <Dashboardfooter />
        </div>
    )
}
