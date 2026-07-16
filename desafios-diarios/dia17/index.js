class Car {
    constructor (licensePlate) {
        this.licensePlate = licensePlate
        this.isParked = false
    }
}

class ParkingSpace {
    constructor (spaceNumber) {
        this.spaceNumber = spaceNumber
        this.history = []
    }

    parkCar (car) {
        const ticket = new Ticket(this, car) 
        
        car.isParked = true
        this.history.push(ticket)
        
        return ticket
    }
}

class Ticket {
    constructor (parkingSpace, car) {
        this.parkingSpace = parkingSpace
        this.car = car
        this.status = "active"
    }

    releaseCar () {
        this.status = "completed"
        this.car.isParked = false 
    }
}


const car = new Car("ABC-1234")
const space = new ParkingSpace("Space-01")

console.log("Is car parked before?", car.isParked) 

const ticket = space.parkCar(car)

console.log("Ticket status:", ticket.status) 
console.log("Is car parked now?", car.isParked) 
console.log("Total history count for this space:", space.history.length)
ticket.releaseCar()

console.log("Ticket status after release:", ticket.status)
console.log("Is car parked after release?", car.isParked) 