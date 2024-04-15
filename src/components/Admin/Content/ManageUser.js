import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import './ManageUser.scss'

const ManageUser = (props) => {
    const [isModalShow, setModalShow] = useState(false)
    const handleCloseModal = (value) => {
        setModalShow(false)
    }
    return (
        <div className="manage-user-container">
            <div className="manage-user-title">
                Manage User
            </div>
            <div className="manage-user-content">
                <div className="btn-add-user">
                    <button
                        className="btn btn-primary"
                        onClick={() => setModalShow(true)}
                    >
                        <FcPlus />Add New User
                    </button>
                </div>
                <div className="table-users-container">
                    Table user:
                </div>
                <ModalCreateUser
                    show={isModalShow}
                    setShow={handleCloseModal}
                />
            </div>
        </div>
    )
}
export default ManageUser;