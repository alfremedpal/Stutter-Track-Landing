import React from 'react'

import classes from './MailInput.module.css'

export default function MailInput() {

    return (
        <div className={classes.main}>
            <input 
                className={classes.input}
                type="text"
                placeholder="Your email"
            />
            <button
                className={classes.button}
            >
                Request early access
            </button>
        </div>
    )
}