import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Global from '../hoc/global';
import withClass from '../hoc/WithClass';
// import Radium from 'radium';

export const AuthExport = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js inside constructor', props);
  }
  componentWillMount() {
    console.log('App.js inside componentWillUnmount()');
  }
  componentDidMount() {
    console.log('App.js inside componentDidMount()');
  }
  state = {
    persons: [
      { id: 'sada', name: "Rahul", age: "31" },
      { id: 'fdsfd', name: "Urvi", age: 30 },
      { id: 'fghgfh', name: "Dhviti", age: 4 },
    ],
    showPersons: false,
    toggleClicked: 0,
    isAuthenticated: false
  }

  ChangeNameHandler = (NewName) => {
    this.setState({
      persons: [
        { name: NewName, age: 31 },
        { name: "Urvi", age: 30 },
        { name: "Dhviti", age: 5 },
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  OnNameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({ persons: persons });

    // this.setState({
    //   persons: [
    //     { name: "Rahul", age: 31 },
    //     { name: event.target.value, age: 30 },
    //     { name: "Dhviti", age: 5 },
    //   ]
    // })
  }

  ToggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  shouldComponentUpdate(nextprops, nextstates) {
    console.log('Update App.js inside UNSAFE_componentWillReceiveProps()', nextprops, nextstates);
    return true;
  }
  UNSAFE_componentWillUpdate(nextprops, nextstates) {
    console.log('Update App.js inside UNSAFE_componentWillUpdate()', nextprops, nextstates);
  }
  componentDidUpdate() {
    console.log('Update App.js inside componentDidUpdate()');
  }

  LoginHandler = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated })
  }

  render() {
    console.log('App.js inside render()');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.OnNameChangeHandler}
            isauthenticated={this.state.isAuthenticated}
          />
        </div>
      )
    }
    return (
      <Global>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.ToggleHandler}
          login={this.LoginHandler}
        />
        <AuthExport.Provider value={this.state.isAuthenticated}>{persons}</AuthExport.Provider>
      </Global>
    );
  }

  //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App'));
}

// export default Radium(App);
export default withClass(App, "App");
