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
            if (serviceItem.id == id) {
                setServicesRequested((prevServicesRequested) => {
                    return (
                        [
                            ...prevServicesRequested,
                            serviceItem
                        ]
                    )
                })
                return servicesRequested
            }
        })
    }

    const tasks = servicesRequested.map((servicesItem) => {
        return (
            <Tasks
                key={servicesItem.id}
                id={servicesItem.id}
                service={servicesItem.service}
                amount={servicesItem.amount}
            />
        )
    })



    return (
        <>
            <Header/>
            <div id="service-btn-container">
                {serviceButtons}
            </div>
            <div className="tasks-container">
                <p>Task</p>
                <p>TOTAL AMOUNT</p>
            </div>
            {tasks}
        </>
    )
}

export default App