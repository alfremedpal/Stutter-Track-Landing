import React from 'react'

import Tasks from '../../components/Tasks/Tasks'
import classes from './Roadmap.module.css'

export default function Roadmap() {

    return (
        <>
            <div className={classes.main}>
                <h1>Roadmap</h1>
                <p>
                    These are the <i>tentative</i> dates for releasing the core <a href="/#features">features</a> of the 
                    Stutter Track web app. They are all subject to change depending on various factors.
                    If you want to support us you can either 
                    <a href="https://www.buymeacoffee.com/amedpal" target="_blank" rel="noopener noreferrer"> buy me a coffee </a>
                    or <a href="/contact">send me an email</a> to contribute to the project.
                </p>
                <p>
                    <i>Last update: July 13th, 2021</i>
                </p>
                <Tasks />
            </div>
        </>
    )
}