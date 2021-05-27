import React from 'react'
import classes from './builder.module.css'
import Items from "./Items/Items";
import Totalprice from "./TotalPrice/Totalprice";
import Modal from "./Modal/Modal";

const Builder = () => {
    return (
        <div>
            <div className="builder">
                <h3>Build your own Ice Cream Sundae</h3>

                 <Items />
                 <Totalprice />

                <button type="button"  className={[classes.order,  'rounded'].join(' ')}>
                    Add to Cart
                </button>
            </div>
            <Modal>
                Hello MOdal
            </Modal>
        </div>
    )
}

export default Builder;