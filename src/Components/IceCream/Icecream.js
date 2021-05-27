import React from 'react'
import classes from './icecream.module.css'
import Scope from "./Scope/Scope";

const Icecream = () => {
    return (
        <div>
            <div className={classes.icecream}>
                <p className={classes.cone}></p>
                <Scope />
                <div className={classes.cherry}  />

            </div>
        </div>
    )
}

export default Icecream;