import React, { Component } from 'react';

class ShoppingList extends Component {
  render() {
    console.log('Here is our shopping List', this.props.shoppingListProp);
    return (
      <>
        <div className='list'>
          {this.props.shoppingListProp.map((item) => (
            <li key={item.id}>
              {item.name} {item.quantity} {item.unit} {item.purchased}
            </li>
          ))}
        </div>
      </>
    );
  }
}

export default ShoppingList;
