// imports
import React, { Component } from 'react';

// class
class ShoppingListHeader extends Component{
    render(){
        return(
            <div>
                <h1>Shopping List</h1>
                <button>Reset</button>
                <button>Clear</button>
            </div>
        ) // end return
    } // end render
}// end class

// export
export default ShoppingListHeader;