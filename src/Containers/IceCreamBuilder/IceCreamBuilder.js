import React, {Component} from 'react'
import classes from './iceCreamBuilder.module.css'
import Icecream from "../../Components/IceCream/Icecream";
import Builder from "../../Components/Builder/Builder";

export default class IceCreamBuilder  extends Component {
    state = {};
   render() {
       return (
           <div className={[classes.container,'container'].join(' ')}>
             <Icecream />
               <Builder />
           </div>
       )
   }
}
