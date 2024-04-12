import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import './SideBar.scss'
import { FaReact, FaGem, FaGithub } from 'react-icons/fa';
import { MdDashboard } from "react-icons/md";
import { IconContext } from 'react-icons'
import sidebarBg from '../../assets/bg2.jpg';
import { Link } from 'react-router-dom';

const SideBar = ({ collapsed, toggled, handleToggleSidebar }) => {
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <IconContext.Provider value={{ size: '2.5rem', color: '#00bfff' }}>
                            <FaReact /> &nbsp;
                        </IconContext.Provider>
                        <span>Kenzo Ngo</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Dashboard
                            <Link to={`/admins`} />
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            title={'Features'}
                            icon={<FaGem />}
                        >
                            <MenuItem>
                                Quản Lý User
                                <Link to={`/admins/manage-users`} />
                            </MenuItem>
                            <MenuItem>Quản Lý Bài Quiz</MenuItem>
                            <MenuItem>Quản Lý Câu Hỏi</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/kenzongo?tab=repositories"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                {'View Github'}
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    );
};

export default SideBar;
