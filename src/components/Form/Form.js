// imports
import React, { Component } from 'react';
import { VscSaveAs } from 'react-icons/vsc';
// class
class Form extends Component {
  render() {
    return (
      <>
        <div className='form'>
          <h1> Add Item </h1>
          <label>Item: </label>
          <input
            type='text'
            placeholder='Item'
            // value={###SET this value to state which gets emptied}
            onChange={(event) => this.props.handleChangeFor(event, 'name')}
          />
          <label>Quantity: </label>
          <input
            type='text'
            placeholder='#'
            // value={###SET this value to state which gets emptied}
            onChange={(event) => this.props.handleChangeFor(event, 'quantity')}
          />
          <label> Unit: </label>
          <input
            type='text'
            placeholder='lbs/bunch/bundle/oz'
            // value={###SET this value to state which gets emptied}
            onChange={(event) => this.props.handleChangeFor(event, 'unit')}
          />
          <span role='button' aria-pressed='false' className='saveBtn'>
            <label>Save Item:</label>
            <VscSaveAs />
          </span>
        </div>
      </>
    ); // end return
  } // end render
} // end class

// export
export default Form;
