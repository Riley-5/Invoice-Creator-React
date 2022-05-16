import React from "react"

function Tasks(props) {
    return (
        <div className="tasks-container">
            <div>
                <p id="service-el">{props.service}</p>
            </div>
            <div> 
                <p id="amount-el">${props.amount}</p>
            </div>
        </div>
    )
}

export default Tasks