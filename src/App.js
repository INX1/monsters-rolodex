import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: ""
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monster: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const  { monster, searchField } = this.state;
    const filterMonsters = monster.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monster'
          handleChange={this.handleChange}
        />
        <CardList monster={filterMonsters}/>
      </div>
    );
  }
}

export default App;
