import { Ride } from "./ride.js"

export class Passanger {
    constructor (name) {
        this.name = name
        this.runHistory = []
 }

    soliciteRun (driver, destiny, kmDistance) {
        const newRide = new Ride(this, driver, destiny, kmDistance) 
        this.runHistory.push(newRide)
        return newRide
 }
}
