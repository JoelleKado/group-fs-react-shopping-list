import React, { Component } from 'react';

class ShoppingList extends Component {
  render() {
    console.log('Here is our shopping List', this.props.shoppingListProp);
    return (
      <>
        <p>HI FROM ShoppingList</p>
        {this.props.shoppingListProp.map((item) => (
          <li key={item.id}>
            {item.name} {item.quantity} {item.unit} {item.purchased}
          </li>
        ))}
      </>
    );
  }
}

export default ShoppingList;
