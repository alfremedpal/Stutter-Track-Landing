import React from 'react'

import Features from '../../components/Features/Features'
import ButtonClass from '../../components/Button/Button.module.css'
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
                    <a
                        href="https://beta.stutter-track.com/signup"
                        target="_blank" rel="noopener noreferrer"
                        className={ButtonClass.buttonLink}
                        style={{width:'175px'}}
                    >
                        Sign up now
                    </a>
                </div>
            </div>
            <div className={classes.section} id="features">
                <h2 className={classes.header}>Features</h2>
                <Features />
            </div>
            <div className={[classes.dotSection, "pattern-cross-dots-lg"].join(' ')} id="support">
                <div className={classes.title}>
                    <h1>Support us</h1>
                    <p>
                        Stutter track is a small project created and maintained by a single person. <br />
                        Help me keep going.
                    </p>
                    <a
                        href="https://www.buymeacoffee.com/amedpal"
                        target="_blank" rel="noopener noreferrer"
                        className={ButtonClass.buttonLink}
                        style={{width:'175px'}}
                    >
                        Buy me a coffee
                    </a>
                </div>
            </div>
            <div className={classes.section}>
                <h2 className={classes.header}>Roadmap</h2>
                <p>
                    Check out the <a href="/roadmap" >roadmap</a> to see where we stand in development. 
                </p>
            </div>
        </>
    )
}