import React, {useState} from "react"
import "./styles.css"
import Header from "./components/Header"
import Button from "./components/Button"

function App() {
    const [services, setServices] = useState([
        {
            id: 1,
            service: "Wash Car",
            amount: 10
        },
        {
            id: 2,
            service: "Mow Lawn",
            amount: 20
        },
        {
            id: 3,
            service: "Pull Weeds",
            amount: 30
        }
    ])

    const serviceButtons = services.map((serviceItem) => {
        return (
            <Button
                key={serviceItem.id}
                id={serviceItem.id}
                service={serviceItem.service}
                amount={serviceItem.amount}
            />
        )
    })

    return (
        <>
            <Header/>
            <div id="service-btn-container">
                {serviceButtons}
            </div>
        </>
    )
}

export default App