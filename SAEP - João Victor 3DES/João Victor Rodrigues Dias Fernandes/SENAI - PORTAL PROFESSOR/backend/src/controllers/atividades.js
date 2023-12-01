const con = require("../dao/connect");
const Atividades = require("../models/atividades")

const criar = (req,res) =>{
    let atividades = new Atividades(req.body)
    con.query(atividades.create(),(err,result) => {
        if(err == null)
            res.status(201).end()
        else
            res.status(505).json(err).end()
    })
}

const listar = (req, res) => {
    let atividades = new Atividades(req.params)
    con.query(atividades.read(), (err, result) =>{
        if(err == null)
            res.status(200).json(result).end()
        else
            res.status(505).json(err).end()
    })
}

const alterar = (req,res) => {
    let atividades = new Atividades(req.body)
    con.query(atividades.update(),(err,result) =>{
        if(result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req,res) => {
    let atividades = new Atividades(req.params)
    con.query(atividades.delete(), (err,result) => {
        if(result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    criar,
    listar,
    alterar,
    excluir
}