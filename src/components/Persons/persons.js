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
    UNSAFE_componentWillReceiveProps(nextprops) {
        console.log('Update Persons.js inside UNSAFE_componentWillReceiveProps()', nextprops);
    }

    shouldComponentUpdate(nextprops, nextstates) {
        console.log('Update Persons.js inside UNSAFE_componentWillReceiveProps()', nextprops, nextstates);
        return true;
    }
    UNSAFE_componentWillUpdate(nextprops, nextstates) {
        console.log('Update Persons.js inside UNSAFE_componentWillUpdate()', nextprops, nextstates);
    }
    componentDidUpdate() {
        console.log('Update Persons.js inside componentDidUpdate()');
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