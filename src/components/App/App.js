import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList.js'
import Header from '../Header/Header';

class App extends Component {  //
  state = {  
    shoppingList: [],
  };

  componentDidMount() { 
    console.log('COPONENT DID MOUNT');

    this.getShoppingList();
  }

  getShoppingList = () => {//
    axios.get('/shopping_list')
    .then((response) => { 
      console.log('Response:', response);
      this.setState({ 
        shoppingList: response.data
    })})
      .catch((error) => { 
        alert('WHOOPS! Something bad happened!');
        console.log('Error:', error);
      });
    }//end shoppinglist
    
  render() {//
    return (//
      <div className="App">
        <Header />
        <main>
          <p>Under Construction...</p>
          <ul>
        <ShoppingList shoppingListProp={this.state.shoppingList}/>
          </ul>
        </main>
      </div>
    );
  }//end render

}
  
export default App;