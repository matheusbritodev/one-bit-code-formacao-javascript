export class User {
    constructor(name) {
        this.name = name
        this.goalsList = []
    }

    addGoal(goal) {
        return this.goalsList.push(goal)
    }

    relatory() {
        let text = ""
        for (const i of this.goalsList) {
            text += `Goal: ${i.name}\nBalance: ${JSON.stringify(i.calculate())}\nProgress: ${i.progress()}\n\n`
        }
        return text
    }
}