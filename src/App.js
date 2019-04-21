import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch('/api/groups');
    const body = await response.json();
    this.setState({ groups: body, isLoading: false });
  }

  render() {
    const {groups, isLoading} = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }

  return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>JUG List</h2>
              {groups.map(group =>
                <div key={group.id}>
                  {group.name}
                </div>
              )}
            </div>
            <div>
              <Button variant="contained" color="primary">
                  Hello World
              </Button>
            </div>
          </header>
        </div>
      );
    }
  }

export default App;
