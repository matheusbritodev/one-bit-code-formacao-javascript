class Bike {
    constructor (id) {
        this.id = id
        this.isDocked = true
    }
}

class Station {
    constructor (name) {
        this.name = name
        this.history = []
    }

    startRide (user, bike) {
        const register = new Ride(this, user, bike)
        bike.isDocked = false
        this.history.push(register)
        return register
    }
}

class Ride {
    constructor (departureStation, user, bike) {
        this.departureStation = departureStation
        this.user = user
        this.bike = bike
        this.status = "ongoing"
    }

    endRide () {
        this.status = "finished"
        this.bike.isDocked = true
    }
}

const bike = new Bike(1)
const station = new Station("Station-0123")

const myRide = station.startRide("Matheus", bike)

console.log("Bike após iniciar viagem:", bike, "\n")
console.log("Estação com histórico:", station, "\n")

myRide.endRide() 

console.log("Bike após encerrar viagem:", bike, "\n")

