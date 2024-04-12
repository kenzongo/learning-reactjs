import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="manage-user-title">
                Manage User
            </div>
            <div className="manage-user-content">
                <div>
                    <button>Add New User</button>
                </div>
                <div>
                    Table user:
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}
export default ManageUser;