class Professor {

    constructor(i) {
       this.id_professor = i.id_professor
       this.nome_professor = i.nome_professor
       this.email_professor = i.email_professor
       this.senha_professor = i.senha_professor 
    }

    create() {
        return `INSERT INTO professor (nome_professor, email_professor, senha_professor) VALUES ('${this.nome_professor}', '${this.email_professor}', '${this.senha_professor}')`
    }

    read(){
        if (this.id_professor == undefined)
            return `SELECT * FROM professor`
        else
            return `SELECT * FROM professor WHERE id = ${this.id_professor}`
    }

    update() {
        return `UPDATE professor SET nome_professor = '${this.nome_professor}', email_professor = '${this.email_professor}', senha_professor = '${this.senha_professor}' WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM professor WHERE id = ${this.id_professor}`
    }
}

module.exports = Professor;