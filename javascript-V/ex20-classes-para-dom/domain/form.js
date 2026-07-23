import { Component } from "./component.js"

export class FormElements extends Component {
    constructor() {
        super("form")
    }

    addElements(son) {
        son.render(this.readDomElement())

    }
}