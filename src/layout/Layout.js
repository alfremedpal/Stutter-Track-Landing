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
                
                <div>
                    <a href="/#features" >Features</a>
                </div>
                
                <div>
                    <a href="/roadmap" >Roadmap</a>
                </div>
                
                <div>
                    <a 
                        href="https://www.buymeacoffee.com/amedpal" 
                        target="_blank" rel="noopener noreferrer" 
                    >
                        Support
                    </a>
                </div>

                <div>
                    <a href="/contact" >Contact</a>
                </div>

                <div>
                    <a href="/opensource" >Open Source</a>
                </div>
            </footer>
        </>
    )
}