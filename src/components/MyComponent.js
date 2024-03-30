import React, { useState } from 'react';
import DisplayInfo from './DisplayInfo';
import AddUserInfo from './AddUserInfo';
// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             listUser: [
//                 { id: 1, name: 'Khang', age: '24', address: 'Ho Chi Minh City' },
//                 { id: 2, name: 'KenzoNgo', age: '16', address: 'Tra Vinh' },
//                 { id: 3, name: 'OverDev', age: '29', address: 'Hanoi' },
//             ]
//         }
//     }
//     //JSX
//     //Solution 1:
//     // constructor(props) {
//     //     super(props)
//     //     this.state = {
//     //         name: 'Kenzongo',
//     //         age: 24,
//     //         address: 'Ho Chi Minh City'
//     //     }
//     //     this.handleClick = this.handleClick.bind(this)
//     //     this.handleMouseOver = this.handleMouseOver.bind(this)
//     // }
//     //Solution 2
//     // state = {
//     //     name: 'Kenzongo',
//     //     age: 24,
//     //     address: 'Ho Chi Minh City',
//     // };
//     // handleMouseOver(event) {
//     //     //console.log(event.pageX);
//     // }
//     // handleClick(event) {
//     //     console.log('You just click me!!');
//     //     console.log(event.target);
//     //     //console.log('My name is ', this.state.name);
//     //     this.setState({
//     //         name: 'Khang',
//     //         age: Math.floor(Math.random() * 100 + 1),
//     //     });
//     // }
//     //solution 3:
//     // handleClick = (event) => {
//     //     console.log("You just click me!!");
//     //     console.log(event.target);
//     //     //console.log('My name is ', this.state.name);
//     //     this.setState({
//     //         name: 'Khang',
//     //         age: Math.floor(Math.random() * 100 + 1)
//     //     })
//     // }
//     handleAddUser = (objUser) => {
//         this.setState({
//             listUser: [objUser, ...this.state.listUser]
//         })
//     }
//     handleDeleteUser = (userID) => {
//         this.setState({
//             listUser: [...this.state.listUser].filter(user => user.id !== userID)
//         })
//     }
//     render() {
//         //const arr = [1, 2, 3, 4, 5]
//         return (
//             <>
//                 <div className='a'>
//                     <AddUserInfo handleAddUser={this.handleAddUser} />
//                     <br />
//                     <br />
//                     {/* <DisplayInfo name="Kenzo" age="24" arr={arr} />
//                     <DisplayInfo name="Khang" age="18" arr={arr} /> */}
//                     <DisplayInfo listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser} />
//                 </div>
//                 <div className='b'>

//                 </div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUser, setListUser] = useState([
        { id: 1, name: 'Khang', age: '24', address: 'Ho Chi Minh City' },
        { id: 2, name: 'KenzoNgo', age: '16', address: 'Tra Vinh' },
        { id: 3, name: 'OverDev', age: '29', address: 'Hanoi' },
    ])
    const handleAddUser = (objUser) => {
        this.setState({
            listUser: [objUser, ...listUser]
        })
    }
    const handleDeleteUser = (userID) => {
        setListUser([...listUser].filter(user => user.id !== userID))
    }
    return (
        <>
            <div className='a'>
                <AddUserInfo handleAddUser={handleAddUser} />
                <br />
                <br />
                {/* <DisplayInfo name="Kenzo" age="24" arr={arr} />
                    <DisplayInfo name="Khang" age="18" arr={arr} /> */}
                <DisplayInfo listUser={listUser} handleDeleteUser={handleDeleteUser} />
            </div>
            <div className='b'>

            </div>
        </>
    );
}
export default MyComponent;
