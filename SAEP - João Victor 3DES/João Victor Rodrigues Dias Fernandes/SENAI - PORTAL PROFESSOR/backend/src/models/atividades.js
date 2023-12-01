class Atividades {

    constructor(i) {
        this.id_atividade = i.id_atividade
        this.nome_atividade = i.nome_atividade
    }

    create() {
        return `INSERT INTO atividades (nome_atividade) VALUES ('${this.nome_atividade}')`
    }

    read(){
        if (this.id_atividade == undefined)
            return `SELECT * FROM atividades`
        else
            return `SELECT * FROM atividades WHERE id = ${this.id_atividade}`
    }

    update(){
        return `UPDATE atividades SET nome_atividade = '${this.nome_atividade}' WHERE id = ${this.id_atividade}`
    }

    delete(){
        return `DELETE FROM atividades WHERE id = ${this.id_atividade}`
    }
}

module.exports = Atividades