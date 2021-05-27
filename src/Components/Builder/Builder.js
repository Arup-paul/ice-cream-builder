import React from 'react'
import classes from './builder.module.css'
const Builder = () => {
    return (
        <div>
            <div className="builder">
                <h3>Build your own Ice Cream Sundae</h3>

                {/*  Items will be here*/}

                {/*total price*/}

                <button type="button"  className={[classes.order,  'rounded'].join(' ')}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Builder;