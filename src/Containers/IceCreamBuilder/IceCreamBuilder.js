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
      const { scoops,items,totalPrice } = this.state;
      const workingScoops = [...scoops];
      workingScoops.push(scoop);

      this.setState((prevState) => {
          return {
              scoops:workingScoops,
              totalPrice: prevState.totalPrice + items[scoop],
          }
      });
   }


    removeScope = (scoop) => {
        const { scoops,items ,totalPrice} = this.state;
        const workingScoops = [...scoops];
        const scoopIndex = workingScoops.findIndex(sc => sc == scoop);

        workingScoops.splice(scoopIndex,1);

        this.setState((prevState) => {
            return {
                scoops:workingScoops,
                totalPrice: prevState.totalPrice - items[scoop],
            }
        });
    }



   render() {
       const { items,totalPrice,scoops } = this.state;
       return (
           <div className={[classes.container,'container'].join(' ')}>
               <Icecream scoops={scoops}/>
               <Builder items={items} price={totalPrice} add={this.addScope} remove={this.removeScope} />
           </div>
       )
   }
}
