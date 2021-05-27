import React from 'react'
 import classes from './scope.module.css'
const Scope = ({ scope }) => {
    return (
        <div className={[classes.scoop,classes[scope]].join(' ')}>

        </div>
    )
}

export default Scope;