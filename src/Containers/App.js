import React, { Component } from 'react';
import CardList from '../Presentations/CardList';
import SearchBox from '../Presentations/SearchBox';
import Scroll from '../Presentations/Scroll';
import Error from '../Presentations/Error';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFamily</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
          <Error>
            <CardList robots={filteredRobots} />
          </Error>
        </Scroll>
        </div>
      );
  }
}

export default App;