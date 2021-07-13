import React from 'react'

import classes from '../Contact/Contact.module.css'

export default function OpenSource() {

    return(
        <>
            <div className={classes.main}>
                <h1>Open Source</h1>
                <p>
                    If you want to contribute to this project please feel free to check out the repositories:
                    <ul>
                        <li>
                            <a href="https://github.com/alfremedpal/Stutter-Track-Landing" target="_blank" rel="noopener noreferrer">
                                Landing page
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/alfremedpal/Stutter-Track-App" target="_blank" rel="noopener noreferrer">
                                Web app
                            </a>
                        </li>
                        <li>
                            Back end <small>(coming soon)</small>
                        </li>
                    </ul>
                </p>
            </div>
        </>
    )
}