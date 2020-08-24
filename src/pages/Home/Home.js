import React from 'react'

import Features from '../../components/Features/Features'
import MailInput from '../../components/MailInput/MailInput'
import classes from './Home.module.css'

export default function Home() {

    return (
        <>
            <div className={[classes.hero, "pattern-cross-dots-lg"].join(' ')}>
                <div className={classes.spacer}/>
                <div className={classes.title}>
                    <h1>Keep track of the words you stutter with</h1>
                    <p>
                        Get to know yourself a little bit better by 
                        generating reports about the words you have 
                        trouble with and the situation in which they 
                        occur.
                    </p>
                </div>
                <MailInput />
            </div>
            <div className={classes.section}>
                <h2 className={classes.header}>Features</h2>
                <Features />
            </div>
            <div className={[classes.dotSection, "pattern-cross-dots-lg"].join(' ')}>
                Dot section
            </div>
            <div className={classes.section}>
                Section
            </div>
        </>
    )
}