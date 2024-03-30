import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

// class AddUserInfo extends React.Component {
//     state = {
//         name: '',
//         age: '',
//         address: '',
//     };
//     handleOnChangeName = (event) => {
//         this.setState({
//             name: event.target.value
//         });
//     };
//     handleOnSubmit = (event) => {
//         //prevent default action of submit
//         event.preventDefault();
//         if (event.target.name === 'lastInput' || event.target.name === 'submit') {
//             this.props.handleAddUser({
//                 id: uuidv4(),
//                 name: this.state.name,
//                 age: this.state.age,
//                 address: this.state.address
//             })
//         }
//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         });
//     }
//     handleOnChangeAddress = (event) => {
//         this.setState({
//             address: event.target.value
//         })
//     }
//     handleKeyDown = (event) => {
//         if (event.key === 'Enter') {
//             this.handleOnSubmit(event);
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <p>
//                     My name is {this.state.name}, {this.state.age} years old &amp; live in {this.state.address}
//                 </p>
//                 <form onSubmit={this.handleOnSubmit}>
//                     <table>
//                         <tbody>
//                             <tr>
//                                 <td>
//                                     <label htmlFor="yourname">Your name: </label>
//                                 </td>
//                                 <td>
//                                     <input
//                                         onKeyDown={(event) => this.handleKeyDown(event)}
//                                         onChange={(event) => this.handleOnChangeName(event)}
//                                         type="text"
//                                         value={this.state.name}
//                                         name="firstInput"
//                                         id="yourname"
//                                         autoComplete="on"
//                                     // placeholder="input name"
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <label htmlFor="age">Your age: </label>
//                                 </td>
//                                 <td>
//                                     <input
//                                         onKeyDown={(event) => this.handleKeyDown(event)}
//                                         type="text"
//                                         onChange={(event) => this.handleOnChangeAge(event)}
//                                         value={this.state.age}
//                                         name="secondInput"
//                                         id="age"
//                                         autoComplete="on"
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <label htmlFor="address">Your address: </label>
//                                 </td>
//                                 <td>
//                                     <input
//                                         onKeyDown={(event) => this.handleKeyDown(event)}
//                                         onChange={(event) => this.handleOnChangeAddress(event)}
//                                         type="text"
//                                         value={this.state.address}
//                                         name="lastInput"
//                                         id="address"
//                                         autoComplete="on"
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td></td>
//                                 <td>
//                                     <button
//                                         onClick={(event) => this.handleOnSubmit(event)}
//                                         name="submit"
//                                     >Submit
//                                     </button>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </form>
//             </div>
//         );
//     }
// }

const AddUserInfo = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const handleOnChangeName = (event) => {
        setName(event.target.value)
    };
    const handleOnSubmit = (event) => {
        //prevent default action of submit
        event.preventDefault();
        if (event.target.name === 'lastInput' || event.target.name === 'submit') {
            props.handleAddUser({
                id: uuidv4(),
                name,
                age,
                address
            })
        }
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }
    const handleOnChangeAddress = (event) => {
        setAddress(event.target.value)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.handleOnSubmit(event);
        }
    }
    return (
        <div>
            <p>
                My name is {name}, {age} years old &amp; live in {address}
            </p>
            <form onSubmit={handleOnSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="yourname">Your name: </label>
                            </td>
                            <td>
                                <input
                                    onKeyDown={(event) => handleKeyDown(event)}
                                    onChange={(event) => handleOnChangeName(event)}
                                    type="text"
                                    value={name}
                                    name="firstInput"
                                    id="yourname"
                                    autoComplete="on"
                                // placeholder="input name"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="age">Your age: </label>
                            </td>
                            <td>
                                <input
                                    onKeyDown={(event) => handleKeyDown(event)}
                                    type="text"
                                    onChange={(event) => handleOnChangeAge(event)}
                                    value={age}
                                    name="secondInput"
                                    id="age"
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="address">Your address: </label>
                            </td>
                            <td>
                                <input
                                    onKeyDown={(event) => handleKeyDown(event)}
                                    onChange={(event) => handleOnChangeAddress(event)}
                                    type="text"
                                    value={address}
                                    name="lastInput"
                                    id="address"
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button
                                    onClick={(event) => handleOnSubmit(event)}
                                    name="submit"
                                >Submit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default AddUserInfo;
