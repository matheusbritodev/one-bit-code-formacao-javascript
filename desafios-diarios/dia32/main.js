class Task {
    constructor(title, priority, deadline) {
        this.title = title
        this.priority = priority
        this.deadline = deadline
    }
}

class Project {
    constructor(name) {
        this.name = name
        this.taskList = []
    }

    addTask(task) {
        if (task.priority === "Low") {
            return "This project doesn't focus on low priority tasks"
        } else {
            this.taskList.push(task)
            return "Task added"
        } 
    }

    relatory() {
        let total = ""
        for (const i of this.taskList) {
            total += `Title: ${i.title} | Priority: ${i.priority} | Deadline: ${i.deadline}\n`
        }
        return total
    }
}

const project = new Project("Projeto 1")

const task1 = new Task("1ª task", "High","04/08/2026")
const task2 = new Task("2ª task", "Medium","05/08/2026")
const task3 = new Task("3ª task", "Low","03/08/2026")

console.log(project.addTask(task1))
console.log(project.addTask(task2))
console.log(project.addTask(task3))

console.log(project.relatory())