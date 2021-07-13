import React from 'react'

import Task from './Task/Task'

export default function Tasks() {

    const tasks = [
        {
            name: 'Open beta',
            due: 'Now',
            desc: 
                <>
                    The beta is now live and I'm hoping people like it enough to keep maintaining this!
                    <a href="https://beta.stutter-track.com/signup" target="_blank" rel="noopener noreferrer"> Register now!</a>
                </>,
            tags: [{type: 'green', name:'DONE!'},],
        },
        // {
        //     name: 'Sorry for the delays',
        //     due: 'Soon',
        //     desc: 'As of February the 15th, 2021: we are still in development! I\'ve just been very busy with other projects',
        //     tags: [{type: 'none', name:'WIP'},],
        // },
        // {
        //     name: 'Sign Up & Sign In', 
        //     due: 'Soon', 
        //     desc:'Login and resgistration forms. Currently testing in different environments',
        //     tags: [{type: 'green', name:'Done'}, {type: 'orange', name:'Beta'}, {type: 'yellow', name:'Testing'}],
        // },
        // {
        //     name: 'Word Track', 
        //     due: 'Soon', 
        //     desc:'Keep track of any number of words you stutter with.',
        //     tags: [{type: 'yellow', name:'Planning'},],
        // },
        // {
        //     name: 'Tags', 
        //     due: 'Soon', 
        //     desc:'Organize your words using custom tags.',
        //     tags: [{type: 'yellow', name:'Planning'},],
        // },
        // {
        //     name: 'Graphs & Plots', 
        //     due: 'Soon', 
        //     desc:'Visualize your word and tag count.',
        //     tags: [{type: 'none', name:'To do'},],
        // },
        // {
        //     name: 'Global Data', 
        //     due: 'Soon', 
        //     desc:'Optionally opt-in to share your word and tag count in a global database for a broader perspective',
        //     tags: [{type: 'none', name:'To do'},],
        // },
    ]


    return (
        <>
        {
            tasks.map((task, i) => (
                <Task 
                    key={i}
                    name={task.name}
                    due={task.due}
                    tags={task.tags}
                >
                    {task.desc}
                </Task>
            ))
        }
        </>
    )
}