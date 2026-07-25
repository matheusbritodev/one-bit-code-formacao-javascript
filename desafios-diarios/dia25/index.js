import { Service } from "./domain/service.js";
import { Host } from "./domain/host.js";
import { Database } from "./domain/database.js";
import { Project } from "./domain/project.js";

const project = new Project("Micro-Saas")
project.addBudget(500)

const host = new Host("Vercel", 100)
const bd = new Database("PostGree", 50, 5)
project.addService(host)
project.addService(bd)

console.log(project.generateReport())