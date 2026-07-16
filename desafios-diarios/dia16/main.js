/* Um sistema de gestão de biblioteca precisa ser desenvolvido em JavaScript utilizando três classes principais que se relacionam entre si: Book, User e Loan.

O livro (Book) deve ser iniciado com título, autor e sua disponibilidade, que sempre começa como verdadeira (true). O usuário (User) deve ser iniciado apenas com seu nome e um histórico de empréstimos vazio (um array). O empréstimo (Loan) precisa de um usuário, um livro e um status que inicia sempre como "active". No exato momento em que o empréstimo é criado, a disponibilidade do livro associado deve ser alterada para falso (false).

Para as regras de negócio, o usuário deve ter um método para pegar um livro emprestado que recebe o objeto do livro, cria a instância desse empréstimo associando o próprio usuário a ela, guarda esse empréstimo em seu histórico e o retorna. Por fim, o empréstimo deve ter um método para devolver o livro, que altera o status do empréstimo para "returned" e muda a disponibilidade do livro associado de volta para verdadeiro (true). */

class Book {
    constructor (title, author) {
        this.title = title
        this.author = author
        this.disponibility = true
    }
}

class User {
    constructor (name) {
        this.name = name
        this.loan = []
    }
    borrowBook (book) {
        const borrow = new Loan(this, book) // this = referenciar a propria classe User
        book.disponibility = false // book referencia a classe Book através do parâmetro do método
        this.loan.push(borrow)
        return borrow
    }
}

class Loan {
    constructor (user, book) {
        this.user = user
        this.book = book // Guarda a referência da classe Book dentro da classe Loan (poderia ser qualquer nome, mas book é mais intuitivo)
        this.status = "active"
    }

    returnBook () {
        this.status = "returned"
        this.book.disponibility = true // o atributo book esta referenciando a classe Book através do constructor. -> this.book.PRORPIEDADE
    }
}

const user = new User("Alice")
const book = new Book("1984", "George Orwell")

// 1. Teste de Empréstimo
const loan = user.borrowBook(book)
console.log("Empréstimo ativo (status active):", loan.status === "active")
console.log("Livro ficou indisponível (false):", book.disponibility === false)
console.log("Adicionado ao histórico (tamanho 1):", user.loan.length === 1)

// 2. Teste de Devolução
loan.returnBook()
console.log("Empréstimo devolvido (status returned):", loan.status === "returned")
console.log("Livro disponível novamente (true):", book.disponibility === true)