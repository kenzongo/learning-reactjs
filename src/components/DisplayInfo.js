import React from "react";
class DisplayInfo extends React.Component {
    render() {
        const { listUser } = this.props
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
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
            </div>
        )
    }
}

export default DisplayInfo