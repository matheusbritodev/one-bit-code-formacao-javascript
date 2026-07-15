import { Comment } from "./comment.js"

export class Post {
    constructor (author, title, text) {
        this.author = author
        this.title = title
        this.text = text
        this.comments = []
        this.CreatedAt = new Date()
    }

    addComment (username, content) {
        this.comments.push(new Comment(username, content))
    }
}