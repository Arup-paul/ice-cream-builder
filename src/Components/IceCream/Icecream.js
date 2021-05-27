import React from 'react'
import classes from './icecream.module.css'

const Icecream = () => {
    return (
        <div>
            <div className={classes.icecream}>
                <p className={classes.cone}></p>
                {/*scope component*/}
                <div className={classes.cherry}  />

            </div>
        </div>
    )
}

export default Icecream;