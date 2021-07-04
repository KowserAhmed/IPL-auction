import React from 'react';
import './Cart.css'

const Cart = (props) => {
     const info=props.cart
    let total=0
    for(let i=0;i<info.length;i++){
        total+= info[i].salary

    }
   
    return (
        <div>
            <h2>Selected {info.length} Players</h2>
             <h2>Spend: ${total}</h2>
           {
               info.map(player => (
                   <div className="selected-player">
                       <img src={player.image} alt="" />
                       <h4>{player.name}</h4>
                   </div>
               )
            
               )
           } 
          
            
        </div>
    );
};

export default Cart;