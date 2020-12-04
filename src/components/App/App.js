import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList.js';
import Header from '../Header/Header';
import Form from '../Form/Form';
import ShoppingListHeader from '../ShoppingListHeader/ShoppingListHeader';

class App extends Component {
  state = {
    shoppingList: [],
  };

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      shoppingList: {
        ...this.state.shoppingList,
        [propertyName]: event.target.value,
      },
    });
  };

  componentDidMount() {
    console.log('COMPONENT DID MOUNT');

    this.getShoppingList();
  }

  getShoppingList = () => {
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
  }; //end shoppinglist

  deleteShoppingItem = (id) => {
    axios
      .delete('/shopping_list', { params: { id: id } })
      .then((response) => {
        console.log('Response:', response);
      })
      .catch((error) => {
        alert('WHOOPS!');
        console.log('Error:', error);
      });
    this.getShoppingList();
  };

  render() {
    return (
      <div className='App'>
        <Header />
<<<<<<< HEAD
        <ShoppingListHeader />
        <Form handleChangeFor={this.handleChangeFor} />
=======
>>>>>>> master
        <main>
          <Form handleChangeFor={this.handleChangeFor} />
          <ul>
            <ShoppingList shoppingListProp={this.state.shoppingList} />
          </ul>
        </main>
      </div>
    ); //end return
  } //end render
}

export default App;
