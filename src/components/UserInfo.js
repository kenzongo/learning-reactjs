import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'Kenzongo',
        age: 24,
        address: 'Ho Chi Minh City',
    };
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };
    handleOnSubmit = (event) => {
        //prevent default action of submit
        event.preventDefault();
        if (event.target.name === 'lastInput') {
            console.log(this.state);
        }
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    }
    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (event.target.name === 'lastInput') {
                this.handleOnSubmit(event);
            }
        }
    }
    render() {
        return (
            <div>
                <p>
                    My name is {this.state.name}, {this.state.age} years old &amp; live in{' '}
                    {this.state.address}
                </p>
                <form onSubmit={this.handleOnSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Your name: </label>
                                </td>
                                <td>
                                    <input
                                        onChange={(event) => this.handleOnChangeInput(event)}
                                        type="text"
                                        value={this.state.name}
                                        name="firstInput"
                                    // placeholder="input name"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Your age: </label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        onChange={(event) => this.handleOnChangeAge(event)}
                                        onKeyDown={(event) => this.handleKeyDown(event)}
                                        value={this.state.age}
                                        name="lastInput"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button type="submit">Submit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default UserInfo;
