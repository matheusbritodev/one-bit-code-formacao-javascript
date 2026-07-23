import { Component } from "./component.js"

export class LabelElements extends Component {
    constructor(conteudo) {
        super("label")
        this.readDomElement().textContent = conteudo
    }
}