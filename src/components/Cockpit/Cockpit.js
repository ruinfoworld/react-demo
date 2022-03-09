import React from "react";
import Global from "../../hoc/global";
const Cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        padding: '16px',
        border: '1px solid #eee',
    }
    if (props.showPersons) {
        style.backgroundColor = 'red';
    }
    const clasess = [];
    if (props.persons.length <= 2) {
        clasess.push('red');
    }
    if (props.persons.length <= 1) {
        clasess.push('bold');
    }
    return (
        <Global>
            <h1>Hi, I'm a React App</h1>
            <p className={clasess.join(" ")}>This is really working!!</p>
            {/* <button onClick={() => this.ChangeNameHandler("Rahul321")}>Switch Name</button> */}
            <button style={style} onClick={props.clicked}>Switch Name</button>
        </Global>
    )
}

export default Cockpit;