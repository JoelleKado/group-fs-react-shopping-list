import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';

class App extends Component {
  state = {
    shoppingList: [],
  };

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      shoppingList: {
        ...this.state.shoppingList, //this is not correct and needs to be adjusted
        [propertyName]: event.target.value,
      },
    });
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
      <div className='App'>
        <Header />
        <Form handleChangeFor={this.handleChangeFor} />
        <main>
          <p>Under Construction...</p>
        </main>
      </div>
    );
  }
}

export default App;
