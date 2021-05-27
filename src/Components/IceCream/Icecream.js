import React from 'react'
import classes from './icecream.module.css'
import Scope from "./Scope/Scope";

const Icecream = ({ scoops }) => {
    // const flavors = Object.keys(scoops);
    return (
        <div>
            <div className={classes.icecream}>
                <p className={classes.cone}></p>
                {scoops.map((scoop) => (
                    <Scope key={`${scoop}${Math.random()}`} scoop={scoop} />
                ))}

                <div className={classes.cherry}  />

            </div>
        </div>
    )
}

export default Icecream;