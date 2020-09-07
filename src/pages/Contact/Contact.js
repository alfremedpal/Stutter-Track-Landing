import React from 'react'

import classes from './Contact.module.css'

export default function Contact() {

    return(
        <>
            <div className={classes.main}>
                <h1>Contact</h1>
                <p>
                    If you have any doubts, you want to contribute in any way to the project, or you simply want to say hi,
                    leave me an email <a href="mailto:info@amedpal.com">info@amedpal.com</a>.
                </p>
            </div>
        </>
    )
}