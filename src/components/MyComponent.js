import React from "react";
class MyComponent extends React.Component {
    //JSX
    state = {
        name: 'Kenzongo',
        age: 24,
        address: 'Ho Chi Minh City'
    }
    handleMouseOver(event) {
        console.log(event.pageX);
    }
    handleClick(event) {
        console.log("You just click me!!");
        console.log(event.target);
    }
    render() {
        return (
            <div>
                <p>
                    My name is {this.state.name}, {this.state.age} years old &amp; live in {this.state.address}
                </p>
                <button onMouseOver={this.handleMouseOver}>Over me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}
export default MyComponent;