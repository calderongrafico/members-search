import React, { Component } from 'react';

import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'

import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      members: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((dataMembers) => this.setState( { members: dataMembers } ));
  }

  // 'this.' funciona correctamente sin necesidad de bindear 
  // porque estamos usando una arrow function, 
  // que setea automáticamente el contexto de la función
  handleSearch = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    // es lo mismo que:
    // const members = this.state.members
    // const searchFiel = this.state.searchField
    const { members, searchField } = this.state;
    const filteredMembers = members.filter((member) => {
      return member.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Members search app</h1>
        <SearchBox placeholder="Search a member" handleSearch={this.handleSearch}/>
        <CardList members={filteredMembers} />
      </div>
    )
  }
}

export default App;
