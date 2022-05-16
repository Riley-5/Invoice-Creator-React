import React from "react"

/*
    Props: service name and serive amount
*/

function Button(props) {
    return (
        <button id={props.id} className="service-btn" onClick={props.addService}>{props.service}: ${props.amount}</button>
    )
}

export default Button