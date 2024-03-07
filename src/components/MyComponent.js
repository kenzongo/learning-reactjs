import React from "react";
class MyComponent extends React.Component {
    //JSX
    state = {
        name: 'Kenzongo',
        age: 24,
        address: 'Ho Chi Minh City'
    }
    render() {
        return (
            <div>
                <p>
                    My name is {this.state.name}, {this.state.age} years old &amp; live in {this.state.address}
                </p>
            </div>
        );
    }
}
export default MyComponent;