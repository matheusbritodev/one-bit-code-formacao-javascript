export class Goal {
    constructor(name, goalValue) {
        this.name = name
        this.goalValue = goalValue
        this.depositList = []
    }

    calculate() {
        const total = this.depositList.reduce((total, current) => total + current.value, 0)
        return total
    }

    newContribution(contribution) {
        if (this.calculate() + contribution.value <= this.goalValue) {
            this.depositList.push(contribution)
            return "Contribution realized with success"
        } else {
            return "ERROR: This contribution exceeds the goal established"
        } 
    }

    progress() {
        return (this.calculate() / this.goalValue) * 100
    }
}