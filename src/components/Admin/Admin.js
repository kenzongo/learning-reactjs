import SideBar from "./SideBar";
import 'react-pro-sidebar/dist/css/styles.css';
import { FaBars } from "react-icons/fa";
import './Admin.scss'
import { useState } from "react";
const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <FaBars onClick={() => setCollapsed(!collapsed)} />
                abc
            </div>
        </div>
    )
}
export default Admin;