import React from "react"

/*
    Props: service name and serive amount
*/

function Button(props) {
    return (
        <button id="service-btn">{props.service}: ${props.amount}</button>
    )
}

export default Button