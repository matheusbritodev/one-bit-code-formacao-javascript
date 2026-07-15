import { Driver } from "./driver.js"

export class Ride {
    constructor (passanger, driver, destiny, kmDistance) {
        this.passanger = passanger
        this.driver = driver
        this.destiny = destiny
        this.kmDistance = kmDistance
        this.status = "requested"
        this.price = 0
    }

    startRide () {
        this.status = "ongoing"
        this.driver.disponibility = false
    }

    finishRide () {
        this.status = "completed"
        this.price = 2.50 * this.kmDistance
        this.driver.disponibility = true
    }
}
