import React from "react"

function Tasks(props) {
    return (
        <div className="tasks-container">
            <div>
                <p>{props.service}</p>
            </div>
            <div> 
                <p>${props.amount}</p>
            </div>
        </div>
    )
}

export default Tasks