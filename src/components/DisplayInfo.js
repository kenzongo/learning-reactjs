import React from "react";
import './DisplayInfo.scss'
import logo from '../logo.svg'
class DisplayInfo extends React.Component {
    state = {
        isShowListUser: true
    }
    handleHideShow = (event) => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUser } = this.props
        return (
            <div className="display-info-containers">
                <img src={logo} alt="Logo error" />
                <button onClick={(event) => this.handleHideShow(event)}>
                    {this.state.isShowListUser ? "Hide" : "Show"} List User
                </button>
                {this.state.isShowListUser &&
                    <div>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>
                                    {/*
                                    Inline Css
                                    <p style={{ color: 'yellow' }}>
                                        My name's {user.name}
                                    </p> */}
                                    <p>
                                        My name's {user.name}
                                    </p>
                                    <p>
                                        I'm {user.age} years old
                                    </p>
                                    <p>
                                        I'm from {user.address}
                                    </p>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
                {/* Solution 2:
                 <div style={{ display: this.state.isShowListUser ? "block" : "none" }}>
                    {listUser.map((user) => {
                        return (
                            <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>
                                <p>
                                    My name's {user.name}
                                </p>
                                <p>
                                    I'm {user.age} years old
                                </p>
                                <hr />
                            </div>
                        )
                    })}
                </div> */}
            </div>

        )
    }
}

export default DisplayInfo