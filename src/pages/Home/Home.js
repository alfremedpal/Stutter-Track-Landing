import React from 'react'
import classes from './Home.module.css'

export default function Home() {

    return (
        <>
            <div className={[classes.hero, "pattern-cross-dots-lg "].join(' ')}>
                Home
            </div>
        </>
    )
}