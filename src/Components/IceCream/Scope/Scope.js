import React from 'react'
 import classes from './scope.module.css'
const Scope = ({ scoop }) => {
    return  <div className={[classes.scoop,classes[scoop]].join(' ')} />
}

export default Scope;