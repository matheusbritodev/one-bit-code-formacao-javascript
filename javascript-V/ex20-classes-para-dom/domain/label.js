import { Component } from "./superClass.js"

export class LabelElements extends Component {
    constructor(conteudo) {
        super("label")
        this.readDomElement().textContent = conteudo
    }
}