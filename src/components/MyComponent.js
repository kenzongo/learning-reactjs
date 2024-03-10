import React from 'react';
import UserInfo from './UserInfo';
import DisplayInfo from './DisplayInfo';
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
    // state = {
    //     name: 'Kenzongo',
    //     age: 24,
    //     address: 'Ho Chi Minh City',
    // };
    // handleMouseOver(event) {
    //     //console.log(event.pageX);
    // }
    // handleClick(event) {
    //     console.log('You just click me!!');
    //     console.log(event.target);
    //     //console.log('My name is ', this.state.name);
    //     this.setState({
    //         name: 'Khang',
    //         age: Math.floor(Math.random() * 100 + 1),
    //     });
    // }
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
    state = {
        listUser: [
            { id: 1, name: 'Khang', age: 24 },
            { id: 2, name: 'KenzoNgo', age: 28 },
            { id: 3, name: 'OverDev', age: 18 },
        ]
    }
    render() {
        //const arr = [1, 2, 3, 4, 5]
        return (
            <div>
                <UserInfo />
                <br />
                <br />
                {/* <DisplayInfo name="Kenzo" age="24" arr={arr} />
                <DisplayInfo name="Khang" age="18" arr={arr} /> */}
                <DisplayInfo listUser={this.state.listUser} />
            </div>
        );
    }
}
export default MyComponent;
