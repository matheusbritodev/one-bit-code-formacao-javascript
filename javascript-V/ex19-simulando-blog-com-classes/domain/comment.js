export class Comment {
    constructor (username, content) {
        this.username = username
        this.content = content
        this.CreatedAt = new Date()
    }
}