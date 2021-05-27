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
        scoops:[],
        totalPrice:0,
    };

   addScope = (scope) => {
      const { scoops,items } = this.state;
      const workingScoops = [...scoops];
      workingScoops.push(scope);

      this.setState({
         scoops:workingScoops,
         totalPrice: items[scope],

      });
   }



   render() {
       const { items,totalPrice } = this.state;
       return (
           <div className={[classes.container,'container'].join(' ')}>
               <Icecream />
               <Builder items={items} price={totalPrice} />
           </div>
       )
   }
}
