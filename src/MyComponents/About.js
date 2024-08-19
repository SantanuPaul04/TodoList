import React from 'react'

export const About = () => {
    let myStyle = {
        minHeight: "70vh",
    }
    return (
        <div className='container my-5' style={myStyle}>
            <p className='fs-3 '>Welcome to TodoList! <br /></p>
            <p className='fs-5'>
            TodoList is your go-to app for managing daily tasks and staying organized. With our user-friendly interface, you can effortlessly:
            <br /> <br/>
            Add Tasks : Quickly add your daily to-dos and keep track of what needs to be done.<br />
            Delete Tasks : Remove tasks that are no longer relevant or have been completed, keeping your to-do list clutter-free.<br /> <br />

            Thank you for using TodoList — We’re here to help you stay on top of your tasks and achieve your goals!</p>
        </div>
    )
}
