import React from 'react'

const Latihan = () => {
    const projects = ["Ecommerceapp", "Blog App", "spotify clone", "Warehouse Manager app"];

    const myFunction = () => {
        console.log("Hello World");
    }

    const renderMyProjects = () => {
        return projects.map(project => <li>{project}</li>)
    }

    return ( 
        <div>
            <h1>Welcome to my website</h1>
            <h1> Here are my project</h1>
            <ul>
                {renderMyProjects()}
            </ul>
        </div>
    )
}

export default Latihan