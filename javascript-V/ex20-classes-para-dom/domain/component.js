export class Component {
    #reference
    constructor(tagName) {
        this.tagName= tagName
        this.buildElement()
    }

    readDomElement() {
        return this.#reference
    }
    
    buildElement() {
        this.#reference = document.createElement(this.tagName)
    }

    render(tagFather) {
        tagFather.appendChild(this.#reference)
    }
}
