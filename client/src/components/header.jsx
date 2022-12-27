import React from "react";
import { Component } from "react";
import '../css/header.css';
import Shoppingcart from '../img/shopping-cart.png';
export default class header extends Component {
    render() {
        return(
            <header>
                <ul>
                    <li id="logo_name">SHOP<span style={{backgroundColor: "orange", color:"white"}}> ING</span></li>
                    <li id="tool_ul">
                        
                        <button>Buy Now</button>
                        
                        <img src={Shoppingcart} width="30"  alt="shopping-cart"/>
                        <label style={{color: "green"}}>{this.props.num}</label>
                    </li> 
                </ul>
            </header>
        )
    }
}