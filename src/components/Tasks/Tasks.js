import React from 'react'

import Task from './Task/Task'

export default function Tasks() {

    const tasks = [
        {
            name: 'Sign Up & Sign In', 
            due: 'Late October 2020', 
            desc:'Login and resgistration forms. Currently testing in different environments',
            tags: [{type: 'green', name:'Done'}, {type: 'orange', name:'Beta'}, {type: 'yellow', name:'Testing'}],
        },
        {
            name: 'Word Track', 
            due: 'Mid November 2020', 
            desc:'Keep track of any number of words you stutter with.',
            tags: [{type: 'yellow', name:'Planning'},],
        },
        {
            name: 'Tags', 
            due: 'Early December 2020', 
            desc:'Organize your words using custom tags.',
            tags: [{type: 'yellow', name:'Planning'},],
        },
        {
            name: 'Graphs & Plots', 
            due: 'Early January 2021', 
            desc:'Visualize your word and tag count.',
            tags: [{type: 'none', name:'To do'},],
        },
        {
            name: 'Global Data', 
            due: '2021', 
            desc:'Optionally opt-in to share your word and tag count in a global database for a broader perspective',
            tags: [{type: 'none', name:'To do'},],
        },
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