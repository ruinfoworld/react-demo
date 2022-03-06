import React, { Component } from 'react';
import Person from './Person/Person';

//const persons = (props) => {
class persons extends Component {
    constructor(props) {
        super(props);
        console.log('Persons.js inside constructor', props);
    }
    componentWillMount() {
        console.log('Persons.js inside componentWillUnmount()');
    }
    componentDidMount() {
        console.log('Persons.js inside componentDidMount()');
    }
    render() {
        console.log('Persons.js inside render()');
        return (

            this.props.persons.map((person, index) => {
                return <Person
                    name={person.name}
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            })
        )
    }
}
export default persons;