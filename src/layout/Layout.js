import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Navbar from '../components/Navbar/Navbar'


export default function Layout() {

    return (
        <>
            <Navbar />
            <Route exact path="/" component={Home} />
        </>
    )
}