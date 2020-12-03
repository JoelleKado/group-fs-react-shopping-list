import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  state = {
    shoppingList: [],
  };

  getStudentList = () => {
    axios
      .get('/shopping_list')
      .then((response) => {
        console.log('Response:', response);
        this.setState({
          shoppingList: response.data,
        });
      })
      .catch((error) => {
        alert('WHOOPS! Something bad happened!');
        console.log('Error:', error);
      });
  };

  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <Header />
=======
      <div className='App'>
        <header className='banner-header'>
          <h1>My Shopping List</h1>
        </header>
>>>>>>> master
        <main>
          <p>Under Construction...</p>
        </main>
      </div>
    );
  }
}

export default App;
