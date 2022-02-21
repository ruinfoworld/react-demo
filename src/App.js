import { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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
          {
            this.state.persons.map((person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.OnNameChangeHandler(event, person.id)}
              />
            })
          }
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.ChangeNameHandler.bind(this, 'Rahul!!!!')}
            changed={this.OnNameChangeHandler} >My Hobbies : Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      )
    }
    const clasess = [];
    if (this.state.persons.length <= 2) {
      clasess.push('red');
    }
    if (this.state.persons.length <= 1) {
      clasess.push('bold');
    }
    return (
      <div className="App" >
        <h1>Hi, I'm a React App</h1>
        <p className={clasess.join(" ")}>This is really working!!</p>
        {/* <button onClick={() => this.ChangeNameHandler("Rahul321")}>Switch Name</button> */}
        <button onClick={this.ToggleHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }

  //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App'));
}

export default App;
