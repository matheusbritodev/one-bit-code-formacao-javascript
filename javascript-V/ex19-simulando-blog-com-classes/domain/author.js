import { Post } from "./post.js"

export class Author {
    constructor (author) {
        this.author = author,
        this.posts = []
    }

    createPost(title, text) {
        const post = new Post(this, title, text)
        this.posts.push(post)
        return post
    }
}