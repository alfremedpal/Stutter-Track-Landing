import React from 'react'

import classes from './Tag.module.css'

export default function Tag(props) {

    const bgcolor = type => {
        if(type === 'gray') {
            return '#999'
        } else if (type === 'green') {
            return '#90EE90'
        } else if (type === 'red') {
            return '#F08080'
        } else if (type === 'yellow') {
            return '#FFD700'
        } else if (type === 'blue') {
            return '#87CEEB'
        } else if (type === 'orange') {
            return '#ff803b'
        }
    }

    return (
        <div className={classes.main} style={{backgroundColor:bgcolor(props.type)}}>
            {props.children}
        </div>
    )
}