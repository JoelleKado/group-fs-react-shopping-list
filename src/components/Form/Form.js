// imports
import React, { Component } from 'react';

// class
class Form extends Component{
    // state = {
    //     name: '',
    //     quantity: '',
    //     unit: ''
    // }



    // handleChangeFor = (propertyName) => (event) => {
    //     this.setState({
    //         shoppingList: {
    //             ...this.state.shoppingList,//this is not correct and needs to be adjusted
    //             [propertyName]: event.target.value,
    //         }
    //     });
    // }


    render(){
        return(
            <>
                <div>
                    <h1> Add Item </h1>
                    <label>Item: </label>
                    <input 
                        type="text"
                        placeholder="Item"
                        // value={###SET this value to state which gets emptied}
                        onChange={this.handleChangeFor('name')}
                        />
                </div>
                <div>
                    <label>Quantity: </label>
                    <input
                        type="text"
                        placeholder="#"
                        // value={###SET this value to state which gets emptied}
                        onChange={this.handleChangeFor('quantity')}
                    />
                    <label> Unit: </label>
                    <input
                    type="text"
                    placeholder="lbs/bunch/bundle/oz"
                    // value={###SET this value to state which gets emptied}
                    onChange={this.handleChangeFor('unit')}
                    />                    
                </div>
                <button>Save</button>
            </>
        ) // end return
    } // end render
}// end class

// export
export default Form;