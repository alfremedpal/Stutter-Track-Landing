import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

import classes from './Navbar.module.css'

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)
    const openClass = [classes.mobileMenu, classes.open].join(' ')
    const closedclass = classes.mobileMenu

    const menuItems = [
        {name: 'Features', link:'/#features'},
        {name: 'Roadmap', link:'/roadmap'},
        {name: 'Support us', link:'/#support'},
        {name: 'Contact', link: '/contact'}
    ]

    return (
        <>
        <nav className={classes.main}>
            <div className={classes.title}>
                <a className={classes.link} href="/">ST</a>
            </div>
            <div className={classes.toggle} onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars/>
            </div>
            <div className={classes.menu}>
                {
                    menuItems.map((item, i) => (
                        <div key={i}>
                            <a className={classes.link} href={item.link} >{item.name}</a>
                        </div>
                    ))
                }
            </div>
        </nav>
        <div className={menuOpen ? openClass : closedclass}>
            {
                menuItems.map((item, i) => (
                    <div key={i}>
                        <a className={classes.link} href={item.link} >{item.name}</a>
                    </div>
                ))
            }
        </div>
        </>
    )
}