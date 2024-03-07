import React from "react";
class MyComponent extends React.Component {
    //JSX
    //Solution 1:
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: 'Kenzongo',
    //         age: 24,
    //         address: 'Ho Chi Minh City'
    //     }
    //     this.handleClick = this.handleClick.bind(this)
    //     this.handleMouseOver = this.handleMouseOver.bind(this)
    // }
    //Solution 2
    state = {
        name: 'Kenzongo',
        age: 24,
        address: 'Ho Chi Minh City'
    }
    handleMouseOver(event) {
        //console.log(event.pageX);
    }
    handleClick(event) {
        console.log("You just click me!!");
        console.log(event.target);
        //console.log('My name is ', this.state.name);
        this.setState({
            name: 'Khang',
            age: Math.floor(Math.random() * 100 + 1)
        })
    }
    render() {
        return (
            <div>
                <p>
                    My name is {this.state.name}, {this.state.age} years old &amp; live in {this.state.address}
                </p>
                <button onMouseOver={this.handleMouseOver}>Over me</button>
                <button onClick={(event) => this.handleClick(event)}>Click me</button>
            </div>
        );
    }
}
export default MyComponent;