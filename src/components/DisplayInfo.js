import { useState } from 'react'
import './DisplayInfo.scss'
// import logo from '../logo.svg'
// class DisplayInfo extends React.Component {
//     // constructor(props) {
//     //     super(props)
//     //     this.state = {
//     //         isShowListUser: true
//     //     }
//     //     console.log('>>>> Check constructor');
//     // }
//     // handleHideShow = (event) => {
//     //     this.setState({
//     //         isShowListUser: !this.state.isShowListUser
//     //     })
//     // }
//     // componentDidMount() {
//     //     console.log('>>>> call me component did mount ....');
//     // }
//     // componentDidUpdate(prevProps) {
//     //     console.log('call me component did update ', this.props.listUser, prevProps.listUser);
//     //     if (this.props.listUser.length !== prevProps.listUser.length) {
//     //         if (this.props.listUser.length === 5) {
//     //             alert('You got 5 users')
//     //         }
//     //     }
//     // }
//     render() {
//         console.log('>>>> Check render');
//         const { listUser } = this.props
//         return (
//             <div className="display-info-containers">
//                 {/* <img src={logo} alt="Logo error" /><br /> */}
//                 {/* <button onClick={(event) => this.handleHideShow(event)}>
//                     {this.state.isShowListUser ? "Hide" : "Show"} List User
//                 </button> */}
//                 {this.state.isShowListUser  &&
//                     <div>
//                         {listUser.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>
//                                     {/*
//                                     Inline Css
//                                     <p style={{ color: 'yellow' }}>
//                                         My name's {user.name}
//                                     </p> */}
//                                     <p>
//                                         My name's {user.name}
//                                     </p>
//                                     <p>
//                                         I'm {user.age} years old
//                                     </p>
//                                     <p>
//                                         I'm from {user.address}
//                                     </p>
//                                     <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//                 {/* Solution 2:
//                  <div style={{ display: this.state.isShowListUser ? "block" : "none" }}>
//                     {listUser.map((user) => {
//                         return (
//                             <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>
//                                 <p>
//                                     My name's {user.name}
//                                 </p>
//                                 <p>
//                                     I'm {user.age} years old
//                                 </p>
//                                 <hr />
//                             </div>
//                         )
//                     })}
//                 </div> */}
//             </div >

//         )
//     }
// }
const DisplayInfo = (props) => {
    const { listUser } = props
    const [isShowListUser, setShowHide] = useState(true)
    const handleShowHide = () => {
        setShowHide(!isShowListUser)
    }
    return (
        <div className="display-info-containers">
            <div>
                <span onClick={handleShowHide}>
                    {isShowListUser ? "Hide" : "Show"} List User
                </span>
            </div>
            {isShowListUser &&
                <div>
                    {listUser.map((user) => {
                        return (
                            <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>
                                <p>
                                    My name's {user.name}
                                </p>
                                <p>
                                    I'm {user.age} years old
                                </p>
                                <p>
                                    I'm from {user.address}
                                </p>
                                <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            }
        </div >

    )
}


export default DisplayInfo