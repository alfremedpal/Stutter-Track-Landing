import React from 'react'
import { FaFont, FaTags, FaChartPie, FaGlobeAmericas, FaUsers, FaBoxOpen, FaHeart } from 'react-icons/fa'

import classes from './Features.module.css'

export default function Features() {

    return (
        <>
        <div className={classes.main}>
            <div className={classes.feature}>
                <div className={classes.icon}><FaFont /></div>
                <div className={classes.title}>Words</div>
                <div className={classes.descp}>
                    Keep track of any number of words and view
                    how many times you have had trouble with each one
                </div>
            </div>
            <div className={classes.feature}>
                <div className={classes.icon}><FaTags /></div>
                <div className={classes.title}>Tags</div>
                <div className={classes.descp}>
                    Use custom tags to organize and filter your words depending
                    on the context, mood, or anything you want
                </div>
            </div>
            <div className={classes.feature}>
                <div className={classes.icon}><FaChartPie /></div>
                <div className={classes.title}>Stats</div>
                <div className={classes.descp}>
                    View graphs, charts, and plots for all your words, tags,
                    and their counts and occurence
                </div>
            </div>
        </div>
        <div className={classes.main}>
            <div className={classes.feature}>
                <div className={classes.icon}><FaGlobeAmericas /></div>
                <div className={classes.title}>Global Data</div>
                <div className={classes.descp}>
                    Discover what words other people like you have trouble with,
                    filter by region or language
                </div>
            </div>
            <div className={classes.feature}>
                <div className={classes.icon}><FaUsers /></div>
                <div className={classes.title}>Friends List</div>
                <div className={classes.descp}>
                    Add friends to contrast your data with, share stats, tips, and more
                </div>
            </div>
            <div className={classes.feature}>
                <div className={classes.icon}><FaBoxOpen /></div>
                <div className={classes.title}>Open Source</div>
                <div className={classes.descp}>
                    We love and run on open source software; you can contribute
                    to this project!
                </div>
            </div>
        </div>
        </>
    )
}