import React, {Component} from 'react';
//import HeroItem from '../HeroItem/HeroItem.jsx'

class ShoppingList extends Component {
    render(){
        console.log('Here is our shopping List', this.props.shoppingListProp);
        return(
            <>
            <p>HI FROM ShoppingList</p>
            {/* <HeroItem/> */}
       
        {/* {this.props.shoppingListProp.map((item, i) => {
            return (
                <item key={i}/>
            )
        })} */}

         {this.props.shoppingListProp.map((item, i) => 
        <li key={i}>
        {item.name} {item.quantity} {item.unit} {item.purchased}
        </li>)}    
</>
        )
    }
}

export default ShoppingList