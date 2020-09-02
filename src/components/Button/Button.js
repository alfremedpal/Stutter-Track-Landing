import React from 'react'

import classes from './Button.module.css'
export default function Button(props) {

    return(
        <button 
            className={classes.button} 
            onClick={props.onClick}
            style={props.style}
        >
            {props.children}
        </button>
    )
}