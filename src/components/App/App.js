import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  
  state = {
    shoppingList: []
  }

  getStudentList = () => {
    axios.get('/shopping_list')
    .then((response) => {
      console.log('Response:', response);
      this.setState({
        shoppingList: response.data
      })
    })
    .catch((error)=> {
      alert('WHOOPS! Something bad happened!');
      console.log('Error:', error);
    })
}
  
  render() {
    return (
      <div className="App">
        <header className="banner-header">
          <h1>My Shopping List</h1>
        </header>
        <main>
          <p>Under Construction...</p>
        </main>
      </div>
    );
  }
}

export default App;
