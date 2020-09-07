import React from 'react'
import classes from './Roadmap.module.css'

export default function Roadmap() {

    return (
        <>
            <div className={classes.main}>
                <h1>Roadmap</h1>
                <p>
                    These are the <i>tentative</i> dates for releasing the core features of the 
                    Stutter Track web app. They are all subject to change depending on various factors.
                    If you want to support us you can either 
                    <a> buy us a coffee </a>
                    or send us an email to contribute to the project.
                </p>
            </div>
        </>
    )
}