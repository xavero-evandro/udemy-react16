import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Xavero', age: 30},
            {name: 'Lalalele', age: 20},
            {name: 'Uhul', age: 10}
        ]
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 30},
                {name: 'Lalalele', age: 20},
                {name: 'Uhul', age: 12}
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Xavero', age: 30},
                {name: event.target.value, age: 20},
                {name: 'Uhul', age: 12}
            ]
        })
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '9px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1>I'm React App</h1>
                <p>This is really working!</p>

                <button
                    style={style}
                    onClick={() => this.switchNameHandler('Bolor')}/*INEFFICIENT BINDING*/>
                    Switch Name
                </button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Dalee')}// EFFICIENT BINDING
                    changed={this.nameChangedHandler}>
                    Hobbies HAHAHA
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
