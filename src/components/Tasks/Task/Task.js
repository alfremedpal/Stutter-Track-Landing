import React from 'react'

import Tag from '../../../components/Tag/Tag'
import classes from './Task.module.css'

export default function Task(props) {

    return (
        <div className={classes.main}>
            <h2>{props.name}</h2>
            <span>{props.due}</span>
            <p>
                {props.children}
            </p>
            {
                props.tags.map((tag, i) => (
                    <Tag key={i} type={tag.type}>
                        {tag.name}    
                    </Tag>
                ))
            }
        </div>
    )
}