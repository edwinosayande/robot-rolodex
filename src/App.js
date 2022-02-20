import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-components';
import {SearchBox} from './components/search-box/search-box-components';



class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }
  render(){
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase()));
  return (
    <div className='App'>
      <h1>Robots Rolodex</h1>
       <SearchBox
        placeholder='Search Robots'
        handleChange={e => this.setState({ searchField: e.target.value })}
       />
      <CardList robots={filterRobots} />
    </div>
  );
}
}

export default App;
