import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList.js'
import Header from '../Header/Header';
import Form from '../Form/Form';

class App extends Component {  //
  state = {
    shoppingList: [

      //-----DUMMY DATA---------
      // {
      //   id: 1,
      //   name: 'potatoe',
      //   quantity: 7,
      //   unit: 'lb',
      //   purchased: 'oz'
      // },
      // {
      //   id: 2,
      //   name: 'banana',
      //   quantity: 3,
      //   unit: '1',
      //   purchased: 'lb'
      // }

//<<<<<<< HEAD
     ]}
// =======
// <<<<<<< HEAD

// =======
  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      shoppingList: {
        ...this.state.shoppingList, //this is not correct and needs to be adjusted
        [propertyName]: event.target.value,
      },
    });
// >>>>>>> master
  };
// >>>>>>> master

// <<<<<<< HEAD

// handleChangeFor = (event) => {
//   console.log('in handleChangeFor');
  
// }

  componentDidMount() {
    console.log('COPONENT DID MOUNT');

    this.getShoppingList();
  }

  getShoppingList = () => {
// =======
  // getStudentList = () => {
// >>>>>>> master
    axios.get('/shopping_list')
      .then((response) => {
        console.log('Response:', response);
        this.setState({
          shoppingList: response.data
        })
      })
      .catch((error) => {
        alert('WHOOPS! Something bad happened!');
        console.log('Error:', error);
      });
  }//end shoppinglist

// <<<<<<< HEAD
//   render() {//
// =======
  deleteShoppingItem = () => {
    axios.delete('/shopping_list, {params: { id: id }}' )
    .then((response) => {
      console.log('Response:', response);
    })
    .catch((error)=> {
      alert('WHOOPS!');
      console.log('Error:', error);
    })
    this.getShoppingList();
  }
  

  render() {
// >>>>>>> master
    return (
      <div className='App'>
        <Header />
        <Form handleChangeFor={this.handleChangeFor} />
        <main>
          <p>Under Construction...</p>
          <ul>
            <ShoppingList shoppingListProp={this.state.shoppingList} />
          </ul>
        </main>
      </div>
    );//end return
  }//end render

}

export default App;