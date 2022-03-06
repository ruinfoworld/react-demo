import React, { Component } from 'react';
import './Person.css';
// const person = (props) => {
class person extends Component {
    constructor(props) {
        super(props);
        console.log('Person.js inside constructor', props);
    }
    componentWillMount() {
        console.log('Person.js inside componentWillUnmount()');
    }
    componentDidMount() {
        console.log('Person.js inside componentDidMount()');
    }
    render() {
        console.log('Person.js inside render()');
        return (
            <div className='Person'>
                <p onClick={this.props.click}>Hi, I'm a {this.props.name}!!!, I am a {this.props.age} year old</p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed} />
            </div>
        )
    }
}
export default person;