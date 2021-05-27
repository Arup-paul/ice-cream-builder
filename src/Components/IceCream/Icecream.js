import React from 'react'
import classes from './icecream.module.css'
import Scope from "./Scope/Scope";

const Icecream = ( { items }) => {
    const flavors = Object.keys(items);
    return (
        <div>
            <div className={classes.icecream}>
                <p className={classes.cone}></p>
                {flavors.map((flavor) => (
                  <Scope key={flavor} scope={flavor}/>
                ))}
                <div className={classes.cherry}  />

            </div>
        </div>
    )
}

export default Icecream;