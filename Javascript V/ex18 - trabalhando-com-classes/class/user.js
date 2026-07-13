export class User {
    constructor (fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login (email, password) {
        return email === this.email && password === this.password 
        ? "Login efetuado com sucesso!" //true
        : "ERRO: Usuario e senha diferentes!" //false
    }
}