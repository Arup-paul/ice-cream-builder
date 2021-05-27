import React, {Component} from 'react'
import classes from './iceCreamBuilder.module.css'
import Icecream from "../../Components/IceCream/Icecream";
import Builder from "../../Components/Builder/Builder";

export default class IceCreamBuilder  extends Component {
    state = {
        items: {
            vanilla:40,
            chocolate:60,
            lemon:55,
            orange:42,
            strawberry:30
        },
        scopes:[],
        totalPrice:0,
    };
   render() {
       const { items } = this.state;
       return (
           <div className={[classes.container,'container'].join(' ')}>
               <Icecream items={items} />
               <Builder />
           </div>
       )
   }
}
