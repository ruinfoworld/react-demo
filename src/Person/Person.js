import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>Hi, I'm a {props.name}!!!, I am a {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
        </div>
    )
}
export default person;