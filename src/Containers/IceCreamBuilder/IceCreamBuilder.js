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

   addScope = (scoop) => {
      const { scoops,items } = this.state;
      const workingScoops = [...scoops];
      workingScoops.push(scoop);

      this.setState({
         scoops:workingScoops,
         totalPrice: items[scoop],

      });
   }


    removeScope = (scoop) => {
        const { scoops,items } = this.state;
        const workingScoops = [...scoops];
        const scoopIndex = workingScoops.findIndex(sc => sc == scoop);

        workingScoops.splice(scoopIndex,1);

        this.setState({
            scoops:workingScoops,
            totalPrice: items[scoop],

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
