import React from "react";
class DisplayInfo extends React.Component {
    render() {
        //console.log(this.props)
        return (
            <div>
                My name's {this.props.name}, I'm {this.props.age} year old
            </div>
        )
    }
}

export default DisplayInfo