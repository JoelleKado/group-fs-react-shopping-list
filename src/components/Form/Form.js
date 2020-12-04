// imports
import React, { Component } from 'react';
import { VscSaveAs } from 'react-icons/vsc';
// class
class Form extends Component {
  render() {
    return (
      <>
        <div>
          <h1> Add Item </h1>
          <label>Item: </label>
          <input
            type='text'
            placeholder='Item'
            // value={###SET this value to state which gets emptied}
            onChange={this.props.handleChangeFor('name')}
          />
        </div>
        <div>
          <label>Quantity: </label>
          <input
            type='text'
            placeholder='#'
            // value={###SET this value to state which gets emptied}
            onChange={this.props.handleChangeFor('quantity')}
          />
          <label> Unit: </label>
          <input
            type='text'
            placeholder='lbs/bunch/bundle/oz'
            // value={###SET this value to state which gets emptied}
            onChange={this.props.handleChangeFor('unit')}
          />
        </div>
        <span role='button' aria-pressed='false' className='saveBtn'>
          <VscSaveAs />
        </span>
      </>
    ); // end return
  } // end render
} // end class

// export
export default Form;
