import React from 'react';
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
        address: 'Ho Chi Minh City',
    };
    handleMouseOver(event) {
        //console.log(event.pageX);
    }
    handleClick(event) {
        console.log('You just click me!!');
        console.log(event.target);
        //console.log('My name is ', this.state.name);
        this.setState({
            name: 'Khang',
            age: Math.floor(Math.random() * 100 + 1),
        });
    }
    //solution 3:
    // handleClick = (event) => {
    //     console.log("You just click me!!");
    //     console.log(event.target);
    //     //console.log('My name is ', this.state.name);
    //     this.setState({
    //         name: 'Khang',
    //         age: Math.floor(Math.random() * 100 + 1)
    //     })
    // }
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };
    handleOnSubmit = (event) => {
        //prevent default action of submit
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <p>
                    My name is {this.state.name}, {this.state.age} years old &amp; live in{' '}
                    {this.state.address}
                </p>
                {/* <button onMouseOver={this.handleMouseOver}>Over me</button>
                <button onClick={(event) => this.handleClick(event)}>Click me</button> */}
                {/* <button onClick={this.handleClick}>Click me</button> */}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        onChange={(event) => this.handleOnChangeInput(event)}
                        type="text"
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default MyComponent;
