import { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import Radium from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'sada', name: "Rahul", age: 31 },
      { id: 'fdsfd', name: "Urvi", age: 30 },
      { id: 'fghgfh', name: "Dhviti", age: 4 },
    ],
    showPersons: false,
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
    this.setState({ showPersons: !doesShow })
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.OnNameChangeHandler}
          />
        </div>
      )
    }
    return (
      <div className="App" >
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.ToggleHandler}
        />
        {persons}
      </div>
    );
  }

  //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App'));
}

// export default Radium(App);
export default App;
