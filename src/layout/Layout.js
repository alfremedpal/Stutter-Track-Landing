import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Roadmap from '../pages/Roadmap/Roadmap'
import Contact from '../pages/Contact/Contact'
import Navbar from '../components/Navbar/Navbar'
import classes from './Layout.module.css'

export default function Layout() {

    return (
        <>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/roadmap" component={Roadmap} />
            <Route exact path="/contact" component={Contact} />
            <footer className={classes.footer}>
                
                Stutter Track 2020
                <br />
                {process.env.REACT_APP_BUILD_ENV}
            </footer>
        </>
    )
}