import React, {useState} from "react"
import "./styles.css"
import Header from "./components/Header"
import Button from "./components/Button"
import Tasks from "./components/Tasks"

function App() {
    const services = [
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
    ]

    const [servicesRequested, setServicesRequested] = useState([]) 
    const [sum, setSum] = useState(0)

    const serviceButtons = services.map((serviceItem) => {
        return (
            <Button
                key={serviceItem.id}
                id={serviceItem.id}
                service={serviceItem.service}
                amount={serviceItem.amount}
                addService={(event) => addService(event)}
            />
        )
    })

    function addService(e) {
        const id = e.target.id
        services.map((serviceItem) => {
            if (parseInt(serviceItem.id) === parseInt(id)) {
                setSum((sum + serviceItem.amount))
                setServicesRequested((prevServicesRequested) => {
                    return (
                        [
                            ...prevServicesRequested,
                            serviceItem
                        ]
                    )
                })
            }
        })
    }

    const tasks = servicesRequested.map((serviceItem) => {
        return (
            <Tasks
                key={serviceItem.id}
                id={serviceItem.id}
                service={serviceItem.service}
                amount={serviceItem.amount}
            />
        )
    })

    function resetApp() {
        setServicesRequested([])
        setSum(0)
    } 

    return (
        <>
            <Header/>
            <div id="service-btn-container">
                {serviceButtons}
            </div>
            <div className="tasks-container">
                <p>Task</p>
                <p>TOTAL</p>
            </div>
            {tasks}
            <div id="total-container">
                <div>
                    <p>Notes</p>
                    <p>We accept cash, credit card, or PayPal</p>
                </div>
                <div>
                    <p>TOTAL AMOUNT</p>
                    <p id="total-amount-el">${sum}</p>
                </div>
            </div>
            <div id="send-invoice-container">
                <button id="send-invoice-btn" onClick={resetApp}>Send invoice</button>
            </div>
        </>
    )
}

export default App