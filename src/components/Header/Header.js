// imports
import React, { Component } from 'react';
import './Header.css';

// class
class Header extends Component{
    render(){
        return(
            <>
                <header className="headerCoolness">
                    <h1>My Shopping List</h1>
                </header>
            </>
        ) // end return
    } // end render
}// end class

// export
export default Header;