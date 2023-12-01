class Turmas {

    constructor(i) {
        this.id_turma = i.id_turma
        this.nome_turma = i.nome_turma
    }

    create() {
        return `INSERT INTO turmas (nome_turma) VALUES ('${this.nome_turma}')`
    }

    read(){
        if (this.id_turma == undefined)
            return `SELECT * FROM turmas`
        else
            return `SELECT * FROM turmas WHERE id = ${this.id_turma}`
    }

    update(){
        return `UPDATE turmas SET nome_turma = '${this.nome_turma}' WHERE id = ${this.id_turma}`
    }

    delete(){
        return `DELETE FROM turmas WHERE id = ${this.id_turma}`
    }
}

module.exports = Turmas;