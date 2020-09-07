import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Roadmap from '../pages/Roadmap/Roadmap'
import Navbar from '../components/Navbar/Navbar'
import classes from './Layout.module.css'

export default function Layout() {

    return (
        <>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/roadmap" component={Roadmap} />
            <footer className={classes.footer}>
                Stutter Track 2020
            </footer>
        </>
    )
}