import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';

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

  deleteShoppingItem = () => {
    axios.delete('/shopping_list', {params: {id: id}})
    .then((response) => {
      console.log('Response:', response);
    })
    .catch((error) => {
      alert('WHOOPS! Something bad happened!');
      console.log('Error:', error);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <main>
          <p>Under Construction...</p>
        </main>
      </div>
    );
  }
}

export default App;
