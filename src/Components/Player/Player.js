import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const cart=props.handalerInfo  
 const {image,name,playing_role,salary,country}=props.player
    return (
        <div className='player-list'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h5>Role: {playing_role}</h5>
            <p>Base Price:<strong> {salary}</strong></p>
            <p>Country: {country}</p>
            <Button className="button-style" onClick={()=>cart(props.player)}>
                <FontAwesomeIcon icon={faShoppingBasket} /> Pick</Button>           
        </div>
    );
};

export default Player;